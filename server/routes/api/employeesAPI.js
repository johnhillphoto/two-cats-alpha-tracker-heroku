var router = require('express').Router();
module.exports = router;
var Employee = require('../.././model/db.js').Employee;
var indexer = require('../.././model/db.js').indexer;

router.get('/find/:keyLetter', function(req, res, next){
  var keyLetter =  new RegExp("^" + req.params.keyLetter );
  Employee.find({lastName: keyLetter})
  .then(function(employees){
    var decoratedEmployees = employees.map(function(employee){
      return employee.toJSON({ virtuals: true });
    });
    res.status(200).json(decoratedEmployees);
  });
});

router.get('/index', function(req, res, next){
    return indexer(Employee)
    .then(function(list){
      res.status(200).json(list);
    });
});
