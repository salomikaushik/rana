'use strict';

/**
 * @ngdoc overview
 * @name testAppApp
 * @description
 * # testAppApp
 *
 * Main module of the application.
 */
angular
  .module('testAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs : 'loginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).when('/myAccount',{
        templateUrl: 'views/myAccount.html',
        controller: 'myAccountCtrl'
      }
      )
      .otherwise({
        redirectTo: '/'
      });
  });
