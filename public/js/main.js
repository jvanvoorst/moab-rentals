var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngTouch', 'smoothScroll', 'pageslide-directive']);

app.controller('mainCntrl', ['$scope', 'smoothScroll', '$window', function($scope, smoothScroll, $window) {

    // get current window width
    var width = angular.element($window.innerWidth)[0];
    // var bar height is in view widths so 5.7vw or .057 * window width gives current height of nav bar in pixels
    var navHeight = width * 0.057;

    // get pixel heights to the following elements from the top of the page minus the nav bar height
    var atShort = angular.element(short)[0].offsetTop - navHeight;
    var atLongPic = angular.element(longPic)[0].offsetTop - navHeight
    var atLong = angular.element(long)[0].offsetTop - navHeight;
    var atContact = angular.element(contact)[0].offsetTop - navHeight;

    // attempt to update the distance to top of window of the elements if the window is resized
    // not currently working as expected
    angular.element($window).bind('resize', function () {
        var atShort = angular.element(short)[0].offsetTop - navHeight;
        var atLongPic = angular.element(longPic)[0].offsetTop - navHeight
        var atLong = angular.element(long)[0].offsetTop - navHeight;
        var atContact = angular.element(contact)[0].offsetTop - navHeight;
    });


    // logic for determining page scroll position and changing the active navigation link
    angular.element($window).bind("scroll", function() {
        if (this.pageYOffset > atShort && this.pageYOffset < atLongPic) {
            $scope.$apply(function() {
                $scope.position = 'short';
            });
        }
        else if (this.pageYOffset > atLongPic && this.pageYOffset < atLong) {
            $scope.$apply(function() {
                $scope.position = '';
            });
        }
        else if (this.pageYOffset > atLong && this.pageYOffset < atContact) {
            $scope.$apply(function() {
                $scope.position = 'long';
            });
        }
        else if (this.pageYOffset >= atContact) {
            $scope.$apply(function() {
                $scope.position = 'contact';
            });
        }
        else {
            $scope.$apply(function() {
                $scope.position = '';
            });
        }
    });

    // set mobile slide in menu to closed
    $scope.open = false;
    // function to toggle the mobile menu
    $scope.toggle = function() {
        $scope.open = !$scope.open;
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

