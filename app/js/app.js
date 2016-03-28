var main = angular.module('MainScreenTemplate', ['ngRoute']);
main.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            /*controller: "MainController",*/
            templateUrl: "views/angular/mainScreen.html"
        })
        .when("/photos/", {
            controller: "HomeController",
            templateUrl: "views/angular/main.html"
        })
        .when("/photos/:id", {
            controller: "PhotoController",
            templateUrl: "views/angular/photo.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});
