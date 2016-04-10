'use strict';

alphaApp.config(function ($stateProvider) {

  $stateProvider.state('products', {
    url: '/products',
    template: '<item-directive></item-directive>',
    resolve: {
      alphabet: function (itemFactory, $stateParams) {
        return itemFactory.getIndex('products');
      },//end alphabet
      category: function(){
        return 'products';
      }
    },//end resolve
    controller: function($scope, alphabet, category){
         $scope.alphabet = alphabet;
         $scope.category = category;
       }
  });//end state

  $stateProvider.state('employees', {
    url: '/employees',
    template: '<item-directive></item-directive>',
    resolve: {
      alphabet: function (itemFactory, $stateParams) {
        return itemFactory.getIndex('employees');
      },//end alphabet
      category: function(){
        return 'employees';
      }
    },//end resolve
    controller: function($scope, alphabet, category){
         $scope.alphabet = alphabet;
         $scope.category = category;
       }
  });//end state



});
