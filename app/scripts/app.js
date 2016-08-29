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
   "properties": [
      {
         "category": "Functional Attributes",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "animation",
               "type": "boolean",
               "defaultValue": "0",
               "displayName": "Animation"
            },
            {
               "name": "animationDuration",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Animation Duration"
            },
            {
               "name": "palette",
               "type": "numberRange",
               "defaultValue": "1",
               "displayName": "Palette",
               "min": "1"
            },
            {
               "name": "paletteColors",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Palette Colors"
            },
            {
               "name": "showLabels",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Labels"
            },
            {
               "name": "maxLabelHeight",
               "type": "number",
               "defaultValue": "",
               "displayName": "Max Label Height"
            },
            {
               "name": "labelDisplay",
               "type": "select",
               "defaultValue": "",
               "displayName": "Label Display"
            },
            {
               "name": "useEllipsesWhenOverflow",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Use Ellipses When Overflow"
            },
            {
               "name": "rotateLabels",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Rotate Labels"
            },
            {
               "name": "slantLabels",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Slant Labels"
            },
            {
               "name": "labelStep",
               "type": "number",
               "defaultValue": "1",
               "displayName": "Label Step",
               "min": "1"
            },
            {
               "name": "staggerLines",
               "type": "number",
               "defaultValue": "2",
               "displayName": "Stagger Lines",
               "min": "2"
            },
            {
               "name": "showValues",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Values"
            },
            {
               "name": "rotateValues",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Rotate Values"
            },
            {
               "name": "placeValuesInside",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Place Values Inside"
            },
            {
               "name": "showLimits",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Limits"
            },
            {
               "name": "showDivLineValues",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Div Line Values"
            },
            {
               "name": "showShadow",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Shadow"
            },
            {
               "name": "adjustDiv",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Adjust Div"
            },
            {
               "name": "clickURL",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Click URL"
            },
            {
               "name": "clickURLOverridesPlotLinks",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Click URL Overrides Plot Links"
            },
            {
               "name": "maxColWidth",
               "type": "number",
               "defaultValue": "",
               "displayName": "Max Col Width"
            },
            {
               "name": "setAdaptiveYMin",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Set Adaptive Y Min"
            },
            {
               "name": "useDataPlotColorForLabels",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Use Data Plot Color For Labels"
            },
            {
               "name": "hasRTLText",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Has RTL Text"
            },
            {
               "name": "theme",
               "type": "select",
               "defaultValue": "",
               "displayName": "Theme"
            }
         ]
      },
      {
         "category": "Chart Message-related Attributes",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "baseChartMessageFont",
               "type": "select",
               "defaultValue": "",
               "displayName": "Base Chart Message Font"
            },
            {
               "name": "baseChartMessageFontSize",
               "type": "number",
               "defaultValue": "",
               "displayName": "Base Chart Message Font Size"
            },
            {
               "name": "baseChartMessageColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Base Chart Message Color"
            },
            {
               "name": "baseChartMessageImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Base Chart Message Image H Align"
            },
            {
               "name": "baseChartMessageImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Base Chart Message Image V Align"
            },
            {
               "name": "baseChartMessageImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Base Chart Message Image Alpha",
               "min": "0 "
            },
            {
               "name": "baseChartMessageImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Base Chart Message Image Scale",
               "min": "0"
            },
            {
               "name": "loadMessage",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Load Message"
            },
            {
               "name": "loadMessageFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Load Message Font"
            },
            {
               "name": "loadMessageFontSize",
               "type": "number",
               "defaultValue": "",
               "displayName": "Load Message Font Size"
            },
            {
               "name": "loadMessageColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Load Message Color"
            },
            {
               "name": "loadMessageImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Load Message Image H Align"
            },
            {
               "name": "loadMessageImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Load Message Image V Align"
            },
            {
               "name": "loadMessageImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Load Message Image Alpha",
               "min": "0 "
            },
            {
               "name": "loadMessageImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Load Message Image Scale",
               "min": "0"
            },
            {
               "name": "typeNotSupportedMessage",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Type Not Supported Message"
            },
            {
               "name": "typeNotSupportedMessageFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Type Not Supported Message Font"
            },
            {
               "name": "typeNotSupportedMessageFontSize",
               "type": "number",
               "defaultValue": "",
               "displayName": "Type Not Supported Message Font Size"
            },
            {
               "name": "typeNotSupportedMessageColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Type Not Supported Message Color"
            },
            {
               "name": "typeNotSupportedMessageImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Type Not Supported Message Image H Align"
            },
            {
               "name": "typeNotSupportedMessageImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Type Not Supported Message Image V Align"
            },
            {
               "name": "typeNotSupportedMessageImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Type Not Supported Message Image Alpha",
               "min": "0 "
            },
            {
               "name": "typeNotSupportedMessageImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Type Not Supported Message Image Scale",
               "min": "0"
            },
            {
               "name": "renderErrorMessage",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Render Error Message"
            },
            {
               "name": "renderErrorMessageFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Render Error Message Font"
            },
            {
               "name": "renderErrorMessageFontSize",
               "type": "number",
               "defaultValue": "",
               "displayName": "Render Error Message Font Size"
            },
            {
               "name": "renderErrorMessageColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Render Error Message Color"
            },
            {
               "name": "renderErrorMessageImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Render Error Message Image H Align"
            },
            {
               "name": "renderErrorMessageImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Render Error Message Image V Align"
            },
            {
               "name": "renderErrorMessageImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Render Error Message Image Alpha",
               "min": "0 "
            },
            {
               "name": "renderErrorMessageImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Render Error Message Image Scale",
               "min": "0"
            },
            {
               "name": "dataLoadStartMessage",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Data Load Start Message"
            },
            {
               "name": "dataLoadStartMessageFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Data Load Start Message Font"
            },
            {
               "name": "dataLoadStartMessageFontSize",
               "type": "number",
               "defaultValue": "",
               "displayName": "Data Load Start Message Font Size"
            },
            {
               "name": "dataLoadStartMessageColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Data Load Start Message Color"
            },
            {
               "name": "dataLoadStartMessageImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Data Load Start Message Image H Align"
            },
            {
               "name": "dataLoadStartMessageImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Data Load Start Message Image V Align"
            },
            {
               "name": "dataLoadStartMessageImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Data Load Start Message Image Alpha",
               "min": "0 "
            },
            {
               "name": "dataLoadStartMessageImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Data Load Start Message Image Scale",
               "min": "0"
            },
            {
               "name": "dataEmptyMessage",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Data Empty Message"
            },
            {
               "name": "dataEmptyMessageFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Data Empty Message Font"
            },
            {
               "name": "dataEmptyMessageFontSize",
               "type": "number",
               "defaultValue": "",
               "displayName": "Data Empty Message Font Size"
            },
            {
               "name": "dataEmptyMessageColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Data Empty Message Color"
            },
            {
               "name": "dataEmptyMessageImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Data Empty Message Image H Align"
            },
            {
               "name": "dataEmptyMessageImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Data Empty Message Image V Align"
            },
            {
               "name": "dataEmptyMessageImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Data Empty Message Image Alpha",
               "min": "0 "
            },
            {
               "name": "dataEmptyMessageImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Data Empty Message Image Scale",
               "min": "0"
            },
            {
               "name": "dataLoadErrorMessage",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Data Load Error Message"
            },
            {
               "name": "dataLoadErrorMessageFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Data Load Error Message Font"
            },
            {
               "name": "dataLoadErrorMessageFontSize",
               "type": "number",
               "defaultValue": "",
               "displayName": "Data Load Error Message Font Size"
            },
            {
               "name": "dataLoadErrorMessageColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Data Load Error Message Color"
            },
            {
               "name": "dataLoadErrorMessageImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Data Load Error Message Image H Align"
            },
            {
               "name": "dataLoadErrorMessageImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Data Load Error Message Image V Align"
            },
            {
               "name": "dataLoadErrorMessageImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Data Load Error Message Image Alpha",
               "min": "0 "
            },
            {
               "name": "dataLoadErrorMessageImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Data Load Error Message Image Scale",
               "min": "0"
            },
            {
               "name": "dataInvalidMessage",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Data Invalid Message"
            },
            {
               "name": "dataInvalidMessageFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Data Invalid Message Font"
            },
            {
               "name": "dataInvalidMessageFontSize",
               "type": "number",
               "defaultValue": "",
               "displayName": "Data Invalid Message Font Size"
            },
            {
               "name": "dataInvalidMessageColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Data Invalid Message Color"
            },
            {
               "name": "dataInvalidMessageImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Data Invalid Message Image H Align"
            },
            {
               "name": "dataInvalidMessageImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Data Invalid Message Image V Align"
            },
            {
               "name": "dataInvalidMessageImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Data Invalid Message Image Alpha",
               "min": "0 "
            },
            {
               "name": "dataInvalidMessageImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Data Invalid Message Image Scale",
               "min": "0"
            }
         ]
      },
      {
         "category": "Chart Titles and Axis Names",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "caption",
               "type": "text",
               "defaultValue": "Monthly",
               "displayName": "Caption"
            },
            {
               "name": "subCaption",
               "type": "text",
               "defaultValue": "",
               "displayName": "Sub Caption"
            },
            {
               "name": "xAxisName",
               "type": "text",
               "defaultValue": "",
               "displayName": "X Axis Name"
            },
            {
               "name": "yAxisName",
               "type": "text",
               "defaultValue": "",
               "displayName": "Y Axis Name"
            }
         ]
      },
      {
         "category": "Chart Caption Cosmetics",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "captionAlignment",
               "type": "select",
               "defaultValue": "",
               "displayName": "Caption Alignment"
            },
            {
               "name": "captionOnTop",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Caption On Top"
            },
            {
               "name": "captionFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "Caption Font Size",
               "min": "6 "
            },
            {
               "name": "subCaptionFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "Sub Caption Font Size",
               "min": "6 "
            },
            {
               "name": "captionFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Caption Font"
            },
            {
               "name": "subCaptionFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Sub Caption Font"
            },
            {
               "name": "captionFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Caption Font Color"
            },
            {
               "name": "subCaptionFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Sub Caption Font Color"
            },
            {
               "name": "captionFontBold",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Caption Font Bold"
            },
            {
               "name": "subCaptionFontBold",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Sub Caption Font Bold"
            },
            {
               "name": "alignCaptionWithCanvas",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Align Caption With Canvas"
            },
            {
               "name": "captionHorizontalPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Caption Horizontal Padding"
            }
         ]
      },
      {
         "category": "Chart Axis Configuration Attributes",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "showXAxisLine",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show X Axis Line"
            },
            {
               "name": "xAxisLineColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "X Axis Line Color"
            },
            {
               "name": "xAxisLineThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "X Axis Line Thickness"
            },
            {
               "name": "showYAxisLine",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Y Axis Line"
            },
            {
               "name": "yAxisLineColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Y Axis Line Color"
            },
            {
               "name": "yAxisLineThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Line Thickness"
            },
            {
               "name": "showYAxisValues",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Y Axis Values"
            },
            {
               "name": "yAxisValuesStep",
               "type": "number",
               "defaultValue": "1",
               "displayName": "Y Axis Values Step",
               "min": "1"
            },
            {
               "name": "rotateYAxisName",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Rotate Y Axis Name"
            },
            {
               "name": "yAxisNameWidth",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Name Width"
            },
            {
               "name": "yAxisMinValue",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Min Value"
            },
            {
               "name": "yAxisMaxValue",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Max Value"
            },
            {
               "name": "forceYAxisValueDecimals",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Force Y Axis Value Decimals"
            },
            {
               "name": "yAxisValueDecimals",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Y Axis Value Decimals",
               "min": "0"
            }
         ]
      },
      {
         "category": "x-Axis Name Cosmetics",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "xAxisNameFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "X Axis Name Font Color"
            },
            {
               "name": "xAxisNameFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "X Axis Name Font Size",
               "min": "6 "
            },
            {
               "name": "xAxisNameFontBold",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "X Axis Name Font Bold"
            },
            {
               "name": "xAxisNameFontItalic",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "X Axis Name Font Italic"
            },
            {
               "name": "xAxisNameBgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "X Axis Name Bg Color"
            },
            {
               "name": "xAxisNameBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "X Axis Name Border Color"
            },
            {
               "name": "xAxisNameAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "X Axis Name Alpha",
               "min": "0 "
            },
            {
               "name": "xAxisNameFontAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "X Axis Name Font Alpha",
               "min": "0 "
            },
            {
               "name": "xAxisNameBgAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "X Axis Name Bg Alpha",
               "min": "0 "
            },
            {
               "name": "xAxisNameBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "X Axis Name Border Alpha",
               "min": "0 "
            },
            {
               "name": "xAxisNameBorderPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "X Axis Name Border Padding"
            },
            {
               "name": "xAxisNameBorderRadius",
               "type": "number",
               "defaultValue": "",
               "displayName": "X Axis Name Border Radius"
            },
            {
               "name": "xAxisNameBorderThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "X Axis Name Border Thickness"
            },
            {
               "name": "xAxisNameBorderDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "X Axis Name Border Dashed"
            },
            {
               "name": "xAxisNameBorderDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "X Axis Name Border Dash Len"
            },
            {
               "name": "xAxisNameBorderDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "X Axis Name Border Dash Gap"
            }
         ]
      },
      {
         "category": "y-Axis Name Cosmetics",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "yAxisNameFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Y Axis Name Font"
            },
            {
               "name": "yAxisNameFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Y Axis Name Font Color"
            },
            {
               "name": "yAxisNameFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "Y Axis Name Font Size",
               "min": "6 "
            },
            {
               "name": "yAxisNameFontBold",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Y Axis Name Font Bold"
            },
            {
               "name": "yAxisNameFontItalic",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Y Axis Name Font Italic"
            },
            {
               "name": "yAxisNameBgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Y Axis Name Bg Color"
            },
            {
               "name": "yAxisNameBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Y Axis Name Border Color"
            },
            {
               "name": "yAxisNameAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Y Axis Name Alpha",
               "min": "0 "
            },
            {
               "name": "yAxisNameFontAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Y Axis Name Font Alpha",
               "min": "0 "
            },
            {
               "name": "yAxisNameBgAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Y Axis Name Bg Alpha",
               "min": "0 "
            },
            {
               "name": "yAxisNameBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Y Axis Name Border Alpha",
               "min": "0 "
            },
            {
               "name": "yAxisNameBorderPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Name Border Padding"
            },
            {
               "name": "yAxisNameBorderRadius",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Name Border Radius"
            },
            {
               "name": "yAxisNameBorderThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Name Border Thickness"
            },
            {
               "name": "yAxisNameBorderDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Y Axis Name Border Dashed"
            },
            {
               "name": "yAxisNameBorderDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Name Border Dash Len"
            },
            {
               "name": "yAxisNameBorderDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Name Border Dash Gap"
            }
         ]
      },
      {
         "category": "Chart Cosmetics",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "bgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Bg Color"
            },
            {
               "name": "bgAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Bg Alpha",
               "min": "0 "
            },
            {
               "name": "bgRatio",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Bg Ratio",
               "min": "0 "
            },
            {
               "name": "bgAngle",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Bg Angle",
               "min": "0"
            },
            {
               "name": "bgImage",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Bg Image"
            },
            {
               "name": "bgImageAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Bg Image Alpha",
               "min": "0 "
            },
            {
               "name": "bgImageDisplayMode",
               "type": "select",
               "defaultValue": "",
               "displayName": "Bg Image Display Mode"
            },
            {
               "name": "bgImageVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Bg Image V Align"
            },
            {
               "name": "bgImageHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Bg Image H Align"
            },
            {
               "name": "bgImageScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Bg Image Scale",
               "min": "0"
            },
            {
               "name": "canvasBgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Canvas Bg Color"
            },
            {
               "name": "canvasBgAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Canvas Bg Alpha",
               "min": "0 "
            },
            {
               "name": "canvasBgRatio",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Canvas Bg Ratio",
               "min": "0 "
            },
            {
               "name": "canvasBgAngle",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Canvas Bg Angle",
               "min": "0"
            },
            {
               "name": "canvasBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Canvas Border Color"
            },
            {
               "name": "canvasBorderThickness",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Canvas Border Thickness",
               "min": "0"
            },
            {
               "name": "canvasBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Canvas Border Alpha",
               "min": "0 "
            },
            {
               "name": "showBorder",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Border"
            },
            {
               "name": "borderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Border Color"
            },
            {
               "name": "borderThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Border Thickness"
            },
            {
               "name": "borderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Border Alpha",
               "min": "0 "
            },
            {
               "name": "showVLineLabelBorder",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show V Line Label Border"
            },
            {
               "name": "rotateVLineLabels",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Rotate V Line Labels"
            },
            {
               "name": "logoURL",
               "type": "url",
               "defaultValue": "",
               "displayName": "Logo URL"
            },
            {
               "name": "logoLeftMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Logo Left Margin"
            },
            {
               "name": "logoTopMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Logo Top Margin"
            },
            {
               "name": "logoPosition",
               "type": "select",
               "defaultValue": "",
               "displayName": "Logo Position"
            },
            {
               "name": "logoAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Logo Alpha",
               "min": "0 "
            },
            {
               "name": "logoScale",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Logo Scale",
               "min": "0"
            },
            {
               "name": "logoLink",
               "type": "url",
               "defaultValue": "",
               "displayName": "Logo Link"
            }
         ]
      },
      {
         "category": "Data Plot Cosmetics",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "useRoundEdges",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Use Round Edges"
            },
            {
               "name": "showPlotBorder",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Plot Border"
            },
            {
               "name": "plotBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Plot Border Color"
            },
            {
               "name": "plotBorderThickness",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Plot Border Thickness",
               "min": "0"
            },
            {
               "name": "plotBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Plot Border Alpha",
               "min": "0 "
            },
            {
               "name": "plotBorderDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Plot Border Dashed"
            },
            {
               "name": "plotBorderDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Plot Border Dash Len"
            },
            {
               "name": "plotBorderDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Plot Border Dash Gap"
            },
            {
               "name": "plotFillAngle",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Plot Fill Angle",
               "min": "0"
            },
            {
               "name": "plotFillRatio",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Plot Fill Ratio",
               "min": "0 "
            },
            {
               "name": "plotFillAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Plot Fill Alpha",
               "min": "0 "
            },
            {
               "name": "plotGradientColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Plot Gradient Color"
            },
            {
               "name": "usePlotGradientColor",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Use Plot Gradient Color"
            }
         ]
      },
      {
         "category": "Data Value Cosmetics",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "valueFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Value Font"
            },
            {
               "name": "valueFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Value Font Color"
            },
            {
               "name": "valueFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "Value Font Size",
               "min": "6 "
            },
            {
               "name": "valueFontBold",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Value Font Bold"
            },
            {
               "name": "valueFontItalic",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Value Font Italic"
            },
            {
               "name": "valueBgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Value Bg Color"
            },
            {
               "name": "valueBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Value Border Color"
            },
            {
               "name": "valueAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Value Alpha",
               "min": "0 "
            },
            {
               "name": "valueFontAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Value Font Alpha",
               "min": "0 "
            },
            {
               "name": "valueBgAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Value Bg Alpha",
               "min": "0 "
            },
            {
               "name": "valueBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Value Border Alpha",
               "min": "0 "
            },
            {
               "name": "valueBorderThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Value Border Thickness"
            },
            {
               "name": "valueBorderPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Value Border Padding"
            },
            {
               "name": "valueBorderRadius",
               "type": "number",
               "defaultValue": "",
               "displayName": "Value Border Radius"
            },
            {
               "name": "valueBorderDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Value Border Dashed"
            },
            {
               "name": "valueBorderDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Value Border Dash Len"
            },
            {
               "name": "valueBorderDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Value Border Dash Gap"
            }
         ]
      },
      {
         "category": "Divisional Lines & Grids",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "numDivLines",
               "type": "number",
               "defaultValue": "",
               "displayName": "Num Div Lines"
            },
            {
               "name": "divLineColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Div Line Color"
            },
            {
               "name": "divLineThickness",
               "type": "numberRange",
               "defaultValue": "1",
               "displayName": "Div Line Thickness",
               "min": "1"
            },
            {
               "name": "divLineAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Div Line Alpha",
               "min": "0 "
            },
            {
               "name": "divLineDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Div Line Dashed"
            },
            {
               "name": "divLineDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Div Line Dash Len"
            },
            {
               "name": "divLineDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Div Line Dash Gap"
            },
            {
               "name": "zeroPlaneColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Zero Plane Color"
            },
            {
               "name": "zeroPlaneThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Zero Plane Thickness"
            },
            {
               "name": "zeroPlaneAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Zero Plane Alpha",
               "min": "0 "
            },
            {
               "name": "showZeroPlaneValue",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Zero Plane Value"
            },
            {
               "name": "showAlternateHGridColor",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Alternate H Grid Color"
            },
            {
               "name": "alternateHGridColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Alternate H Grid Color"
            },
            {
               "name": "alternateHGridAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Alternate H Grid Alpha",
               "min": "0 "
            }
         ]
      },
      {
         "category": "Number Formatting",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "formatNumber",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Format Number"
            },
            {
               "name": "formatNumberScale",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Format Number Scale"
            },
            {
               "name": "defaultNumberScale",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Default Number Scale"
            },
            {
               "name": "numberScaleUnit",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Number Scale Unit"
            },
            {
               "name": "numberScaleValue",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Number Scale Value"
            },
            {
               "name": "forceNumberScale",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Force Number Scale"
            },
            {
               "name": "scaleRecursively",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Scale Recursively"
            },
            {
               "name": "maxScaleRecursion",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Max Scale Recursion"
            },
            {
               "name": "scaleSeparator",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Scale Separator"
            },
            {
               "name": "numberPrefix",
               "type": "character",
               "defaultValue": "",
               "displayName": "Number Prefix"
            },
            {
               "name": "numberSuffix",
               "type": "character",
               "defaultValue": "",
               "displayName": "Number Suffix"
            },
            {
               "name": "decimalSeparator",
               "type": "character",
               "defaultValue": "",
               "displayName": "Decimal Separator"
            },
            {
               "name": "thousandSeparator",
               "type": "character",
               "defaultValue": "",
               "displayName": "Thousand Separator"
            },
            {
               "name": "thousandSeparatorPosition",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Thousand Separator Position"
            },
            {
               "name": "inDecimalSeparator",
               "type": "character",
               "defaultValue": "",
               "displayName": "In Decimal Separator"
            },
            {
               "name": "inThousandSeparator",
               "type": "character",
               "defaultValue": "",
               "displayName": "In Thousand Separator"
            },
            {
               "name": "decimals",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Decimals",
               "min": "0"
            },
            {
               "name": "forceDecimals",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Force Decimals"
            }
         ]
      },
      {
         "category": "Font Properties",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "baseFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Base Font"
            },
            {
               "name": "baseFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "Base Font Size",
               "min": "6 "
            },
            {
               "name": "baseFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Base Font Color"
            },
            {
               "name": "outCnvBaseFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Out Cnv Base Font"
            },
            {
               "name": "outCnvBaseFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "Out Cnv Base Font Size",
               "min": "6 "
            },
            {
               "name": "outCnvBaseFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Out Cnv Base Font Color"
            }
         ]
      },
      {
         "category": "Tool-tip",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "showToolTip",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Tool Tip"
            },
            {
               "name": "toolTipBgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Tool Tip Bg Color"
            },
            {
               "name": "toolTipColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Tool Tip Color"
            },
            {
               "name": "toolTipBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Tool Tip Border Color"
            },
            {
               "name": "tooltipBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Tooltip Border Alpha",
               "min": "0 "
            },
            {
               "name": "toolTipSepChar",
               "type": "numberRange",
               "defaultValue": "",
               "displayName": "Tool Tip Sep Char"
            },
            {
               "name": "showToolTipShadow",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Tool Tip Shadow"
            }
         ]
      },
      {
         "category": "Data Plot Hover Effects",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "showHoverEffect",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Hover Effect"
            },
            {
               "name": "plotHoverEffect",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Plot Hover Effect"
            },
            {
               "name": "plotFillHoverColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Plot Fill Hover Color"
            },
            {
               "name": "plotFillHoverAlpha",
               "type": "numberRange",
               "defaultValue": "1 ",
               "displayName": "Plot Fill Hover Alpha",
               "min": "1 "
            },
            {
               "name": "columnHoverColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Column Hover Color"
            },
            {
               "name": "columnHoverAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Column Hover Alpha",
               "min": "0 "
            },
            {
               "name": "plotHoverGradientColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Plot Hover Gradient Color"
            },
            {
               "name": "plotHoverRatio",
               "type": "color",
               "defaultValue": "",
               "displayName": "Plot Hover Ratio"
            },
            {
               "name": "plotHoverAngle",
               "type": "color",
               "defaultValue": "",
               "displayName": "Plot Hover Angle"
            },
            {
               "name": "plotBorderHoverColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Plot Border Hover Color"
            },
            {
               "name": "plotBorderHoverThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Plot Border Hover Thickness"
            },
            {
               "name": "plotBorderHoverDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Plot Border Hover Dashed"
            },
            {
               "name": "plotBorderHoverDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Plot Border Hover Dash Len"
            },
            {
               "name": "plotBorderHoverDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Plot Border Hover Dash Gap"
            }
         ]
      },
      {
         "category": "Data Label Cosmetics",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "labelFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Label Font"
            },
            {
               "name": "labelFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Label Font Color"
            },
            {
               "name": "labelFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "Label Font Size",
               "min": "6 "
            },
            {
               "name": "labelFontBold",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Label Font Bold"
            },
            {
               "name": "labelFontItalic",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Label Font Italic"
            },
            {
               "name": "labelBgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Label Bg Color"
            },
            {
               "name": "labelBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Label Border Color"
            },
            {
               "name": "labelAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Label Alpha",
               "min": "0 "
            },
            {
               "name": "labelBgAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Label Bg Alpha",
               "min": "0 "
            },
            {
               "name": "labelBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Label Border Alpha",
               "min": "0 "
            },
            {
               "name": "labelBorderPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Padding"
            },
            {
               "name": "labelBorderRadius",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Radius"
            },
            {
               "name": "labelBorderThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Thickness"
            },
            {
               "name": "labelBorderDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Label Border Dashed"
            },
            {
               "name": "labelBorderDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Dash Len"
            },
            {
               "name": "labelBorderDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Dash Gap"
            },
            {
               "name": "labelLink",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Link"
            }
         ]
      },
      {
         "category": "Chart Padding & Margins",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "captionPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Caption Padding"
            },
            {
               "name": "xAxisNamePadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "X Axis Name Padding"
            },
            {
               "name": "yAxisNamePadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Name Padding"
            },
            {
               "name": "yAxisValuesPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Y Axis Values Padding"
            },
            {
               "name": "labelPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Padding"
            },
            {
               "name": "valuePadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Value Padding"
            },
            {
               "name": "plotSpacePercent",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Plot Space Percent",
               "min": "0"
            },
            {
               "name": "chartLeftMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Chart Left Margin"
            },
            {
               "name": "chartRightMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Chart Right Margin"
            },
            {
               "name": "chartTopMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Chart Top Margin"
            },
            {
               "name": "chartBottomMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Chart Bottom Margin"
            },
            {
               "name": "canvasLeftMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Canvas Left Margin"
            },
            {
               "name": "canvasRightMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Canvas Right Margin"
            },
            {
               "name": "canvasTopMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Canvas Top Margin"
            },
            {
               "name": "canvasBottomMargin",
               "type": "number",
               "defaultValue": "",
               "displayName": "Canvas Bottom Margin"
            }
         ]
      },
      {
         "category": "The data Object",
         "target": "dataSource.data",
         "values": [
            {
               "name": "alpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Alpha",
               "min": "0 "
            },
            {
               "name": "color",
               "type": "color",
               "defaultValue": "",
               "displayName": "Color"
            },
            {
               "name": "dashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Dashed"
            },
            {
               "name": "displayValue",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Display Value"
            },
            {
               "name": "label",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Label"
            },
            {
               "name": "link",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Link"
            },
            {
               "name": "showLabel",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Label"
            },
            {
               "name": "showValue",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Value"
            },
            {
               "name": "toolText",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Tool Text"
            },
            {
               "name": "value",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Value"
            },
            {
               "name": "labelFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Label Font"
            },
            {
               "name": "labelFontColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Label Font Color"
            },
            {
               "name": "labelFontSize",
               "type": "numberRange",
               "defaultValue": "6 ",
               "displayName": "Label Font Size",
               "min": "6 "
            },
            {
               "name": "labelFontBold",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Label Font Bold"
            },
            {
               "name": "labelFontItalic",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Label Font Italic"
            },
            {
               "name": "labelBgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Label Bg Color"
            },
            {
               "name": "labelBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Label Border Color"
            },
            {
               "name": "labelAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Label Alpha",
               "min": "0 "
            },
            {
               "name": "labelBgAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Label Bg Alpha",
               "min": "0 "
            },
            {
               "name": "labelBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Label Border Alpha",
               "min": "0 "
            },
            {
               "name": "labelBorderPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Padding"
            },
            {
               "name": "labelBorderRadius",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Radius"
            },
            {
               "name": "labelBorderThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Thickness"
            },
            {
               "name": "labelBorderDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Label Border Dashed"
            },
            {
               "name": "labelBorderDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Dash Len"
            },
            {
               "name": "labelBorderDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Border Dash Gap"
            },
            {
               "name": "labelLink",
               "type": "number",
               "defaultValue": "",
               "displayName": "Label Link"
            },
            {
               "name": "hoverColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Hover Color"
            },
            {
               "name": "hoverAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Hover Alpha",
               "min": "0 "
            },
            {
               "name": "hoverGradientColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Hover Gradient Color"
            },
            {
               "name": "hoverRatio",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Hover Ratio",
               "min": "0 "
            },
            {
               "name": "hoverAngle",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Hover Angle",
               "min": "0 "
            },
            {
               "name": "borderHoverColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Border Hover Color"
            },
            {
               "name": "borderHoverAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Border Hover Alpha",
               "min": "0 "
            },
            {
               "name": "borderHoverThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Border Hover Thickness"
            },
            {
               "name": "borderHoverDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Border Hover Dashed"
            },
            {
               "name": "borderHoverDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Border Hover Dash Len"
            },
            {
               "name": "borderHoverDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Border Hover Dash Gap"
            }
         ]
      },
      {
         "category": "Vertical Data Separator Lines",
         "target": "dataSource.data",
         "values": [
            {
               "name": "vLine",
               "type": "number",
               "defaultValue": "",
               "displayName": "V Line"
            },
            {
               "name": "color",
               "type": "color",
               "defaultValue": "",
               "displayName": "Color"
            },
            {
               "name": "thickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Thickness"
            },
            {
               "name": "alpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Alpha",
               "min": "0 "
            },
            {
               "name": "dashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Dashed"
            },
            {
               "name": "dashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Dash Len"
            },
            {
               "name": "dashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Dash Gap"
            },
            {
               "name": "label",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Label"
            },
            {
               "name": "showLabelBorder",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Label Border"
            },
            {
               "name": "linePosition",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Line Position",
               "min": "0"
            },
            {
               "name": "labelPosition",
               "type": "numberRange",
               "defaultValue": "0",
               "displayName": "Label Position",
               "min": "0"
            },
            {
               "name": "labelHAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Label H Align"
            },
            {
               "name": "labelVAlign",
               "type": "select",
               "defaultValue": "",
               "displayName": "Label V Align"
            }
         ]
      },
      {
         "category": "Trend-lines",
         "target": "dataSource.line",
         "values": [
            {
               "name": "startValue",
               "type": "number",
               "defaultValue": "",
               "displayName": "Start Value"
            },
            {
               "name": "endValue",
               "type": "number",
               "defaultValue": "",
               "displayName": "End Value"
            },
            {
               "name": "displayValue",
               "type": "number",
               "defaultValue": "",
               "displayName": "Display Value"
            },
            {
               "name": "color",
               "type": "color",
               "defaultValue": "",
               "displayName": "Color"
            },
            {
               "name": "isTrendZone",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Is Trend Zone"
            },
            {
               "name": "showOnTop",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show On Top"
            },
            {
               "name": "thickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Thickness"
            },
            {
               "name": "alpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Alpha",
               "min": "0 "
            },
            {
               "name": "dashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Dashed"
            },
            {
               "name": "dashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Dash Len"
            },
            {
               "name": "dashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Dash Gap"
            },
            {
               "name": "valueOnRight",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Value On Right"
            },
            {
               "name": "toolText",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Tool Text"
            }
         ]
      },
      {
         "category": "Trend-lines (Chart level attributes)",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "trendlineColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Trendline Color"
            },
            {
               "name": "trendlineThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Trendline Thickness"
            },
            {
               "name": "trendlineAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Trendline Alpha",
               "min": "0 "
            },
            {
               "name": "showTrendlinesOnTop",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Show Trendlines On Top"
            }
         ]
      },
      {
         "category": "Trend-lines Display Value Cosmetics",
         "target": "dataSource.chart",
         "values": [
            {
               "name": "trendValueFont",
               "type": "text",
               "defaultValue": "",
               "displayName": "Trend Value Font"
            },
            {
               "name": "trendValueFontSize",
               "type": "undetermined",
               "defaultValue": "",
               "displayName": "Trend Value Font Size"
            },
            {
               "name": "trendValueFontBold",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Trend Value Font Bold"
            },
            {
               "name": "trendValueFontItalic",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Trend Value Font Italic"
            },
            {
               "name": "trendValueBgColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Trend Value Bg Color"
            },
            {
               "name": "trendValueBorderColor",
               "type": "color",
               "defaultValue": "",
               "displayName": "Trend Value Border Color"
            },
            {
               "name": "trendValueAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Trend Value Alpha",
               "min": "0 "
            },
            {
               "name": "trendValueBgAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Trend Value Bg Alpha",
               "min": "0 "
            },
            {
               "name": "trendValueBorderAlpha",
               "type": "numberRange",
               "defaultValue": "0 ",
               "displayName": "Trend Value Border Alpha",
               "min": "0 "
            },
            {
               "name": "trendValueBorderPadding",
               "type": "number",
               "defaultValue": "",
               "displayName": "Trend Value Border Padding"
            },
            {
               "name": "trendValueBorderRadius",
               "type": "number",
               "defaultValue": "",
               "displayName": "Trend Value Border Radius"
            },
            {
               "name": "trendValueBorderThickness",
               "type": "number",
               "defaultValue": "",
               "displayName": "Trend Value Border Thickness"
            },
            {
               "name": "trendValueBorderDashed",
               "type": "boolean",
               "defaultValue": "",
               "displayName": "Trend Value Border Dashed"
            },
            {
               "name": "trendValueBorderDashLen",
               "type": "number",
               "defaultValue": "",
               "displayName": "Trend Value Border Dash Len"
            },
            {
               "name": "trendValueBorderDashGap",
               "type": "number",
               "defaultValue": "",
               "displayName": "Trend Value Border Dash Gap"
            }
         ]
      }
   ],
   "raw": {
      "type": "column2d",
      "renderAt": "chart-container",
      "width": "450",
      "height": "350",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Monthly",
            "xaxisname": "Month",
            "yaxisname": "Revenue",
            "numberprefix": "$",
            "showvalues": "1",
            "animation": "0"
         },
         "data": [
            {
               "label": "Jan",
               "value": "420000"
            },
            {
               "label": "Feb",
               "value": "910000"
            },
            {
               "label": "Mar",
               "value": "720000"
            },
            {
               "label": "Apr",
               "value": "550000"
            },
            {
               "label": "May",
               "value": "810000"
            },
            {
               "label": "Jun",
               "value": "510000"
            },
            {
               "label": "Jul",
               "value": "680000"
            },
            {
               "label": "Aug",
               "value": "620000"
            },
            {
               "label": "Sep",
               "value": "610000"
            },
            {
               "label": "Oct",
               "value": "490000"
            },
            {
               "label": "Nov",
               "value": "530000"
            },
            {
               "label": "Dec",
               "value": "330000"
            }
         ],
         "trendlines": [
            {
               "line": [
                  {
                     "startvalue": "700000",
                     "istrendzone": "1",
                     "valueonright": "1",
                     "tooltext": "AYAN",
                     "endvalue": "900000",
                     "color": "009933",
                     "displayvalue": "Target",
                     "showontop": "1",
                     "thickness": "5"
                  }
               ]
            }
         ],
         "styles": {
            "definition": [
               {
                  "name": "CanvasAnim",
                  "type": "animation",
                  "param": "_xScale",
                  "start": "0",
                  "duration": "1"
               }
            ],
            "application": [
               {
                  "toobject": "Canvas",
                  "styles": "CanvasAnim"
               }
            ]
         }
      }
   }
}
;
		 // to be removed later
		 testOb.data = $rootScope.data;

	});
// For testing purpose; To be removed later
var testOb = {};