'use strict';

alphaApp.config(function ($stateProvider) {

  $stateProvider.state('products', {
    url: '/products',
    template: '<item-directive></item-directive>',
    resolve: {
      alphabet: function (itemFactory) {
        return itemFactory.getIndex('products');
      },//end alphabet
      category: function(){
        return 'products';//do you need this?
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
      alphabet: function (itemFactory) {
        return itemFactory.getIndex('employees');
      },//end alphabet
      category: function(){
        return 'employees';//again do you need it?
      }
    },//end resolve
    controller: function($scope, alphabet, category){
         $scope.alphabet = alphabet;
         $scope.category = category;
       }
  });//end state

  $stateProvider.state('home', {
    url: '/',
    template: '<h4>Choose Products or Employees above'
  });//end state

});
