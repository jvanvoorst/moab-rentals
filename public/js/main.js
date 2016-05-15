var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'html/welcome.html',
        controller: 'mainController'
    });
}]);


app.controller('mainController', ['$scope', function($scope) {

}]);