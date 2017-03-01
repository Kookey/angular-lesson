(function (angular) {
	'use strict'
	function EditableFieldController(){
		var ctrl = this;
		ctrl.editMode = false;
		ctrl.handleModeChange = function(){
			if(ctrl.editMode){
				ctrl.onUpdate({value:ctrl.fieldValue});
				ctrl.fieldValueCopy = ctrl.fieldValue;
			}
			ctrl.editMode = !ctrl.editMode;
		}
		ctrl.reset = function(){
			ctrl.fieldValue = ctrl.fieldValueCopy;
		}

		ctrl.$onInit = function () {
			ctrl.fieldValueCopy = ctrl.fieldValue;
			if (!fieldType) {
				ctrl.fieldType = 'text';
			}
		}
	}

	angular.module('heroApp').component('editableField',{
		templateUrl:'editable-field.html',
		controller:EditableFieldController,
		bindings:{
			fieldValue:'<',
			fieldType:'@?',
			onUpdate:'&'
		}
	});
})(window.angular);