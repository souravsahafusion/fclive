'use strict';

/**
 * @ngdoc overview
 * @name fcLiveApp
 * @description
 * # fcLiveApp
 *
 * Main module of the application.
 */
angular
	.module('fcLiveApp', [
	'ngResource',
	'ngRoute'
	])
	.config(function ($locationProvider, $routeProvider) {
	$routeProvider
		.when('/', {
		templateUrl: 'views/main.html',
		})
		.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl',
		controllerAs: 'about'
		})
		.otherwise({
		redirectTo: '/'
		});
		
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

	})	
	.directive('category', function() {
	return {
			templateUrl: 'views/category.html'
		};
	})
	.directive('property', function() {
	return {
			templateUrl: 'views/property.html'
		};
	})
	.directive('chart', function() {
	return {
			templateUrl: 'views/chart.html'
		};
	})
	.directive('table', function() {
	return {
			templateUrl: 'views/table.html'
		};
	})
	.run(function($rootScope){
		$rootScope.data =  {
		     "properties": [{
		              "category": "Chart Titles and Axis Names",
		              "target": "dataSource.chart",
		              "values": [{
		                  "name": "caption",
		                  "displayName": "Caption",
		                  "type": "text",
		                  "defaultValue": ""
		              }, {
		                  "name": "subcaption",
		                  "displayName": "Subcaption",
		                  "type": "text",
		                  "defaultValue": ""
		              }]
		          },{
		          	"category":"Functional Attributes",
		          	"target":"dataSource.chart",
		          	"values":[{
		          		"name": "animation",
						"displayName": "Animation",
						"type": "boolean",
						"defaultValue": "1"
		          	},{
		          		"name": "animationDuration",
						"displayName": "Animation Duration",
						"type": "number",
						"defaultValue": "0.5"
		          	},{
		          		"name": "paletteColors",
						"displayName": "Palette Colors",
						"type": "color",
						"defaultValue": "#0075c2"
		          	}]
		          },{
		          	"category":"Tool-tip",
		          	"target":"dataSource.chart",
		          	"values":[{
		          		"name": "showToolTip",
						"displayName": "Tool-tip",
						"type": "boolean",
						"defaultValue": "1"
		          	},{
		          		"name": "toolTipBgColor",
						"displayName": "Tool-tip background Color",
						"type": "color",
						"defaultValue": "#ffffff"
		          	},{
		          		"name": "tooltipBorderAlpha",
						"displayName": "Tool-tip Border Transparency",
						"type": "numberRange",
						"min":"0",
						"max":"100",
						"defaultValue": "50"
		          	}]
		          }],
		     "raw": {
		         "type": "column2d",
		         "renderAt": "chart-container",
		         "width": "460",
		         "height": "350",
		         "dataFormat": "json",
		         "dataSource": {
		             "chart": {
		                 "caption": "Monthly revenue for last year",
		                 "subCaption": "Harry's SuperMart",
		                 "xAxisName": "Month",
		                 "yAxisName": "Revenues (In USD)",
		                 "numberPrefix": "$",
		                 "paletteColors": "#0075c2",
		                 "bgColor": "#ffffff",
		                 "borderAlpha": "20",
		                 "canvasBorderAlpha": "0",
		                 "usePlotGradientColor": "0",
		                 "plotBorderAlpha": "10",
		                 "placevaluesInside": "1",
		                 "rotatevalues": "1",
		                 "valueFontColor": "#ffffff",
		                 "showXAxisLine": "1",
		                 "xAxisLineColor": "#999999",
		                 "divlineColor": "#999999",
		                 "divLineIsDashed": "1",
		                 "showAlternateHGridColor": "0",
		                 "subcaptionFontBold": "1",
		                 "captionFontSize": "34",
		                 "subcaptionFontSize": "14"
		             },
		             "data": [{
		                 "label": "Jan",
		                 "value": "420000"
		             }, {
		                 "label": "Feb",
		                 "value": "810000"
		             }, {
		                 "label": "Mar",
		                 "value": "720000"
		             }, {
		                 "label": "Apr",
		                 "value": "550000"
		             }, {
		                 "label": "May",
		                 "value": "910000"
		             }, {
		                 "label": "Jun",
		                 "value": "510000"
		             }, {
		                 "label": "Jul",
		                 "value": "680000"
		             }, {
		                 "label": "Aug",
		                 "value": "620000"
		             }, {
		                 "label": "Sep",
		                 "value": "610000"
		             }, {
		                 "label": "Oct",
		                 "value": "490000"
		             }, {
		                 "label": "Nov",
		                 "value": "900000"
		             }, {
		                 "label": "Dec",
		                 "value": "730000"
		             }],
		             "trendlines": [{
		                 "line": [{
		                     "startvalue": "700000",
		                     "color": "#1aaf5d",
		                     "valueOnRight": "1",
		                     "displayvalue": "Monthly Target"
		                 }]
		             }]
		         }
		     }
		 };
		 // to be removed later
		 testOb.data = $rootScope.data;

	});
// For testing purpose; To be removed later
var testOb = {};