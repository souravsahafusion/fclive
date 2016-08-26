'use strict';

/**
 * @ngdoc function
 * @name fcLiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fcLiveApp
 */

(function () {
	angular.module('fcLiveApp')
		.controller('TableCtrl', function ($scope, $rootScope) {
			var self = this,
				//contains data from datasource
				data = $rootScope.data.raw.dataSource.data;
			//function returns data 
			self.getData = function () {
				return data;
			};
			//contains the stringify data
			self.content = JSON.stringify(data, undefined, 4);
			//function triggered when data is modified
			self.onChangeData = function () {
				$rootScope.$broadcast('propertyChanged');
				//stringified data updated
				self.content = JSON.stringify(data, function (key, value) {
					if (key === "$$hashKey") {
						return undefined;
					}
					return value;
				}, 4);
			};
			//function invoked when tabs are switched
			self.loadDiv = function (source, target) {
				var src = document.getElementById(source), //highlighted div in the tabs
					trgt = document.getElementById(target); //non highlighted div in the tabs

				//display property of the tabs are toggled
				src.classList.remove("hiddenData");
				src.className = "visibleData";
				trgt.classList.remove("visibleData");
				trgt.className = "hiddenData";
			};

			dragAndDrop("dragndrop", function (result) {
				var i = 0,
					len = 0,
					item = [],
					ob = {};
				console.log(result);
				$rootScope.data.raw.dataSource.data = [];
				data = $rootScope.data.raw.dataSource.data;
				result = result.split("\n");
				len = result.length;
				for (i = 0; i < len; ++i) {
					item = result[i];
					item = item.split(",");
					ob = {};
					ob.label = item[0];
					ob.value = item[1];
					data.push(ob);
				}
				self.onChangeData();
			});
		});
})();