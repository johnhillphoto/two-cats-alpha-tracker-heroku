alphaApp.factory('itemFactory', function($http, $log){
  var itemFactory ={}

    itemFactory.getAll = function(){
      return $http.get('/api/products')
      .then(function(res){
        return res.data;
      }).catch($log.error);
    };//end getAll

    itemFactory.getByLetter = function(category, letter){
      return $http.get('/api/' + category + '/find/' + letter)
      .then(function(res){
        return res.data;
      }).catch($log.error);
    };//end getAll

    itemFactory.getIndex = function(category){
      return $http.get('/api/' + category + '/index')
      .then(function(res){
        return res.data;
      }).catch($log.error);
    };//end getIndex

    // itemFactory.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  return itemFactory;
});//end factory
