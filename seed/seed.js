var db = require('.././server/model/db.js');
var Promise = require('bluebird');
var faker = require('Faker');

var Product = db.Product;
var Employee = db.Employee;
var alphaChecker = db.alphaChecker;


//use Faker to create Employee names
var employeeData =[];
for (var i = 0; i < 150; i++) {
  var newEmployee = {};
  newEmployee.firstName =faker.Name.firstName();
  newEmployee.lastName = faker.Name.lastName();
  employeeData.push(newEmployee);
}

var productData =[
  { name: 'Brush'},{ name: 'Heated Mat'},{ name: 'Bed'},{ name: 'Hairball Remedy'},{ name: 'Scratching Post'},
  { name: 'Food Dish'},{ name: 'Catnip'},{ name: 'Collar'},{ name: 'Claw Trimmers'},{ name: 'Frontline'},
  { name: 'Treats'},{ name: 'Fishing Pole Toy'},{ name: 'Laser Pointer'},{ name: 'Litter Box'},{ name: 'Litter Genie'},{ name: 'Clumping Litter'}, { name: 'Water Bowl'},{ name: 'Cat Food - Wet'},
  { name: 'Cat Food - Dry'},{ name: 'Toy Mouse'},{ name: 'Ball Of Paper'}, { name: 'Grooming Scissors'}, { name: 'Pheasant Feather'}
];

//dataMaker creates emplyees or products from above arrays
var dataMaker = function(data, item, next){
  return db.connect()
    .then(function(){
      return item.remove({});
    })
    .then (function(){
      var Promises = data.map(function(_thing){
        return item.create(_thing);
      });
      return Promises;
    })
    .then (function(Promises){
      return Promise.all(Promises);
    })
    .then (function(){
      console.log('seeded');
    });
};


dataMaker(employeeData, Employee);
dataMaker(productData, Product);
