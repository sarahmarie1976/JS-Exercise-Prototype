/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/


// create a constructor function for Person
// it takes 3 properties: name, age, stomach - which is an empty array


function Person(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.stomach = [];
};

// create an eat function that gives the person the ability to eat some food - it has a parameter of something that we can pass food into as an argument
// if the stomach length is < 10 the person can eat
// we want to push arguments to the new array

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
};

// create a poop method - the poop method empties the stomach 

Person.prototype.poop = function(){
  this.stomach = [];
};

// method called toString  - needs to return a string with name and age

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
};

personOne = new Person({
  name: 'Mary',
  age: 50,
})

personTwo = new Person({
	name: 'Michelle',
	age: 39,
});

// not hoisted

console.log(personOne.toString());
personOne.eat('ramen');
personOne.eat('pizza');
personOne.eat('tacos');
console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);

console.log(personTwo.toString());
personTwo.eat('ramen');
personTwo.eat('pizza');
personTwo.eat('tacos');
console.log(personTwo.stomach);
personTwo.poop();
console.log(personTwo.stomach);




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
	this.model = model;
	this.milesPerGallon = milesPerGallon;
	this.tank = 0;
	this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
	this.tank = this.tank + gallons;
};
Car.prototype.drive = function (distance) {
	let milesInTank = this.tank * this.milesPerGallon;
	if (distance <= milesInTank) {
		this.odometer = this.odometer + distance;
		this.tank = this.tank - distance / this.milesPerGallon;
	} else {
		this.tank = 0;
		this.odometer = this.odometer + milesInTank;
		return `I ran out of fuel at ${this.odometer} miles!`;
	}
};
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

    A. Window/Global - 'this is placed globally, the value of 'this' will be the window/console object

  	B. Implicit - a function is called by a preceding dot, the object of the dot gets 'this'

  	C. New - 'new' whenever a constructor function is used, 'this' refers to the specific instance of the object       that is created & returned by the constructor function

  	D. Explicit - call or apply method is used, 'this' is explicitly defined
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
