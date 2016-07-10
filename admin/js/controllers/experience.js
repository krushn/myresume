padmin.controller("ExperienceCtrl", function ($scope, $http, $state, $stateParams) {
    $scope.experiences = [];

    $http.get('../api/admin/experience/index/' + $stateParams.page).then(function (result) {
        $scope.experiences = result.data.rows;
                
        if(result.data.pagination){    
            $('.pagination').html(result.data.pagination);   
        }else{
            $('.pagination').parents('.box-footer').remove();
        }
    });

    $scope.delete = function (id) {
        if (confirm('Are you sure?')) {
            $http.get('../api/admin/experience/delete/' + id).then(function (result) {
                $state.go("experience", {}, {reload: true});
            });
        }
    };
});

padmin.controller("ExperienceInsertCtrl", function ($scope, $http, $state) {

    $scope.company = '';
    $scope.position = '';
    $scope.date_from  = '';
    $scope.date_to = '';
    $scope.responsibility = '';
    $scope.sort_order = '';
    $scope.status = '';

    $scope.submit = function () {
        $http.post('../api/admin/experience/insert',
            {
                company: $scope.company,
                position: $scope.position,
                date_from: $scope.date_from,
                date_to: $scope.date_to,
                responsibility: $scope.responsibility,                
                sort_order: $scope.sort_order,
                status: $scope.status
            }).then(function (result) {
            $state.go("experience");
        });
    };
});

padmin.controller("ExperienceEditCtrl", function ($scope, $http, $state, $stateParams) {
    
    $scope.company = '';
    $scope.position = '';
    $scope.date_from  = '';
    $scope.date_to = '';
    $scope.responsibility = '';
    $scope.sort_order = '';
    $scope.status = '';

    $http.get('../api/admin/experience/view/' + $stateParams.id).then(function (result) {
        $scope.company = result.data.company;
        $scope.position = result.data.position;
        $scope.date_from = result.data.date_from;
        $scope.date_to = result.data.date_to;
        $scope.responsibility = result.data.responsibility;
        $scope.sort_order = result.data.sort_order;
        $scope.status = result.data.status;
    });

    $scope.submit = function () {
        $http.post('../api/admin/experience/update/' + $stateParams.id,
                {
                    company: $scope.company,
                    position: $scope.position,
                    date_from: $scope.date_from,
                    date_to: $scope.date_to,
                    responsibility: $scope.responsibility,                
                    sort_order: $scope.sort_order,
                    status: $scope.status
                }).then(function (result) {
            $state.go("experience");
        });
    };
});