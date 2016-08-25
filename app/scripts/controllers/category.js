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
		var self = this;				// Storing reference to controller
		self.categoryNamesAr = [];		// Storing all categories
		self.currentCategoryName = ""	// Storing current category name


		// Will set Sub properties with the first category name's data
		setTimeout(function Initialize(){
			self.categoryNamesAr = getCategoryNames($rootScope.data.properties);
			self.currentCategoryName = self.categoryNamesAr[0];
			broadCastName();
		}, 0);

		// Function to get category names as array
		// from the properties object 
		function getCategoryNames(dataAr){
			var i = 0,
				len = dataAr.length,
				item = {},
				nameAr = [];

			for(i = 0; i < len; ++i){
				item = dataAr[i] || {};
				nameAr.push(item.category);
			}
			return nameAr;
		}

		// Function to set current Category from view
		self.setCurrentCategoryAndBroadcast = function(index){
			self.currentCategoryName = self.categoryNamesAr[index];
			console.log("Clicked " + self.currentCategoryName)
			broadCastName();
		}

		// Function to broadcast current selected category name
		function broadCastName(){
			$rootScope.$broadcast('categorySelected', self.currentCategoryName);
		}

	});
})();