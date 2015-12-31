app.controller('profileCtrl', ['$scope', '$location', '$firebaseObject', '$rootScope', 
	function($scope, $location, $firebaseObject, $rootScope) {

  // var ref = new Firebase('https://capstone-zhf.firebaseio.com');
  // var authData = ref.getAuth();
  // var userId = authData.uid;


	var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + $rootScope.user.uid);



	$scope.syncObject = $firebaseObject(ref.child("surveyInfo"));

	$scope.syncObject.$loaded().then(function() {
	  console.log($scope.syncObject); // "bar"
  });


	this.newInfo = {};
  
	this.addInfo = function() {
		this.infoList.$add({
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
			volume: this.newInfo.volume,
			intensity: this.newInfo.intensity,
			reps: this.newInfo.reps,
			userId: $rootScope.user.uid
		}).then(function(data) {
			console.log(data);
		})

		}


  
	this.moreInfo = function() {
		ref.set({
			volume: this.newInfo.volume,
			intensity: this.newInfo.intensity,
			reps: this.newInfo.reps
		}).then(function(data) {
			console.log(data);
		})
	}
  

}]);	




// + $rootScope.user.uid
