/*var pictures = angular.module('GalleryApp', ['ngRoute']);
pictures.config(function($routeProvider) {
    $routeProvider

        .otherwise({
            redirectTo: "/"
        });
});*/

var main = angular.module('MainScreenTemplate', ['ngRoute']);
main.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "MainController",
            templateUrl: "views/angular/mainScreen.html"
        })
        .when("/", {
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
