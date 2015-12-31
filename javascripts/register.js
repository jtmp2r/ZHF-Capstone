app.controller('authCtrl', ['$scope', '$location', '$firebaseAuth', '$rootScope', 'Auth',
	function($scope, $location, $firebaseAuth, $rootScope, Auth) {
    var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
    $scope.authObj = $firebaseAuth(ref);

	$scope.createUser = function() {
		$scope.message = null;
		$scope.error = null;
		console.log("Hell Yeah!!");

		Auth.$createUser({
			email: $scope.email,
			password: $scope.password
		}).then(function(userData) {
			console.log("User " + userData.uid + " created successfully!");
		}).catch(function(error) {
			console.log(error);
		});
	}; //end register

 
	$scope.googleLogin = function() {
		$scope.authObj.$authWithOAuthPopup("google").then(function(authData) {
	  console.log("Logged in as:", authData.uid);
	  $rootScope.user = authData.uid;
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
		$location.path('/welcome')
	}

	$scope.logout = function() {
	  var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
	  var authObj = $firebaseAuth(ref);  
	  console.log(authObj)
	  authObj.$unauth();
	  	$location.path('/');
  }
}]);
		// Auth.$authWithOAuthPopup("google").then(function(authData) {
	 //    console.log("Logged in as:", authData.uid);
	 //  }).catch(function(error) {
	 //    console.log("Authentication failed:", error);
	 //  });