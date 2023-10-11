//declaration of variables
let name='Aswini';
let age= 20;
let isProproved= true;
let address= undefined;
let rollNo= null;

let firstName; // camel notation 
console.log(name);
const interestValue= 0.3;
console.log(interestValue);

//declare object
let person= {
    name:'Aswini',
    age: 30
};
console.log(person);

person.name='Akhil'  // dot notation
// or person['name']    bracket notation
console.log(person.name);

// Array
let selectColors= ['red','green','blue'];
console.log(selectColors);
selectColors[3]=1;
console.log(selectColors);

// Function
// performing a task
 function greet(school, location){
    console.log('Inside function ' + school + ' ' +location);
 }

 greet('Brennen','Tly');
 greet('MES');

 //calculates a value
  function sqaure(num) {
    return num*num;
  }

  let number= sqaure(2);
  console.log(number);

  //or simply
  console.log(sqaure(2));


  var x= 21;
  var girl= function() {
    console.log(x);
    var x= 20;
  };

  girl();

  //arrow functions- are commonly used for short, simple functions
  //one line function declare
  const add = (a, b) => a + b;

  //alert
  alert('danger');

  //Array
  // You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");


// object

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

