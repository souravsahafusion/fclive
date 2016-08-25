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
	.controller('ChartCtrl', function ($scope, $rootScope) {
		var self = this,
			raw = $rootScope.data.raw,
			revenueChart = {};

		self.updateSource = function(){
			revenueChart.setJSONData(raw.dataSource);
			bool = false;
		}

		FusionCharts.ready(function () {
			revenueChart = new FusionCharts(raw).render();
		});
		//broadcast name propertyChanged
		$scope.$on('propertyChanged', function(){
			self.updateSource();
		});	
	});
})();
