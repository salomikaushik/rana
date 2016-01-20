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

    $scope.details = [
  {name:'Salomi', number:1234},
  {name:'pallav', number:5678},
  {name:'babul', number:9012},
  {name:'rana', number:345},
  {name:'me d bestest:)', number:14},
	]
  });
