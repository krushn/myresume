padmin.controller("ProjectsCtrl", function ($scope, $http, $state, $stateParams) {
    $scope.projects = [];

    $http.get('../api/admin/projects/index/' + $stateParams.page).then(function (result) {
        $scope.projects = result.data.rows;

        if(result.data.pagination){    
            $('.pagination').html(result.data.pagination);   
        }else{
            $('.pagination').parents('.box-footer').remove();
        }    
    });

    $scope.delete = function (id) {
        if (confirm('Are you sure?')) {
            $http.get('../api/admin/projects/delete/' + id).then(function (result) {
                $state.go("projects", {}, {reload: true});
            });
        }
    };
});

padmin.controller("ProjectsInsertCtrl", function ($scope, $http, $state) {

    $scope.duration_month = '';
    $scope.duration_year = '';
    $scope.title  = '';
    $scope.description = '';
    $scope.url = '';
    $scope.skill_used = '';
    $scope.sort_order = '';
    $scope.status = '';

    $scope.submit = function () {
        $http.post('../api/admin/projects/insert',
            {
                duration_month: $scope.duration_month,
                duration_year: $scope.duration_year,
                title: $scope.title,
                description: $scope.description,
                url: $scope.url,
                skill_used: $scope.skill_used,                
                sort_order: $scope.sort_order,
                status: $scope.status
            }).then(function (result) {
            $state.go("projects");
        });
    };
});

padmin.controller("ProjectsEditCtrl", function ($scope, $http, $state, $stateParams) {
    
    $scope.company = '';
    $scope.position = '';
    $scope.date_from  = '';
    $scope.date_to = '';
    $scope.responsibility = '';
    $scope.sort_order = '';
    $scope.status = '';

    $http.get('../api/admin/projects/view/' + $stateParams.id).then(function (result) {
        $scope.duration_month = result.data.duration_month;
        $scope.duration_year = result.data.duration_year;
        $scope.title = result.data.title;
        $scope.description = result.data.description;
        $scope.url = result.data.url;
        $scope.skill_used = result.data.skill_used;                
        $scope.sort_order = result.data.sort_order;
        $scope.status = result.data.status;
    });

    $scope.submit = function () {
        $http.post('../api/admin/projects/update/' + $stateParams.id,
                {
                    duration_month: $scope.duration_month,
                    duration_year: $scope.duration_year,
                    title: $scope.title,
                    description: $scope.description,
                    url: $scope.url,
                    skill_used: $scope.skill_used,                
                    sort_order: $scope.sort_order,
                    status: $scope.status
                }).then(function (result) {
            $state.go("projects");
        });
    };
});