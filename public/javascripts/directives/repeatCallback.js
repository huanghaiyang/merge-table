angular.module("mergeTableApp").directive("repeatCallback", function() {
	return function(scope, element, attrs) {
		if (scope.$parent.$last && scope.$last) {
			scope.initTable();
		}
	}
});