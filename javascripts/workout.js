app.controller('workCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {
    this.userAuthData = Auth.$getAuth();


  vm = this;
  var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/workout');

  vm.newObject = $firebaseArray(ref);


  // var moreInfo = {};

   $scope.addMore = function() {
   	    console.log("Joe", vm.moreInfo.w1)
        vm.newObject.$add({
          w1:  vm.moreInfo.w1,
          w2:  vm.moreInfo.w2,
          w3:  vm.moreInfo.w3,
          w4:  vm.moreInfo.w4             
        });
        vm.moreInfo = {};
    };

    $scope.editInfo = function(info) {
        vm.moreInfo = info;
        vm.newObject.$save(info);
    };



    $scope.updateInfo = function() {
        vm.newObject.update({
        	w1:  vm.moreInfo.w1,
          w4:  vm.moreInfo.w4
        });
    };



}]);	