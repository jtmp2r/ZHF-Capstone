app.controller('editCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {
    this.userAuthData = Auth.$getAuth();


    vm = this;
    var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/surveyInfo');

    vm.syncObject = $firebaseArray(ref);
    

    $scope.editNew = function(info) {
      vm.newInfo = info;
      vm.syncObject.$save(info);
      $location.url("/survey");
    }


}]);	