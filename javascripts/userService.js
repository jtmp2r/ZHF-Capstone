app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://capstone-zhf.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);