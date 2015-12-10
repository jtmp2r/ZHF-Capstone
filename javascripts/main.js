var app = angular.module("Capstone-ZHF", ['ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'authCtrl'
  })
  .when('/welcome', {
  	templateUrl: 'partials/welcome.html'
  })
  .when('/survey', {
  	templateUrl: 'partials/survey.html',
  	controller: 'infoCtrl'
  })

}]);

app.controller('mainPageCtrl', ['$scope', '$location', "Auth", function($scope, $location, Auth) {
}]);