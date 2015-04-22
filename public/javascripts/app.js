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
  ]).run(function($rootScope) {
    window.alert = function(msg) {
      $rootScope.msg = msg;
      $("#m-alert").modal("show");
    };
  });