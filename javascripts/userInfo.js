app.controller('infoCtrl', ['$scope', '$location', 'register', '$firebaseArray'])

this.userAuthData = Auth.$getAuth();

var userSurveyInfo = new Firebase('https://capstone-zhf.firebaseio.com/' + this.userAuthData.uid);

this.infoList = $firebaseArray(userSurveyInfo);

this.newInfo = {};

this.addInfo = function() {
	this.infoList.$add({
		1.: this.newInfo.1,
		2.: this.newInfo.2,
		3.: this.newInfo.3,
		4.: this.newInfo.4,
		5.: this.newInfo.5,
		6.: this.newInfo.6,
		7.: this.newInfo.7,
		8.: this.newInfo.8,
		9.: this.newInfo.9,
		10.: this.newInfo.10,
		weight: this.newInfo.weight,
		height: this.newInfo.height
	})
}