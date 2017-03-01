function HeroDetailController()
{

}

/**
* detailApp Module
*
* Description
*/
angular.module('heroApp').component('heroDetail',{
	templateUrl:'hero-detail.html',
	controller:HeroDetailController,
	bindings:{
		hero:'='
	}
});