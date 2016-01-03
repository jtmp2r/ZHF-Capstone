// angular.module("Capstone-ZHF").service('userService', function($firebaseAuth, $location, $rootScope) {

//   var user = {};

//   this.googleLogin = function() {

//   	var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
//     var authObj = $firebaseAuth(ref);

//   	authObj.$authWithOAuthPopup("google").then(function(authData) {
// 		$location.path('/welcome')
// 	  console.log("Logged in as:", authData.uid);
// 	  $rootScope.user = authData.uid;
// 		}).catch(function(error) {
// 		  console.error("Authentication failed:", error);
// 		});
//   }.bind(this);


// })