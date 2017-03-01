/**
*  Module
*
* Description
*/
angular.module('heroApp', [])
.controller('HeroController', ['$scope', function($scope){
	var self = this;
	self.hero = {
		name:'Spawn'
	};
}])