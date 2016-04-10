var Promise = require('bluebird');
var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: String
});

var Product = mongoose.model('product', productSchema);

var employeeSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});

employeeSchema.virtual('name')
   .get(function () {
   return this.firstName + ' ' + this.lastName;
});
employeeSchema.set('toObject', { getters: true });

var Employee = mongoose.model('employee', employeeSchema);

//below sets up connect, checks for existence of connection first
var _conn;

function connect(){
  if(_conn)
    return _conn;
  _conn = new Promise(function(resolve, reject){
    mongoose.connect(process.env.CONN, function(err){
      if(err)
        return reject('make sure mongo is running on this machine');
      resolve(mongoose.connection);
    });
  });
  return _conn;
}

function disconnect(){
  return new Promise(function(resolve, reject){
    mongoose.disconnect(function(){
      _conn = null;
      resolve();
    });
  });
}

function indexer(category){
  var alphaCount = {A: false,B: false,C: false,D: false,E: false,F: false,G: false,H: false,I: false,J: false,K: false,L: false,M: false,N: false,O: false,P: false,Q: false,R: false,S: false,T: false,U: false,V: false,W: false,X: false,Y: false,Z: false};
  var _key = '';
  if(category === Product){_key = 'name';}
  else {_key = 'lastName';}
   return category.find({})
  .then(function(things){
    things.map(function(thing){
      alphaCount[thing[_key].charAt(0)] = true;
    });//end map
    return alphaCount;
});//end then
}

module.exports = {
  connect: connect,
  disconnect: disconnect,
  indexer: indexer,
  Product: Product,
  Employee: Employee,
};
