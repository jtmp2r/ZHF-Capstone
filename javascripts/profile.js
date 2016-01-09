app.controller('moreCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', 
    function($scope, $location, $firebaseArray, Auth) {

    this.userAuthData = Auth.$getAuth();

  vm = this;
  var ref = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid + '/workout');

  vm.newObject = $firebaseArray(ref);


  var moreInfo = {};

    $scope.addMore = function() {
        vm.newObject.$add({
          w1:  vm.moreInfo.w1
        
            
        });
    };

  

}]);    
