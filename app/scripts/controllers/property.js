'use strict';

/**
* @ngdoc function
* @name fcLiveApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the fcLiveApp
*/
(function(){

angular.module('fcLiveApp')
	.controller('PropertyCtrl', function ($scope, $rootScope) {

		$scope.$on('categorySelected', function(event, msg){
			console.log(msg);
		});	


	});
})();