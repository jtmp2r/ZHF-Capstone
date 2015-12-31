app.controller('infoCtrl', ['$scope', '$location', '$firebaseObject', '$rootScope', 
	function($scope, $location, $firebaseObject, $rootScope) {

  // var ref = new Firebase('https://capstone-zhf.firebaseio.com');
  // var authData = ref.getAuth();
  // var userId = authData.uid;

	var ref = new Firebase('https://capstone-zhf.firebaseio.com/'+$rootScope.user.uid+'/surveyInfo');



	this.addInfo = function() {
		ref.set({
			q1: this.newInfo.q1,
			q2: this.newInfo.q2,
			q3: this.newInfo.q3,
			q4: this.newInfo.q4,
			q5: this.newInfo.q5,
			q6: this.newInfo.q6,
			q7: this.newInfo.q7,
			q8: this.newInfo.q8,
			q9: this.newInfo.q9,
			q10: this.newInfo.q10,
			weight: this.newInfo.weight,
			height: this.newInfo.height,
			name: this.newInfo.name,
			userId: $rootScope.user.uid
		});
		
	}

	this.moreInfo = function() {
		ref.set({
			volume: this.newInfo.volume,
			intensity: this.newInfo.intensity,
			reps: this.newInfo.reps
		})
	}
  

}]);	


