/**
 * In JS everything is an object including Functions, Strings , arrays which are specialized type of objects.
 * JS follows prototype based inheritance. where objects inherit properties and methods from other objects hrough
 * prototypes.
 *
 * In JS prototype is a container for methods and properties.
 * When methods and properties are added to a prototype of any kind of object such as functions, arrays or string.
 * Then it will be shared accross all instances of that particular type of object.
 * Consider it as defining a mould for an object and all the objects created from that particular type(functions,
 * strings or arrays) will have the same properties and methods.
 *
 * So in conclusion every object types(functions, strings, arrays) have their own prototypes. The function or
 * properties which were defined in that particlar object prototype will be shared accross all instances of that
 * particular object type.
 */

/******************** Prototype in Objects **************************************

Object.prototype.greet = function () {
  console.log("Hello!! Greetings from Object prototype");
};

let myObj = {
  name: "Darshan",
  age: 25,
};

myObj.greet();
*/

/**
 * In the above example we are adding a greet method to the Object prototype. So all the objects created from
 * Object type will have the greet method.
 * Because JS will dynamically type the object declaration using Object type under the hood
 * hence it inerits those methods or properties which are defined
 * So when we call myObj.greet() it will call the greet method from the Object prototype.
 */

/***************** Prototypes in Constructor Functions********************** 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  //say hello will be added to the constructor function prototype
  console.log("Hello! my name is", this.name);
};

const person1 = new Person("Darshan", 25);
console.log(person1.name);
person1.sayHello();
*/

/*********************** prototypes in String**************************** 
String.prototype.printName = function () {
  console.log(`Hi! I'm from string prototype, My name is ${this}`);
};

let myString = "Darshan"; //when we define a primitive type JS will wrap it into a String Object under the hood.
//Hence it will inherit the properties and methods from the String prototype.
//When tis is used it refers to the current String object which was wrapped
// so that's how the value is accessed when we use this key word.
myString.printName();
*/

/*********************** prototypes in arrays ******************************** 
let a1 = [1, 2, 3, 4, 5, 6];
let a2 = [1, 2, 3, 4, 5, 6];
Array.prototype.sum = function () {
  let sum = 0;
  for (let i of this) {
    sum += i;
  }
  return sum;
};

console.log(a1.sum());
*/

/************************ Prototype inhertance ****************************** */
function Animal(name) {
  this.name = name;
  //   console.log("Name of Animal is " + this.name); //points to dog instance
}

Animal.prototype.speak = function () {
  console.log(`Inside Animal Prototype ${this.name}`);
};

function Dog(name) {
  this.name = name;
  //   console.log(this.name);
  Animal.call(this, name);
  //this refers to the current instance of Dog class which is created. And name is the parameter passed to the
  //Dog constructor function.
  //Animal.call(this, name); - this line is used to call the parent constructor function with the current instance.
  // It accepts params in order first would be the instance of the child object which needs to be mapped with the
  // parent object constructor and then followed by child object param which will be mapped to the parent object
  // or constructor function param, Note it won't map first param in call with parents param instead second param in
  //call wll be mapped to the parent's first param which will be the value of this keyword in the parent constructor.
  //If you don't pass the second param then it will be undefined in the parent constructor.
}

// Dog.prototype = Animal.prototype; //Do not use this for Inheriting the Animal prototype to Dog prototype beacause
// it will override the parent prototype as well which is not ideal
Dog.prototype = Object.create(Animal.prototype); //this is the proper way of inheriting the prototype
console.log(Dog.prototype.constructor); //This will point to the Animal constructor function because we have
//overridden the Dog prototype with Animal prototype. So we need to reassign the constructor property of
// Dog prototype

// Object.create() creates a new object with the specified prototype object and properties.
Dog.prototype.constructor = Dog; //This ensures constructor property of Dog.prototype correctly assigns back to Dog.
//By default constructor property should point back to the function which has created the object.
//Every JavaScript object that is created using a constructor function automatically gets a constructor property.
console.log(Dog.prototype.constructor);
Dog.prototype.speak = function () {
  console.log("Inside Dog prototype ", this.name);
};
let dog = new Dog("Tommy");
// console.log(dog.name);
dog.speak(); //we can create childs own prototype methods and properties on top of parents prototypes.

let animal = new Animal("Elephant");
animal.speak();

/**
 * Animal is the parent class with a method speak.
 * Dog is the child class, which inherits from Animal and overrides the same speak method.
 * Object.create(Animal.prototype) sets up the inheritance chain so that Dog objects can access Animal’s methods.
 * We have used Dog.prototype = Animal.prototype; which is not recommended because it will change the parent
 * prototype
 */
