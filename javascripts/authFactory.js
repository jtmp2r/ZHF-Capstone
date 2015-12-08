app.factory("Auth", ['$scope', "$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase('https://capstone-zhf.firebaseio.com/');
    $scope.authObj = $firebaseAuth(ref);
  }
]);

