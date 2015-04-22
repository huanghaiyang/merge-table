'use strict';

/**
 * @ngdoc function
 * @name mergeTableApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the mergeTableApp
 */
angular.module('mergeTableApp')
	.controller('mainCtrl', function($scope) {
		$scope.rnumber = 10;
		$scope.cnumber = 20;
		$scope.rnumberArray = {
			0: 0
		};
		$scope.cnumberArray = {
			0: 0
		};
		$scope.$watch("rnumber", function(newVal , oldVal) {
			$scope.rnumberArray = {
				0: 0
			};
			for (var i = 0; i < $scope.rnumber; i++) {
				$scope.rnumberArray[i] = i;
			}

			if(newVal < oldVal)
			{

			}
		});
		$scope.$watch("cnumber", function() {
			$scope.cnumberArray = {
				0: 0
			};
			for (var i = 0; i < $scope.cnumber; i++) {
				$scope.cnumberArray[i] = i;
			}
		});
		$scope.initTable = function() {
			var tableContainer = $("#tableContainer");
			MergeTable.init("tableContainer", tableContainer.html());
		};
		for (var i in MergeTable)
			$scope[i] = MergeTable[i];
	});