app.controller('moreCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {

	vm = this;

	this.userAuthData = Auth.$getAuth();

	var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/info');

	vm.newObject = $firebaseArray(ref);

  var newInfo = {};

	$scope.moreInfo = function() {
		vm.newObject.$add({
			volume: vm.newInfo.volume,
			intensity: vm.newInfo.intensity,
			reps: vm.newInfo.reps
		});
	};


}]);	