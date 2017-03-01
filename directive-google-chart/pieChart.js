angular.module("googleChartApp")
.directive('pieChart', ['googleChartLoaderPromise', function(googleChartLoaderPromise){
	var covertToPieChartDataTableFormat = function(firstColumnName,secondColumnName,data){
		var pieChartArray = [[firstColumnName,secondColumnName]];
		for(var i=0;i<data.length;i++){
			pieChartArray.push(data[i].label,data[i].value);	
		}
		return google.visualization.arrayToDataTable(pieChartArray);
	};
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {
		 	chartData:"=",
			chartConfig:"="
		 }, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, $element) {
			googleChartLoaderPromise.then(function(){
				var chart = new google.visualization.pieChart($element[0]);
			});

			$scope.$watch('chartData',function(newVal,oldVal){
				var config = $scope.chartConfig;
				if(newVal){
					chart.draw(covertToPieChartDataTableFormat(config.firstColumnHeader,config.secondColumnHeader,newVal),
						{title:$scope.chartConfig.title});
				}
			});
		}
	};
}]);