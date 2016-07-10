"use strict";

/* achievements
 * education
 * experience  
 * projects
 * settings
 * portfolio 
 * skills
 */

window.padmin = angular.module("padmin", ["chart.js", "ui.router", "snap", "ngAnimate"]).config(["$stateProvider", "$urlRouterProvider", function (r, t) {
    t.when("", "/dashboard"),
   // t.otherwise("/login"), //login
    r.state("logout", {url: "/logout", controller: "LogoutCtrl"})
    .state("dashboard", {url: "/dashboard", templateUrl: "views/dashboard.html", controller: "DashboardCtrl"})

    .state("achievements", {url: "/achievements/:page", templateUrl: "views/achievement/list.html", controller: "AchivementCtrl"})
    .state("achievements_insert", {url: "/achievements/insert", templateUrl: "views/achievement/insert.html", controller: "AchivementInsertCtrl"})
    .state("achievements_edit", {url: "/achievements/edit/:achievement_id", templateUrl: "views/achievement/edit.html", controller: "AchivementEditCtrl"})

    //education
    .state("education", {url: "/education/:page", templateUrl: "views/education/list.html", controller: "EducationCtrl"})
    .state("education_insert", {url: "/education/insert", templateUrl: "views/education/insert.html", controller: "EducationInsertCtrl"})
    .state("education_edit", {url: "/education/edit/:id", templateUrl: "views/education/edit.html", controller: "EducationEditCtrl"})

    //experience
    .state("experience", {url: "/experience/:page", templateUrl: "views/experience/list.html", controller: "ExperienceCtrl"})
    .state("experience_insert", {url: "/experience/insert", templateUrl: "views/experience/insert.html", controller: "ExperienceInsertCtrl"})
    .state("experience_edit", {url: "/experience/edit/:id", templateUrl: "views/experience/edit.html", controller: "ExperienceEditCtrl"})

    //projects
    .state("projects", {url: "/projects/:page", templateUrl: "views/projects/list.html", controller: "ProjectsCtrl"})
    .state("projects_insert", {url: "/projects/insert", templateUrl: "views/projects/insert.html", controller: "ProjectsInsertCtrl"})
    .state("projects_edit", {url: "/projects/edit/:id", templateUrl: "views/projects/edit.html", controller: "ProjectsEditCtrl"})

    //settings
    .state("setting", {url: "/setting", templateUrl: "views/common/setting.html", controller: "SettingCtrl"})

    //portfolio
    .state("portfolio", {url: "/portfolio/:page", templateUrl: "views/portfolio/list.html", controller: "PortfolioCtrl"})
    .state("portfolio_insert", {url: "/portfolio/insert", templateUrl: "views/portfolio/insert.html", controller: "PortfolioInsertCtrl"})
    .state("portfolio_edit", {url: "/portfolio/edit/:image_id", templateUrl: "views/portfolio/edit.html", controller: "PortfolioEditCtrl"})

}]);

padmin.config(function($provide, $httpProvider) {
    $provide.factory('httpInterceptor', function ($q) {
      return {
        response: function (response) {
          return response || $q.when(response);
        },
        responseError: function (rejection) {
          if(rejection.status === 401) {
            location = "login.html";
          }
          return $q.reject(rejection);
        }
      };
    });
    $httpProvider.interceptors.push('httpInterceptor');
});