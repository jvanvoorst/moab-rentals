var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngTouch', 'smoothScroll']);

app.controller('mainCntrl', ['$scope', 'smoothScroll', '$window', function($scope, smoothScroll, $window) {

    angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 1000) {
            $scope.$apply(function() {
                $scope.position = 'short';
                console.log($scope.position);
            });
        }
    });

    // $scope.scrollPosition = '';

    // function scrollPosition(e) {

    //     console.log(window.pageYOffset);
    //     console.log($scope.position);

    //     if (window.pageYOffset > 1000 ) {
    //         $scope.position = 'short';
    //         console.log('short');
    //     }

    //     // if (window.pageYOffset > 2650 ) {
    //     //     $scope.position = 'long';
    //     // }
    //     // if ( window.pageYOffset > 4850 ) {
    //     //     $scope.position = 'contact';
    //     // }
    // }

    // // Scroll handler to toggle classes.
    // window.addEventListener('scroll', scrollPosition, false);

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
        text: 'Bedroom 1',
        id: 0
        },
        {
        image: '../images/bedroom2.jpg',
        text: 'Bedroom 2',
        id: 1
        },
        {
        image: '../images/bedroom3.jpg',
        text: 'Bedroom 3',
        id: 2
        },
        {
        image: '../images/dining.jpg',
        text: 'Dining room',
        id: 3
        },
        {
        image: '../images/kitchen.jpg',
        text: 'Kitchen',
        id: 4
        },
        {
        image: '../images/laundry.jpg',
        text: 'Laundry',
        id: 5
        },
        {
        image: '../images/living.jpg',
        text: 'Living room',
        id: 6
        }
    ];

}]);

