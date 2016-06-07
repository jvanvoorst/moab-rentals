var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngTouch', 'smoothScroll']);

// app.config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//     .when('/', {
//         templateUrl: 'html/welcome.html',
//         controller: 'mainCntrl'
//     })
//     .when('/short', {
//         templateUrl: 'html/short.html',
//         controller: 'mainCntrl'
//     });

// }]);


app.controller('mainCntrl', ['$scope', 'smoothScroll', function($scope, smoothScroll) {

    $scope.move = function() {
        var element = document.getElementById('short');
        smoothScroll(element);
        console.log(element);
    };

}]);

// Controller for photo carousel on both short stay and long term views
app.controller('carouselCntrl', ['$scope', function($scope) {

    // slide auto rotation interval in seconds, 0 for no rotate
    $scope.myInterval = 0;
    // wrap slides false = yes
    $scope.noWrapSlides = false;
    // index of initial slide to display
    $scope.active = 0;

    $scope.slides = [
        {
        image: '../images/bedroom1.jpg',
        text: 'slide #2',
        id: 0
        },
        {
        image: '../images/bedroom2.jpg',
        text: 'slide #2',
        id: 1
        },
        {
        image: '../images/bedroom3.jpg',
        text: 'slide #3',
        id: 2
        }
    ];

}]);

app.controller('scrollCntrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {

    // $anchorScroll.yOffset = 100;

    // $location.hash()

    // $scope.scrollTo = function(loc) {
    //     $location.hash(loc);
    //     $anchorScroll();
    //     console.log(loc + 'short works');
    // };

}]);