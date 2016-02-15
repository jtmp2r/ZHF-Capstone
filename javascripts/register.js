app.controller('authCtrl', ['$scope', '$location', '$firebaseAuth', "Auth",
	function($scope, $location, $firebaseAuth, Auth) {
   
  $scope.email;
  $scope.password;

  $scope.createUser = function() {
		$scope.message = null;
		$scope.error = null;
		console.log("Working");


		Auth.$createUser({
			email: $scope.email,
			password: $scope.password
		}).then(function(userData) {
			console.log("User " + userData.uid + " created successfully!");
		}).catch(function(error) {
			console.log(error);
		});
	}; //end register

	$scope.logIn = function(){
		Auth.$authWithPassword({
			email: $scope.email,
			password: $scope.password
		}).then(function(authData) {
			console.log("User: ", Auth.$authWithPassword);
			$location.url('/welcome');
		}).catch(function(error) {
			console.error("Something's amiss:", error);
		});
	};

 

	$scope.logout = function() {
	  var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
	  var authObj = $firebaseAuth(ref);  
	  console.log(authObj)
	  authObj.$unauth();
	  	$location.path('/');
  }
}]);
 
