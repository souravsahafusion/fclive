'use strict';

/**
 * @ngdoc function
 * @name fcLiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fcLiveApp
 */
(function() {

	angular.module('fcLiveApp').controller('PropertyCtrl', function($scope, $rootScope) {

		var self = this;
		$scope.$on('categorySelected', function(event, msg) {
			console.log($rootScope.data.properties);
			$scope.categoryList = $rootScope.data.properties;
			$scope.categoryName = msg;
			$scope.categoryTarget = "";
			for (var i = 0, categoryListLength = $scope.categoryList.length; i < categoryListLength; i++) {
			if ($scope.categoryList[i].category == $scope.categoryName) {
			$scope.categoryTarget = $scope.categoryList[i].target;
			$scope.propertyList = $scope.categoryList[i].values;
			console.log($scope.propertyList);
			for (var j = 0, propertyListLength = $scope.propertyList.length; j < propertyListLength; j++) {

			}
			}
			}
		});

	});

})();
