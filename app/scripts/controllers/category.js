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
	.controller('CategoryCtrl', function ($rootScope) {
		var self = this;

		setTimeout(function(){
			$rootScope.$broadcast('categorySelected', 'Chart Titles and Axis Names');
		}, 0);



	});
})();