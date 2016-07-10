padmin.controller("PortfolioCtrl", function ($scope, $http, $state, $stateParams) {
    $scope.portfolios = [];

    $http.get('../api/admin/portfolio/index/' + $stateParams.page).then(function (date_added) {
        $scope.portfolios = date_added.data.rows;
        
        if(date_added.data.pagination){    
            $('.pagination').html(date_added.data.pagination);   
        }else{
            $('.pagination').parents('.box-footer').remove();
        }
    });

    $scope.delete = function (image_id) {
        if (confirm('Are you sure?')) {
            $http.get('../api/admin/portfolio/delete/' + image_id).then(function (date_added) {
                $state.go("portfolio", {}, {reload: true});
            });
        }
    };
});

padmin.controller("PortfolioInsertCtrl", function ($scope, $http, $state) {

    $scope.image = '';
    $scope.title = '';
    $scope.description = '';
    $scope.sort_order = '';
    $scope.status = '';
    $scope.upload_url = '';
    $scope.thumb_url = '';
    
    $http.get('../api/admin/portfolio/view/o').then(function (result) {
        $scope.image = result.data.image;
        $scope.title = result.data.title;
        $scope.description = result.data.description;
        $scope.sort_order = result.data.sort_order;
        $scope.status = result.data.status;
        
        $scope.upload_url = result.data.upload_url;
        $scope.thumb_url = result.data.thumb_url;
    });
    
    $scope.uploadImage = function(files) {
               
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post($scope.upload_url, fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function(result){
            $scope.image = result.upload_data.file_name;            
        }).error(function(){ 
            alert('error on image upload!');
        });
    };
    
    $scope.submit = function () {
        $http.post('../api/admin/portfolio/insert',
            {
                image: $scope.image,
                title: $scope.title,
                description: $scope.description,
                sort_order: $scope.sort_order,
                status: $scope.status
            }).then(function (result) {
            $state.go("portfolio");
        });
    };
});

padmin.controller("PortfolioEditCtrl", function ($scope, $http, $state, $stateParams) {

    $scope.image = '';
    $scope.title = '';
    $scope.description = '';
    $scope.sort_order = '';
    $scope.status = '';
    $scope.upload_url = '';
    $scope.thumb_url = '';
    
    $http.get('../api/admin/portfolio/view/' + $stateParams.image_id).then(function (result) {
        $scope.image = result.data.image;
        $scope.title = result.data.title;
        $scope.description = result.data.description;
        $scope.sort_order = result.data.sort_order;
        $scope.status = result.data.status;
        
        $scope.upload_url = result.data.upload_url;
        $scope.thumb_url = result.data.thumb_url;
    });

    $scope.uploadImage = function(files) {
               
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post($scope.upload_url, fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function(result){
            $scope.image = result.upload_data.file_name;            
        }).error(function(){ 
            alert('error on image upload!');
        });
    };
    
    $scope.submit = function () {
        $http.post('../api/admin/portfolio/update/' + $stateParams.image_id,
                {
                    image: $scope.image,
                    title: $scope.title,
                    description: $scope.description,
                    sort_order: $scope.sort_order,
                    status: $scope.status
                }).then(function (date_added) {
            $state.go("portfolio");
        });
    };
});