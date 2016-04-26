alphaApp.directive('itemDirective', function(){
  //more than likely you'll want to have an isolated scope on the directive-- this will make directive much more testable
  return {
    templateUrl: 'browser/views/items.html',
    controller: 'ItemCtrl'
  };
});//end directive
