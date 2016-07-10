"use strict";

/* achievements
 * education
 * experience 
 * portfolio 
 * projects
 * settings
 * skills
 */

angular.module("yapp", ["ui.router", "snap", "ngAnimate"]).config(["$stateProvider", "$urlRouterProvider", function (r, t) {
                t.when("/dashboard", "/dashboard/overview"),
                t.otherwise("/dashboard"), //login
                r.state("base", {"abstract": !0, url: "", templateUrl: "views/base.html"})
                .state("login", {url: "/login", parent: "base", templateUrl: "views/login.html", controller: "LoginCtrl"})
                .state("dashboard", {url: "/dashboard", parent: "base", templateUrl: "views/dashboard.html", controller: "DashboardCtrl"})
                .state("overview", {url: "/overview", parent: "dashboard", templateUrl: "views/dashboard/overview.html"})
                .state("reports", {url: "/reports", parent: "dashboard", templateUrl: "views/dashboard/reports.html"})
                .state("achievements", {url: "/achievements", templateUrl: "views/achievement/list.html", controller: "AchivementCtrl"})
                .state("education", {url: "/education", templateUrl: "views/education/list.html", controller: "EducationCtrl"})
                .state("experience", {url: "/experience", templateUrl: "views/experience/list.html", controller: "ExperienceCtrl"})
                .state("portfolio", {url: "/portfolio", templateUrl: "views/portfolio/list.html", controller: "PortfolioCtrl"})
                .state("portfolio_view", {url: "/portfolio/view/:image_id", templateUrl: "views/portfolio/view.html", controller: "PortfolioViewCtrl"})
                .state("projects", {url: "/projects", templateUrl: "views/projects/list.html", controller: "ProjectsCtrl"})
                .state("contact", {url: "/contact",  templateUrl: "views/common/contact.html", controller: "ContactCtrl"})
//        
//                .state("education", {url: "/education", parent: "dashboard", templateUrl: "views/achievement/list.html"})
//                .state("experience", {url: "/achievements", parent: "dashboard", templateUrl: "views/achievement/list.html"})
//                .state("portfolio", {url: "/achievements", parent: "dashboard", templateUrl: "views/achievement/list.html"})
//                .state("projects", {url: "/achievements", parent: "dashboard", templateUrl: "views/achievement/list.html"})
//                .state("skills", {url: "/achievements", parent: "dashboard", templateUrl: "views/achievement/list.html"})


    }]),
    angular.module("yapp").controller("PortfolioViewCtrl", function ($scope, $http, $stateParams) {
        $scope.image = [];

        $http.get('api/portfolio/view/' + $stateParams.image_id).then(function (result) {
            $scope.image = result.data;
        });
    }),
    angular.module("yapp").controller("PortfolioCtrl", function ($scope, $http) {
        $scope.images = [];

        $http.get('api/portfolio/').then(function (result) {
            $scope.images = result.data;
        });
    }),
    angular.module("yapp").controller("LoginCtrl", ["$scope", "$location", function (r, t) {
        r.submit = function () {
            return t.path("/dashboard"), !1
        }
    }]),
    angular.module("yapp").controller("AchivementCtrl", function ($scope, $http) {
        $scope.achievements = [];

        $http.get('api/achievements/').then(function (result) {
            $scope.achievements = result.data;
        });
    }),
    angular.module("yapp").controller("EducationCtrl", function ($scope, $http) {

        $scope.education = [];

        $http.get('api/education/').then(function (result) {
            $scope.education = result.data;
        });
    }),
    angular.module("yapp").controller("ExperienceCtrl", function ($scope, $http) {

        $scope.experience = [];

        $http.get('api/experience/').then(function (result) {
            $scope.experience = result.data;
        });
    }),
    angular.module("yapp").controller("ProjectsCtrl", function ($scope, $http) {

        $scope.projects = [];

        $http.get('api/projects/').then(function (result) {
            $scope.projects = result.data;
        });
    }),
    angular.module("yapp").controller("ContactCtrl", function ($scope, $http) {

        $scope.address = '';
        $scope.mobile = '';
        $scope.telephone = '';
        $scope.map_image = '';
        $scope.submited = 0;

        $scope.hide_alert = function(){
            $scope.submited = 0;
        };

        $scope.reset = function(form) {
            $scope.contact_form.$setPristine();
            $scope.name = $scope.email = $scope.message = '';
        };

        // function to submit the form after all validation has occurred            
        $scope.contact = function () {
            $http.post('api/contact/save',
            {
                name: $('input[name="name"]').val(),
                email: $('input[name="email"]').val(),
                message: $('textarea[name="message"]').val()
            }).then(function (result) {
                if (result.data.status == 1) {
                    $scope.submited = 1;
                    $scope.reset();
                }
            });
        };

        $http.get('api/contact/').then(function (result) {

            $('.address').html(result.data.address);

            $scope.mobile = result.data.mobile;
            $scope.telephone = result.data.telephone;
            $scope.map_image = result.data.map_image;
            $scope.map_url = result.data.map_url;

            //$scope.apply();
        });
    }),
    angular.module("yapp").controller("MenuCtrl", function ($scope, $http) {        
       $http.get('api/dashboard/').then(function (result) {
            $scope.avatar = result.data.avatar;      
            
            $('title').html(result.data.meta_title); 
            $('meta[name="keywords"]').attr('content', result.data.meta_keywords); 
            $('meta[name="description"]').attr('content', result.data.meta_content);
            
        });
    }),
    angular.module("yapp").controller("DashboardCtrl", function ($scope, $http) {
        
       $http.get('api/dashboard/').then(function (result) {

            $('#about_me').html(result.data.about_me);
            $('#skills').html(result.data.skills);            
            $scope.avatar = result.data.avatar;
            $scope.name = result.data.name;
        });
    });
