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
        .controller('NavbarCtrl', function($scope, $rootScope, $http) {
        	var self = this,
        		root = $rootScope;

        	self.saveData = function(){

        		console.log("saving data");

        		$http({
				    method: 'POST',
				    url: '/',
				    data: JSON.stringify(root.data)
				}).then(function success(response){
					
				});

        	}
    });
})();
