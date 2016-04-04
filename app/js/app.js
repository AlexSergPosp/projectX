var main = angular.module('MainScreenTemplate', ['ngRoute']);
main.config(function($routeProvider) {
    $routeProvider
        .when("/home/", {
            controller: "CategoryController",
            templateUrl: "views/angular/home.html"
        })
        .when("/createCategory", {
            //controller: "CategoryController",
            templateUrl: "views/angular/createCategory.html"
        })
        .when("/photos/", {
            controller: "HomeController",
            templateUrl: "views/angular/main.html"
        })
        .when("/photos/:id", {
            controller: "PhotoController",
            templateUrl: "views/angular/photo.html"
        })
        .when("/aboutUs", {
            controller: "AboutUsController",
            templateUrl: "views/angular/aboutUs.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});

var URL_GET_ALL_CATEGORIES = "http://localhost:63342/projectX/app/json/category.json";