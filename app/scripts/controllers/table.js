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
				i,
				len;
			//contains data from datasource
			self.dataSet=$rootScope.data.raw.dataSource.data;
			//function returns data
			self.getData = function () {
				return self.dataSet;
			};

			//contains the stringify data
			self.content = JSON.stringify(self.dataSet, undefined, 4);
			//function triggered when data is modified
			self.onChangeData = function () {
				$rootScope.$broadcast('propertyChanged');
				//stringified data updated
				self.content = JSON.stringify(self.dataSet, function (key, value) {
					if (key == "$$hashKey") {
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
			//add new data object
			self.addRow=function(){
				self.dataSet.push({"label":"","value":""});
				$rootScope.$broadcast('dataChanged');
			}
			//del last data object
			self.delRow=function(label){
				if(label){
					for(i=0,len=self.dataSet.length; i<len; i++){
						if(self.dataSet[i].label==label){
							self.dataSet.splice(i,1);
							break;
						}
					}
				}else{
					self.dataSet.pop();
				}
				$rootScope.$broadcast('dataChanged');				
			}
			//drag and drop function to add new values from csv
			dragAndDrop("dragndrop", function (result) {
				var i = 0,
					j=0,
					len = 0,
					lenRawData=0,
					item = [],
					ob = {};
				while(self.dataSet.length){
					self.dataSet.pop();
				}

				result = result.split(/\r?\n/);
				len = result.length;
				for (i = 0,j=0; i < len; ++i,j++) {
					item = result[i];
					item = item.split(",");
					ob = {};
					ob.label = item[0];
					ob.value = item[1];
					self.dataSet.push(ob);
				}

				// Fixes CSV files made in Excel which forces a blank line at the end. Handles a
				// blank line at the end of the CSV by checking if the last data in dataSet is
				// empty and pops it out
				var endData = self.dataSet[self.dataSet.length - 1];
				if (endData.label === "" && !endData.value) {
					self.dataSet.pop();
				}

				$scope.$apply(function(){self.onChangeData();});
				$rootScope.$broadcast('dataChanged');
			});
		});		
})();
