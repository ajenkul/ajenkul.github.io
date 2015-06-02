/**
 * Created by Ajen Kul on 5/30/2015.
 */
var app = angular.module('matterhorn', ['ngRoute','ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'template/modules/view-index.html',
            controller: 'mainController'
        })
        .when('/home',{
            redirectTo:'/'
        })
        .when('/service', {
            templateUrl: 'template/modules/view-service.html',
            controller: 'serviceController'
        })
        .otherwise({
            templateUrl: 'template/banner.html'
        });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);

app.controller('mainController', ['$scope', function ($scope) {
}]);

app.controller('serviceController', ['$scope', function ($scope) {
}]);