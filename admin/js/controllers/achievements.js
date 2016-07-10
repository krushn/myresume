padmin.controller("AchivementCtrl", function ($scope, $http, $state, $stateParams) {
    $scope.achievements = [];

    $http.get('../api/admin/achievements/index/' + $stateParams.page).then(function (result) {
        $scope.achievements = result.data.rows;
                
        if(result.data.pagination){    
            $('.pagination').html(result.data.pagination);   
        }else{
            $('.pagination').parents('.box-footer').remove();
        }
    });

    $scope.delete = function (id) {
        if (confirm('Are you sure?')) {
            $http.get('../api/admin/achievements/delete/' + id).then(function (result) {
                $state.go("achievements", {}, {reload: true});
            });
        }
    };
});

padmin.controller("AchivementInsertCtrl", function ($scope, $http, $state) {

    $scope.description = '';
    $scope.sort_order = '';
    $scope.status = '';

    $scope.submit = function () {
        $http.post('../api/admin/achievements/insert',
                {
                    description: $scope.description,
                    sort_order: $scope.sort_order,
                    status: $scope.status
                }).then(function (result) {
            $state.go("achievements");
        });
    };
});

padmin.controller("AchivementEditCtrl", function ($scope, $http, $state, $stateParams) {

    $scope.description = '';
    $scope.sort_order = '';
    $scope.status = '';

    $http.get('../api/admin/achievements/view/' + $stateParams.achievement_id).then(function (result) {
        $scope.description = result.data.description;
        $scope.sort_order = result.data.sort_order;
        $scope.status = result.data.status;
    });

    $scope.submit = function () {
        $http.post('../api/admin/achievements/update/' + $stateParams.achievement_id,
                {
                    description: $scope.description,
                    sort_order: $scope.sort_order,
                    status: $scope.status
                }).then(function (result) {
            $state.go("achievements");
        });
    };
});