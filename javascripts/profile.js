app.controller('profileCtrl', ['$scope', '$location', '$firebaseArray', "Auth", 
	function($scope, $location, $firebaseArray, Auth) {

	this.userAuthData = Auth.$getAuth();

	var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/surveyInfo');

	this.syncObject = $firebaseArray(ref);



  var newInfo = {};
  
  
this.addInfo = function() {
		this.syncObject.$add({
			q1: newInfo.q1,
			q2: newInfo.q2,
			q3: newInfo.q3,
			q4: newInfo.q4,
			q5: newInfo.q5,
			q6: newInfo.q6,
			q7: newInfo.q7,
			q8: newInfo.q8,
			q9: newInfo.q9,
			q10: newInfo.q10,
			weight: newInfo.weight,
			height: newInfo.height,
			name: newInfo.name,
		})
	  }.bind(this);


  

}]);	




// + $rootScope.user.uid
