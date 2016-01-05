app.controller('profileCtrl', ['$scope', '$location', '$firebaseArray', "Auth", 
	function($scope, $location, $firebaseArray, Auth) {

	this.userAuthData = Auth.$getAuth();

	var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/surveyInfo');

	this.syncObject = $firebaseArray(ref);


  var newInfo = {};
  
  
    this.addInfo = function() {
        this.syncObject.$add({
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
            height: this.newInfo.height
           
        });
    };



  

}]);	




// + $rootScope.user.uid
