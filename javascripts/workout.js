app.controller('moreCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {

	vm = this;

	this.userAuthData = Auth.$getAuth();

	var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/surveyInfo');

	vm.syncObject = $firebaseArray(ref);

  var newInfo = {};

	$scope.moreInfo = function() {
		vm.syncObject.$add({
			volume: vm.newInfo.volume,
			intensity: vm.newInfo.intensity,
			reps: vm.newInfo.reps
		})
	}


}]);	