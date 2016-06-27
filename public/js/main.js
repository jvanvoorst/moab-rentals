var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngTouch', 'smoothScroll', 'pageslide-directive']);

app.controller('mainCntrl', ['$scope', 'smoothScroll', '$window', function($scope, smoothScroll, $window) {

    // get current window height and width
    var height = angular.element($window.innerHeight)[0];
    var width = angular.element($window.innerWidth)[0];
    // var bar height is in view widths to 5.7vw or .057 * window width gives current height of nav bar in pixels
    var navHeight = width * .057;
    // get height of short  and long term divs
    var shortHeight = angular.element(short)[0].offsetHeight;
    var longHeight = angular.element(long)[0].offsetHeight;
    console.log(longHeight)
    // since picture is set to 100% of windows heigth get the visible part by subtracting the height of the nav bar
    var pictureHeight = height - navHeight;
    console.log('pictureHeight ' + pictureHeight);
    // if window is resized update height
    angular.element($window).bind('resize', function () {
        height = this.innerHeight;
        var pictureHeight = height - navHeight;
    });

    console.log('short ' + shortHeight);
    console.log('long ' + longHeight)
    console.log('break ' + (height + shortHeight + navHeight));

    var breakPoint = (height + shortHeight + navHeight);

    // logic for determining page scroll position and changing the active navigation link
    angular.element($window).bind("scroll", function() {
        if (this.pageYOffset > pictureHeight && this.pageYOffset < breakPoint) {
            $scope.$apply(function() {
                $scope.position = 'short';
            });
            console.log('if ' + height);
        }
        else if (this.pageYOffset > breakPoint && this.pageYOffset < 4850) {
            $scope.$apply(function() {
                $scope.position = 'long';
            });
        }
        else if (this.pageYOffset > 4850) {
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

    $scope.open = false;
    $scope.toggle = function() {
        $scope.open = !$scope.open;
        console.log('toggle ' + $scope.open);
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

