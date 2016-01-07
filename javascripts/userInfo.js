app.controller('infoCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {
    this.userAuthData = Auth.$getAuth();


  vm = this;
  var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/surveyInfo');

  vm.syncObject = $firebaseArray(ref);


  var newInfo = {};

    $scope.addInfo = function() {
        vm.syncObject.$add({
            q1: vm.newInfo.q1,
            q2: vm.newInfo.q2,
            q3: vm.newInfo.q3,
            q4: vm.newInfo.q4,
            q5: vm.newInfo.q5,
            q6: vm.newInfo.q6,
            q7: vm.newInfo.q7,
            q8: vm.newInfo.q8,
            q9: vm.newInfo.q9,
            q10: vm.newInfo.q10,
            weight: vm.newInfo.weight,
            height: vm.newInfo.height,
            name: vm.newInfo.name

        });
    };

  

}]);	


