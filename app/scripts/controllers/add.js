'use strict';

/**
 * @ngdoc function
 * @name siibraryApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the siibraryApp
 */
angular.module('siibraryApp')
  .controller('AddCtrl', function ($scope, bookService) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];    

  	$scope.newBook = {id: '', title: '', description: ''};
  	$scope.addBook = function() {
  		bookService.addBook($scope.newBook);
  	};

  });
