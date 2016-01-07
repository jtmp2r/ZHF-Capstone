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
  .when('/workout', {
    templateUrl: 'partials/workout.html',
    controller: 'moreCtrl as moreCtrl'
  })
  .otherwise({redirectTo: '/'})

}]);


  // app.run(["$location", "$rootScope", function ($location, $rootScope) {
  //   var ref = new Firebase("https://capstone-zhf.firebaseio.com");

  //   ref.onAuth(function(authData) {
  //     if (authData) {
  //       console.log("Authenticated with uid:", authData.uid);
  //       $rootScope.user = authData;
  //     } else {
  //       console.log("Client unauthenticated.");
  //     }
  //   });
  // }]);


app.controller('mainCtrl', ['$scope', '$location', '$firebaseAuth',  function($scope, $location, $firebaseAuth) {
  
// $scope.logout = function() {
//   var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
//   $scope.authObj = $firebaseAuth(ref);  
//   authObj.$unauth()
//   $location.path('/login');
//   }

}]);