(function(angular){
	'use strict'

	function HeroDetailController(){
		var ctrl = this;
		ctrl.delete = function(){
			ctrl.onDelete({hero:ctrl.hero});
		}

		ctrl.update = function(prop,value){
			ctrl.onUpdate({hero:ctrl.hero,prop:prop,value:value});
		}
	}

	angular.module('heroApp').component('heroDetail',{
		templateUrl:'hero-detail.html',
		controller:HeroDetailController,
		bindings:{
			hero:'<',
			onUpdate:'&',
			onDelete:'&'
		}
	});
})(window.angular);