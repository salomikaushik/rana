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
  	return self;
  });
