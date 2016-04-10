alphaApp.directive('itemDirective', function(PlayerFactory){
  return {
    templateUrl: 'browser/views/items.html',
    controller: 'ItemCtrl',
    link: function(scope, element, attr){
      angular.extend(scope, PlayerFactory); // copy props from param2 to param1

      scope.toggle = function () {
        if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
        else PlayerFactory.resume();
      };

      scope.getPercent = function () {
        return PlayerFactory.getProgress() * 100;
      };
    }//end link
  };

});//end directive
