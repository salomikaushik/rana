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
  {name:'Pallav', number:5678},
  {name:'Babul', number:9012},
  {name:'Rana', number:345},
  
	];
	$scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
  });
