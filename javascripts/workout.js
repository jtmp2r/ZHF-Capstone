app.controller('workCtrl', ['$scope', '$location', '$firebaseObject', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseObject, $firebaseArray, Auth) {
    this.userAuthData = Auth.$getAuth();


  var vm = this;
  var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/workout');

  vm.newObject = $firebaseObject(ref);
  vm.newArray = $firebaseArray(ref);


  $scope.addMore = function() {
        vm.newArray.$add({
          w1:  vm.moreInfo.w1,
          w2:  vm.moreInfo.w2,
          w3:  vm.moreInfo.w3,
          w4:  vm.moreInfo.w4             
        });
        vm.moreInfo = {};
    }; 

    $scope.editInfo = function(info) {
        vm.moreInfo = info;
    };
    
     $scope.update = function(info) {
        vm.moreInfo = info;
        vm.newObject.$save({info}); 
     };

}]);
