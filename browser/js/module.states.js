'use strict';

alphaApp.config(function ($stateProvider) {

  $stateProvider.state('products', {
    url: '/products',
    template: '<item-directive></item-directive>',
    controller: 'ItemCtrl',
    resolve: {
      alphabet: function (itemFactory, $stateParams) {
        return itemFactory.getIndex('products');
      },//end alphabet
      category: function(){
        return 'products';
      }
    }//end resolve
  });//end state

  $stateProvider.state('employees', {
    url: '/employees',
    templateUrl: 'browser/views/items.html',
    controller: 'ItemCtrl',
    resolve: {
      alphabet: function (itemFactory, $stateParams) {
        return itemFactory.getIndex('employees');
      },//end alphabet
      category: function(){
        return 'employees';
      }
    }//end resolve
  });//end state



});
