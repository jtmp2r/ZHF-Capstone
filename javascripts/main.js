var app = angular.module("Capstone-ZHF", ['ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'authCtrl as authCtrl'
  })
  .when('/welcome', {
  	templateUrl: 'partials/welcome.html'
  })
  .when('/survey', {
  	templateUrl: 'partials/survey.html',
  	controller: 'infoCtrl as infoCtrl'
  })
  .when('/profile', {
    templateUrl: 'partials/profile.html',
    controller: 'infoCtrl as infoCtrl'
  })
  .when('/Reviews', {
    templateUrl: 'partials/Reviews.html'
  })
  .otherwise({redirectTo: '/'})

}]);




app.controller('mainCtrl', ['$scope', '$location', '$firebaseAuth',  function($scope, $location, $firebaseAuth) {
  


}]);