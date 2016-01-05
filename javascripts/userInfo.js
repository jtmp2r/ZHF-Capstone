app.controller('infoCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {
    var vm =this;
    this.userAuthData = Auth.$getAuth();

  // var ref = new Firebase('https://capstone-zhf.firebaseio.com');
  // var authData = ref.getAuth();
  // var userId = authData.uid;
  debugger;
  var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/surveyInfo');

  vm.syncObject = $firebaseArray(ref);


  var newInfo = {};

    $scope.addInfo = function() {
        debugger;
        vm.syncObject.$add(
            vm.newInfo
        );
    };

  

}]);	


