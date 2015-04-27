'use strict';

/**
 * @ngdoc function
 * @name mergeTableApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the mergeTableApp
 */
angular.module('mergeTableApp')
	.controller('mainCtrl', function($scope, $compile, $templateCache) {
		$scope.rnumber = 10;
		$scope.cnumber = 20;
		$scope.rnumberArray = {
			0: 0
		};
		$scope.cnumberArray = {
			0: 0
		};
		$scope.$watch("rnumber", function(newVal, oldVal) {
			$scope.rnumberArray = {
				0: 0
			};
			for (var i = 0; i < $scope.rnumber; i++) {
				$scope.rnumberArray[i] = i;
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
		var tableContainer = $("#tableContainer");
		$scope.initTable = function() {
			MergeTable.init("tableContainer", tableContainer.html());
		};
		$scope.create = function() {
			tableContainer.html("");
			var link = $compile($templateCache.get("template/table.html"));

			/*
			 * Executing the linking function
			 * creates a new element.
			 */
			var new_elem = link($scope);

			// Which we can then append to our DOM element.
			tableContainer.append(new_elem);
		};
		for (var i in MergeTable)
			$scope[i] = MergeTable[i];
	});