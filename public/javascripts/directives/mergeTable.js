angular.module("mergeTableApp").directive("mergeTable", ['mergeTableTemplate',
  function(mergeTableTemplate) {
    return {
      restrict: 'E',
      templateUrl: function(tElement, tAttrs) {
        return mergeTableTemplate.getPath();
      },
      replace: true,
      link: function(scope, element, attrs) {

      }
    };
  }
])