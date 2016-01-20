'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('myAccountCtrl', function ($scope, mainService) {

    $scope.userData =  mainService.username;
    $scope.showMessage = 'WELCOME';
  });
