var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
	$scope.friends = ['jordyn', 'ryan', 'chelsey']
	$scope.addFriend = function() {
		$scope.friends.push($scope.stuff);
		$scope.stuff= '';
	}
})


