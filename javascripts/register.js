app.controller('authCtrl', ['$scope', '$location', '$firebaseAuth', "Auth",
	function($scope, $location, $firebaseAuth, Auth) {
   

  $scope.createUser = function() {
		$scope.message = null;
		$scope.error = null;
		console.log("Working");


		Auth.$createUser({
			email: "$scope.email",
			password: "$scope.password"
		}).then(function(userData) {
			console.log("User " + userData.uid + " created successfully!");
		}).catch(function(error) {
			console.log(error);
		});
	}; //end register

	$scope.logIn = function(){
		Auth.$authWithPassword({
			email: "$scope.email",
			password: "$scope.password"
		}).then(function(authData) {
			console.log("User: ", Auth.$authWithPassword);
			$location.url('/welcome');
		}).catch(function(error) {
			console.error("Something's amiss:", error);
		});
	}; // login

 

	$scope.logout = function() {
	  var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
	  var authObj = $firebaseAuth(ref);  
	  console.log(authObj)
	  authObj.$unauth();
	  	$location.path('/');
  }
}]);
 

	// $scope.googleLogin = function() {
	// 	$scope.authObj.$authWithOAuthPopup("google").then(function(authData) {
	//   console.log("Logged in as:", authData.uid);
	//   // $rootScope.user = authData;
	// 	}).catch(function(error) {
	// 	  console.error("Authentication failed:", error);
	// 	});
	// 	$location.path('/welcome')
	// }