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
            self.datajson = data;
    		self.onChangeData = function(){
				$rootScope.$broadcast('propertyChanged');
			};
        });
})();
