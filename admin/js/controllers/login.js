padmin.controller("LoginCtrl", function ($scope, $http, $state, $stateParams) {

    $scope.username = '';
    $scope.password = '';

    $scope.submit = function () {
        $http.post('../api/admin/login',
            {
                mobile: $scope.mobile,
                telephone: $scope.telephone              
            }).then(function (result) {
                
                if (result.status = 1) {
                    $state.go("dashboard");
                } else {
                    
                }
        });
    };
});