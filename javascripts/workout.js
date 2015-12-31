app.controller('infoCtrl', ['$scope', '$location', '$firebaseObject', '$rootScope', 
	function($scope, $location, $firebaseObject, $rootScope) {

  // var ref = new Firebase('https://capstone-zhf.firebaseio.com');
  // var authData = ref.getAuth();
  // var userId = authData.uid;

	var ref = new Firebase('https://capstone-zhf.firebaseio.com/'+$rootScope.user.uid+'/surveyInfo');
	


	this.moreInfo = function() {
		ref.set({
			volume: this.newInfo.volume,
			intensity: this.newInfo.intensity,
			reps: this.newInfo.reps
		})
	}


}]);	