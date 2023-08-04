var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './pages/home.html',
        controller: 'HomeController'
    })
    .when('/sitemap', {
        templateUrl: './pages/sitemap.html'
    })
    .when('/about', {
        templateUrl: './pages/about.html'
    })
    .when('/gallery', {
        templateUrl: './pages/gallery.html',
        controller: 'GalleryController'
    })
    .when('/fqalink', {
        templateUrl: './pages/fqalink.html'
    })
    .when('/contact', {
        templateUrl: './pages/contact.html'
    })
})

app.controller('HomeController', function($scope){
    $scope.title = "Home"
})

app.controller('GalleryController', function($scope){
    $scope.title = "Gallery"
})