var app = angular.module("Capstone-ZHF", ['ngRoute', 'firebase', "angular.filter"]);

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
  .when('/workout', {
    templateUrl: 'partials/workout.html',
    controller: 'workCtrl as workCtrl'
  })
  .otherwise({redirectTo: '/'})

}]);




app.controller('mainCtrl', ['$scope', '$location', '$firebaseAuth',  function($scope, $location, $firebaseAuth) {
  


}]);