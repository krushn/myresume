
var plogin = angular.module("plogin", ["ui.router", "snap", "ngAnimate"]);

plogin.controller("LoginCtrl", function ($scope, $http) {

    $scope.username = '';
    $scope.password = '';
    $scope.msg = '';
    
    $scope.submit = function(e){        
        
        $http.post('../api/admin/user/login',
        {
            username: $scope.username,
            password: $scope.password
        }).then(function (result) { 
            
           if(result.data.status == 1){    
               
                location = '../admin/';
                              
           }else{
               
                $html  = '<div class="alert alert-warning">';
                $html += '<button class="close" data-dismiss="alert">&times;</button>';
                $html += 'Username or Password not matched!';
                $html += '</div>';
                
                $('#msg_wrapper').html($html);                
           }            
        });    
    };
    
    
    $scope.recover_pwd = function(){
        
        $http.get('../api/admin/user/recover_pwd').then(function (result) {
           
            $html  = '<div class="alert alert-success">';
            $html += '<button class="close" data-dismiss="alert">&times;</button>';
            $html += 'Password sent to registered email address!';
            $html += '</div>';
            
            $('#msg_wrapper').html($html);        
        });
    };
});