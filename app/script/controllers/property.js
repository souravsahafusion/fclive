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
		var self = this,
			categoryList = $rootScope.data.properties,
			raw = $rootScope.data.raw;

		self.propertyList = [];
		self.baseTarget = {};
		self.delayOn = false;
		self.updateAgain = false;

		function getBaseTarget(base, target){
			var i = 0,
				len = 0,
				item = "",
				targetAr = target.split(".");
			len = targetAr.length;

			while(i < len){
				item = targetAr[i];
				if(!base[item]){
					base[item] = {};
				}
				base = base[item];
				++i;
			}
			return base;
		}

		$scope.$on('categorySelected', function(event, msg) {
			var i = 0,
				len = categoryList.length,
				ob;
			self.currentCategory = msg;

			for(i = 0; i < len; ++i){
				ob = categoryList[i];
				if(ob.category === self.currentCategory){
					self.baseTarget = getBaseTarget(raw, ob.target);
					self.propertyList = ob.values;
					break;
				}
			}
		});

		self.onChangeData = function(){
			if(self.delayOn){
				self.delayOn = false;
				setTimeout(function(){
					if(self.updateAgain){
						self.updateAgain = false;
						self.onChangeData();
					} else {
						self.updateAgain = true;
					}
				}, 500);
			} else {
				$rootScope.$broadcast('propertyChanged');
				self.delayOn = true;		
			}	
		};

	});

})();
