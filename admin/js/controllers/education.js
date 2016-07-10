padmin.controller("EducationCtrl", function ($scope, $http, $state, $stateParams) {
    $scope.educations = [];

    $http.get('../api/admin/education/index/' + $stateParams.page).then(function (result) {
        $scope.educations = result.data.rows;
        
        if(result.data.pagination){    
            $('.pagination').html(result.data.pagination);   
        }else{
            $('.pagination').parents('.box-footer').remove();
        }
    });

    $scope.delete = function (id) {
        if (confirm('Are you sure?')) {
            $http.get('../api/admin/education/delete/' + id).then(function (result) {
                $state.go("education", {}, {reload: true});
            });
        }
    };
});

padmin.controller("EducationInsertCtrl", function ($scope, $http, $state) {

    $scope.institute = '';
    $scope.degree = '';
    $scope.passout_year = '';
    $scope.result = '';
    $scope.sort_order = '';
    $scope.status = '';

    $scope.submit = function () {
        $http.post('../api/admin/education/insert',
            {
                institute: $scope.institute,
                degree: $scope.degree,
                passout_year: $scope.passout_year,
                result: $scope.result,
                sort_order: $scope.sort_order,
                status: $scope.status
            }).then(function (result) {
            $state.go("education");
        });
    };
});

padmin.controller("EducationEditCtrl", function ($scope, $http, $state, $stateParams) {

    $scope.institute = '';
    $scope.degree = '';
    $scope.passout_year = '';
    $scope.result = '';
    $scope.sort_order = '';
    $scope.status = '';

    $http.get('../api/admin/education/view/' + $stateParams.id).then(function (result) {
        $scope.institute = result.data.institute;
        $scope.degree = result.data.degree;
        $scope.passout_year = result.data.passout_year;
        $scope.result = result.data.result;
        $scope.sort_order = result.data.sort_order;
        $scope.status = result.data.status;
    });

    $scope.submit = function () {
        $http.post('../api/admin/education/update/' + $stateParams.id,
                {
                    institute: $scope.institute,
                    degree: $scope.degree,
                    passout_year: $scope.passout_year,
                    result: $scope.result,
                    sort_order: $scope.sort_order,
                    status: $scope.status
                }).then(function (result) {
            $state.go("education");
        });
    };
});