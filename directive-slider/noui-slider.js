angular.module('sliderApp')
.directive('noUiSlider', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		 require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, $element, $attr, ngModelCtrl) {
			var slider = $element[0];
			noUiSlider.create(slider, {
				start: 600,
				connect: true,
				range:{
					min:Number($attr.rangeMin),
					max:Number($attr.rangeMax)
				}
			});

			ngModelCtrl.$render = function(){
				slider.noUiSlider.set(ngModelCtrl.$viewValue);
			}

			slider.noUiSlider.on('update',function(values, handle){
				ngModelCtrl.$setViewValue(values[handle]);
			});
		}
	};
}]);