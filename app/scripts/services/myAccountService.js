'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .service('myAccountService', function () {
  	var self = this;
  	self.username ='';

  	self.validateLogin = function(userData,username,password){
  		var loginData={};
  		for(var i = 0; i<userData.length;i++){
    		if(userData[i].username === username){
    			if(userData[i].passowrd === password){
    				loginData.showMessage = 'logged IN';
    				loginData.status = true;
    				this.username = userData[i];
    			}else {
    				loginData.showMessage = 'Enter Correct UserName or Password';
    				loginData.status = false;

    			}
    		}
    	}
    	return loginData;
  	};
  	return self;
  });
