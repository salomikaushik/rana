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
    var self = this;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    self.withoutPassword =false;
    self.password = 'rrrrr';
    self.username = '';
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

    self.popup=function(){
    	window.alert('page open');
    };
    self.validate= function(){

        var loginData= myAccountService.validateLogin(userData,self.username,self.password,
            self.withoutPassword);
        self.showMessage = loginData.showMessage;
        if(loginData.status){
            $location.path('/myAccount');
        }
    };
  });
