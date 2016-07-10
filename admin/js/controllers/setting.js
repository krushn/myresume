padmin.controller("SettingCtrl", function ($scope, $http, $state, $stateParams) {

    $scope.skype = '';
    $scope.mobile = '';
    $scope.telephone = '';
    $scope.address = '';
    $scope.map_image = '';
    $scope.map_url = '';
    $scope.upload_url = '';
    $scope.thumb_url = '';
    $scope.msg = '';
    
    $scope.name = '';
    $scope.about_me = '';
    $scope.avatar = '';
    $scope.skills = '';
    $scope.designation = '';
    $scope.email_address = '';
    $scope.meta_title = '';
    $scope.meta_content = '';
    $scope.meta_keywords = '';
    
    $scope.mail_protocol = '';
    $scope.mail_host = '';
    $scope.mail_username = '';
    $scope.mail_password = '';
    $scope.mail_smtp_port = '';
    
    $scope.username = '';
    $scope.password = '';
    
    $http.get('../api/admin/setting').then(function (result) {
        
        $scope.mail_protocol = result.data.mail_protocol;
        $scope.mail_host = result.data.mail_host;
        $scope.mail_username = result.data.mail_username;
        $scope.mail_password = result.data.mail_password;
        $scope.mail_smtp_port = result.data.mail_smtp_port;
        
        $scope.msg = result.data.msg;
        $scope.skype = result.data.skype;
        $scope.mobile = result.data.mobile;
        $scope.telephone = result.data.telephone;
        $scope.address = result.data.address;
        $scope.map_image = result.data.map_image;
        $scope.map_url = result.data.map_url;
        $scope.upload_url = result.data.upload_url;
        $scope.thumb_url = result.data.thumb_url;

        $scope.name = result.data.name;
        $scope.about_me = result.data.about_me;
        $scope.avatar = result.data.avatar;
        $scope.skills = result.data.skills;
        $scope.designation = result.data.designation;
        $scope.email_address = result.data.email_address;
        $scope.meta_title = result.data.meta_title;
        $scope.meta_content = result.data.meta_content;
        $scope.meta_keywords = result.data.meta_keywords;
    });
    
    $scope.uploadAvatar = function(files) {
               
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post($scope.upload_url, fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function(result){
            $scope.avatar = result.upload_data.file_name;            
        }).error(function(){ 
            alert('error on image upload!');
        });
    };
    
    $scope.uploadMap = function(files) {
               
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post($scope.upload_url, fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function(result){
            $scope.map_image = result.upload_data.file_name;            
        }).error(function(){ 
            alert('error on image upload!');
        });
    };

    $scope.submit = function () {
        $http.post('../api/admin/setting/update',
                {
                    mail_protocol: $scope.mail_protocol,
                    mail_host: $scope.mail_host,
                    mail_username: $scope.mail_username,
                    mail_password: $scope.mail_password,
                    mail_smtp_port: $scope.mail_smtp_port,
                    username: $scope.username,
                    password: $scope.password,
                    mobile: $scope.mobile,
                    skype: $scope.skype,
                    telephone: $scope.telephone,
                    address: $scope.address,
                    map_image: $scope.map_image,
                    map_url: $scope.map_url,                    
                    name: $scope.name,
                    about_me: $scope.about_me,
                    avatar: $scope.avatar,
                    skills: $scope.skills,
                    designation: $scope.designation,
                    email_address: $scope.email_address,
                    meta_title: $scope.meta_title,
                    meta_content: $scope.meta_content,
                    meta_keywords: $scope.meta_keywords                    
                }).then(function (result) {
            $state.go("setting", {}, {reload: true});
        });
    };
});