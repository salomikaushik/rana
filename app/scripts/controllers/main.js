'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('MainCtrl', function ($scope, $location, myAccountService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.password = '';
    $scope.username = '';
    var userData = [
    	{
    		'username' : 'salomi',
    		'passowrd' : '221109',
    		'name' : 'SALOMI KAUSHIK'
    	},
    	{
    		'username' : 'pallav',
    		'passowrd' : 'password'
    	}
    ];

    $scope.popup=function(){
    	window.alert('page open');
    };
    $scope.validate= function(){
    	for(var i = 0; i<userData.length;i++){
    		if(userData[i].username === $scope.username){
    			if(userData[i].passowrd === $scope.password){
    				$scope.showMessage = 'logged IN';
    				myAccountService.username = userData[i];
    				$location.path('/myAccount');
    			}else {
    				$scope.showMessage = 'enter correct password';
    			}
    		}
    	}
    };
  });
