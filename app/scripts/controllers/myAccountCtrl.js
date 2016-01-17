'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('myAccountCtrl', function ($scope, myAccountService) {

    $scope.userData =  myAccountService.username;
    $scope.showMessage = 'WELCOME';
  });
