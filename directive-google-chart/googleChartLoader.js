/**
* googleChartApp Module
*
* Description
*/
angular.module('googleChartApp').
factory('googleChartLoaderPromise', ['$q','$rootScope','$window', 
	function($q,$rootScope,$window){
	var deferred = $q.defer();

	$window.google.load('visualization','1',{
		packages:['corechart'],
		callback:function(){
			$rootScope.$apply(function(){
				deferred.resolve();
			});
		}
	});
	return deferred.promise;
}])