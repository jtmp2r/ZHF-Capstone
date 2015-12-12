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

app.controller('mainCtrl', ['$scope', '$location', "Auth", '$firebaseAuth', function($scope, $location, Auth, $firebaseAuth) {
  
$scope.logout = function() {
  var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
  $scope.authObj = $firebaseAuth(ref);  
  authObj.$unauth()
  $location.path('/login');
  }

}]);