'use strict'

alphaApp.controller('ItemCtrl', function($scope, itemFactory, alphabet,  category){

  $scope.getByLetter = function(letter){
      itemFactory.getByLetter(category, letter)
      .then(function(items){
        $scope.items = items;
      });
    };

    $scope.category = category;
    $scope.alphabet = alphabet;

});//end controller
