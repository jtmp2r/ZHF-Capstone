app.controller('infoCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {
	

	this.userAuthData = Auth.$getAuth();

	var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/surveyInfo');

	this.syncObject = $firebaseArray(ref);
	

  var newInfo = {};


	this.moreInfo = function() {
		this.syncObject.$add({
			volume: this.newInfo.volume,
			intensity: this.newInfo.intensity,
			reps: this.newInfo.reps
		})
	}


}]);	