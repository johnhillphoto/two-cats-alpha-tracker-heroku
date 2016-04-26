'use strict'

alphaApp.controller('ItemCtrl', function($scope, itemFactory){

  $scope.getByLetter = function(letter){
    //a little confused about how this is getting passed in?
    //this seems like something that would come in by $stateParams
      itemFactory.getByLetter($scope.category, letter)
      .then(function(items){
        $scope.items = items;
      });
    };

});//end controller
