/**
*
* Description
*/
angular.module('stockMarketApp')
.directive('validZip', [function(){
	// Runs during compile
	var zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/g;
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		 require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, $element, $attrs, ngModelCtrl) {
			//dom update -> model
			ngModelCtrl.$parsers.unshift(function (value) {
				var valid = zipCodeRegex.test(value);
				ngModelCtrl.$setValidity('validZip',valid);
				return valid?value:undefined;
			});
			//model update ->dom
			ngModelCtrl.$formatters.unshift(function (value) {
				var valid = zipCodeRegex.test(value);
				ngModelCtrl.$setValidity(valid);
				return value;
			});
		}
	};
}]);