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

        var loginData= myAccountService.validateLogin(userData,$scope.username,$scope.password);
        $scope.showMessage = loginData.showMessage;
        if(loginData.status){
            $location.path('/myAccount');
        }
    };
  });
