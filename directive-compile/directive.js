/**
*  Module
*
* Description
*/
angular.module('dynamicFormApp').
directive('formElement', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: true, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		 require: '^form', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		 compile: function($element, $attrs){
		 	var expectedInputAttrs ={
		 		'required':'required',
		 		'ng-minlength':'ngMinlength',
		 		'ng-pattern':'ngPattern'
		 	};

		 	var validationKeys = $element.find("validation");
		 	var presentValidationKeys = {};
		 	var inputName = $attrs.name;
		 	angular.forEach(validationKeys,function(validationKey){
		 		validationKey = angular.element(validationKey);
		 		presentValidationKeys[validationKey.attr('key')] = validationKey.text();
		 	});

		 	var elementHtml = 'div' +
		 	'<label >'+$attrs.label+'</label>'+
		 	'<input type="'+$attrs.type+'" name="'+inputName+'" ng-model="'+$attrs.bindTo+'"';
		 	$element.removeAttr("type");
		 	$element.removeAttr("name");
		 	for(var i in expectedInputAttrs){
		 		var attrTemp = $attrs[expectedInputAttrs[i]];
		 		if (attrTemp != undefined) {
		 			elementHtml += ' '+ i + '="' + attrTemp+'"';
		 		}
		 		$element.removeAttr(i);
		 	}
		 	elementHtml += '>';
		 	elementHtml += 
		 	'<span ng-repeat="(key,text) in validators"' +
		 	' ng-show="hasError(key)"' +
		 	' ng-bind="text"></span>';
		 	elementHtml += "</div>";
		 	$element.html(elementHtml);
		 	return function($scope,$element,$attrs,formCtrl){
		 		$scope.validators = angular.copy(presentValidationKeys);
		 		$scope.hasError = function(key){
		 			return !!formCtrl[inputName]['$error'][key];
		 		}
		 	}
		 }
		 	
		//link: function($scope, iElm, iAttrs, controller) {
			
		//}
	};
}]);