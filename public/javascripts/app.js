'use strict';

/**
 * @ngdoc overview
 * @name mergeTableApp
 * @description
 * # mergeTableApp
 *
 * Main module of the application.
 */
angular
  .module('mergeTableApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main',
          controller: 'mainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]).run(function($rootScope, $templateCache) {
    window.alert = function(msg) {
      $rootScope.msg = msg;
      $("#m-alert").modal("show");
    };
    $templateCache.put("template/table.html",
      "<table class=\"table\">\n" +
      "<tbody>\n" +
      "<tr ng-repeat=\"i in rnumberArray\">\n" +
      "<td ng-repeat=\"i in cnumberArray\" repeat-callback></td>\n" +
      "</tr>\n" +
      "</tbody>\n" +
      "</table>\n");
  }).provider('mergeTableTemplate', function() {
    var templatePath = 'template/table.html';

    this.setPath = function(path) {
      templatePath = path;
    };

    this.$get = function() {
      return {
        getPath: function() {
          return templatePath;
        }
      };
    };
  });