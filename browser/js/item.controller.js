'use strict'

alphaApp.controller('ItemCtrl', function($scope, itemFactory){

  $scope.getByLetter = function(letter){
      itemFactory.getByLetter($scope.category, letter)
      .then(function(items){
        $scope.items = items;
      });
    };

});//end controller
