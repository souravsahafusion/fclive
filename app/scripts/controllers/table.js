'use strict';

/**
 * @ngdoc function
 * @name fcLiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fcLiveApp
 */

(function() {
    angular.module('fcLiveApp')
        .controller('TableCtrl', function($scope, $rootScope) {
            var self = this,
                data = $rootScope.data.raw.dataSource.data;

            self.getData = function() {
                return data;
            };
            self.content = JSON.stringify(data, undefined,4);
    		self.onChangeData = function(){
				$rootScope.$broadcast('propertyChanged');
			};
			self.loadDiv = function(source,target){
				var src = document.getElementById(source),
				trgt = document.getElementById(target);
				src.classList.remove("hiddenData");
				src.className = "visibleData";
				trgt.classList.remove("visibleData");
				trgt.className = "hiddenData";
			};
        });
})();


