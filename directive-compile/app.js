/**
* dynamicFormApp Module
*
* Description
*/
angular.module('dynamicFormApp', []).
controller('MainCtrl', ['$scope', function($scope){
	var self = this;
	self.username="";
	self.password="";
}])