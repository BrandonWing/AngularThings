angular.module('overview', ["ngRoute"]);

angular.module('overview').config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'home.html'
    })
    .when('/know', {
        templateUrl:'whoknows.html'
    })
    .when('/care', {
        templateUrl:'whocares.html'
    })
    .when('/disabled', {
        templateUrl: 'disabled.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    console.log("I worked somewhere");
});