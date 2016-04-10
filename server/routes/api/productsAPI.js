var router = require('express').Router();
module.exports = router;
var Product = require('../.././model/db.js').Product;
var indexer = require('../.././model/db.js').indexer;

router.get('/find/:keyLetter', function(req, res, next){
  var keyLetter =  new RegExp("^" + req.params.keyLetter );
  Product.find({name: keyLetter})
  .then(function(products){
    res.status(200).json(products);
  });
});

router.get('/index', function(req, res, next){
    return indexer(Product)
    .then(function(list){
      res.status(200).json(list);
    });
});
