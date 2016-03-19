var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
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