app.controller('infoCtrl', ['$scope', '$location', '$firebaseObject', '$rootScope', 
	function($scope, $location, $firebaseObject, $rootScope) {

  // var ref = new Firebase('https://capstone-zhf.firebaseio.com');
  // var authData = ref.getAuth();
  // var userId = authData.uid;

	var ref = new Firebase('https://capstone-zhf.firebaseio.com/'+ $rootScope.user.uid +'/surveyInfo');


	$scope.syncObject = $firebaseObject(ref.child("surveyInfo"));

	$scope.syncObject.$loaded().then(function() {
	  console.log($scope.syncObject); // "bar"
  });
  
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
			userId: userId
		}).then(function(data) {
			console.log(data);
		}).bind(this);

		}

  

}]);	


