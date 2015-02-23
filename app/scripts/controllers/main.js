'use strict';

/**
 * @ngdoc function
 * @name siibraryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siibraryApp
 */
angular.module('siibraryApp')
  .controller('MainCtrl', function ($scope, bookService) {
	
	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.books = bookService.books;

  });
