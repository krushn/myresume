padmin.controller("LogoutCtrl", function($scope, $state, $http){
    $http.get('../api/admin/user/logout').then(function (result) {
        location = 'login.html';
    });
});

padmin.controller("HeaderCtrl", function($scope, $state, $http){
    $scope.name = '';
    $scope.designation = '';
    $scope.avatar = '';

    $http.get('../api/admin/user').then(function (result) {
        $scope.name = result.data.name;
        $scope.designation = result.data.designation; 
        $scope.avatar = result.data.avatar;
    });
});

padmin.controller("DashboardCtrl", function ($scope, $state, $http) {

    $scope.achievements = '';
    $scope.projects = '';
    $scope.certificate = '';
    $scope.portfolio = '';

    $scope.labels = '';
    $scope.series = '';
    $scope.data = '';

    $scope.getGraphData = function(type){
        $http.get('../api/admin/dashboard/getGraphData/'+type).then(function (result) {
            $scope.labels = result.data.labels;
            $scope.series = result.data.series;
            $scope.data = result.data.values;
            
            $('.graph-type-menu li a').removeClass('active');
            $('.graph-type-menu li a[data-type="'+type+'"]').addClass('active');
        });
    };

    $http.get('../api/admin/dashboard').then(function (result) {
        $scope.achievements = result.data.achievements;
        $scope.projects = result.data.projects;
        $scope.certificate = result.data.certificate;
        $scope.portfolio = result.data.portfolio;    
        
        $scope.getGraphData('day');
    });
});