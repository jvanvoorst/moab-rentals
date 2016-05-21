var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngTouch']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'html/welcome.html',
        controller: 'mainCntrl'
    })
    .when('/short', {
        templateUrl: 'html/short.html',
        controller: 'mainCntrl'
    })
    .when('/short-photos', {
        templateUrl: 'html/short-carousel.html',
        controller: 'carouselCntrl'
    });
}]);


app.controller('mainCntrl', ['$scope', function($scope) {


}]);

app.controller('carouselCntrl', ['$scope', function($scope) {

    $scope.myInterval = 0;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;

    $scope.slides = [
        {
        image: '../images/bedroom1-crop.jpg',
        text: 'slide #1',
        id: 0
        },
        {
        image: '../images/livingroom-crop.jpg',
        text: 'Awesome photograph',
        id: 1
        },
        {
        image: '../images/bedroom2-crop.jpg',
        text: 'slide #3',
        id: 2
        }
    ];

}]);