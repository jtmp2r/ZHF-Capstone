app.controller('authCtrl', ['$scope', '$location', '$firebaseAuth', '$rootScope', 
	function($scope, $location, $firebaseAuth, $rootScope) {
    var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
    $scope.authObj = $firebaseAuth(ref);

 
	$scope.googleLogin = function() {
		$scope.authObj.$authWithOAuthPopup("google").then(function(authData) {
	  console.log("Logged in as:", authData.uid);
	  $rootScope.user = authData;
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
		$location.path('/welcome')
	}
}]);
		// Auth.$authWithOAuthPopup("google").then(function(authData) {
	 //    console.log("Logged in as:", authData.uid);
	 //  }).catch(function(error) {
	 //    console.log("Authentication failed:", error);
	 //  });