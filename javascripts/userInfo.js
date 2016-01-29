app.controller('infoCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
	function($scope, $location, $firebaseArray, Auth) {
    this.userAuthData = Auth.$getAuth();


  vm = this;
  var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/surveyInfo');

  vm.syncObject = $firebaseArray(ref);

  var newInfo = {};
  var moreInfo = {};

    $scope.addInfo = function() {
        vm.syncObject.$add({
            q1: vm.newInfo.q1,
            q2: vm.newInfo.q2,
            q3: vm.newInfo.q3,
            q4: vm.newInfo.q4,
            q5: vm.newInfo.q5,
            q6: vm.newInfo.q6,
            q7: vm.newInfo.q7,
            weight: vm.newInfo.weight,
            height: vm.newInfo.height,
            name: vm.newInfo.name
        });
    };

    $scope.addMore = function() {
        vm.syncObject.$add({
          w1:  vm.moreInfo.w1,
          w2:  vm.moreInfo.w2,
          w3:  vm.moreInfo.w3,
          w4:  vm.moreInfo.w4             
        });
    };

  

}]);	



// app.controller('moreCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
//     function($scope, $location, $firebaseArray, Auth) {

//     this.userAuthData = Auth.$getAuth();

//   vm = this;
//   var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/workout');

//   vm.newObject = $firebaseArray(ref);


//   var moreInfo = {};

//     $scope.addMore = function() {
//         vm.newObject.$add({
//           w1:  vm.moreInfo.w1,
//           w2:  vm.moreInfo.w2,
//           w3:  vm.moreInfo.w3,
//           w4:  vm.moreInfo.w4             
//         });
//     };
    
//     $scope.removeList = function(more) {
//       vm.newObject.$remove(more);       
//     }

    
// }]);    


