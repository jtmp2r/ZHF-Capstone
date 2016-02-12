app.controller('workCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {
    this.userAuthData = Auth.$getAuth();


  vm = this;
  var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/workout');

  vm.newObject = $firebaseArray(ref);


   $scope.addMore = function() {
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
    };
    
     $scope.update = function(info) {
     	  console.log(info)
     	  vm.moreInfo = info;
        vm.newObject.set({info});
     };

   
}]);

// $scope.update = function(info) {
//      	  console.log(info)
//      	  info = vm.newObject.$getRecord(info);
//         vm.newObject.$save({info}).then(function(obj) {
//           console.log("Huh", obj)
//         });
//      };
