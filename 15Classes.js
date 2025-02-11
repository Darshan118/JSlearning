/**
 * Classes in JS are the blueprints for creating objects introduced in ES6.
 * They encapsulate Data(properties) and Behaviours(methods or functions) enabling usage of OOP concepts.
 * It is created using key word called 'class'
 */

//Declaring and accessing a simple class.

class Person {
  name = "Darshan"; //name, age and location are data of class
  age = 25;
  location = "Bangalore";
  office() {
    //office method is termed behaviour of class
    console.log("My office is location is " + this.location);
  }
}

//creating new instance of class.
let person1 = new Person();
//can access class data and behaviour using dot notation
console.log(person1.name);
console.log(person1.age);
person1.office();

//Class can also be called using class expression just like any other functions.
const Car = class {
  constructor(brand, model) {
    this.brand = brand; //this keyword points to the object instance which is created during that instance in this case it is car1. it's more like car1.brand and car1.model in case of that object instance and so on.
    this.model = model;
  }
};
let car1 = new Car("Hyundai", "Creta");
console.log("Brand name: " + car1.brand + ", Model name: " + car1.model);
//Constructor method is automatically called when the instance of the class is created.

/**
 * ----------------------Inheritance------------------
 * We can create a subclass that inerits the data and behaviour from parent class
 */

//Below example inherits from Person class

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); //Super calls the parent class constructor
    this.grade = grade;
  }
  details()
  {
    console.log(`${this.name} is studying in grade ${this.grade}.`)
  }
}

let student1 = new Student('Darshan' , 18 , 12); //As soon as we define an instance to the class it will call constructor class by default and pass all the params to the constructor class 
/**
 * When you create a new instance of an inherited class, the parent class constructor is called first (super())
 * before the child class constructor.
 * 
 * Order of Execution:
 * Memory allocation for the child class instance(student1 in this case)
 * Parent class constructor (super()) is executed first.
 * Child class constructor is executed after super().
 * 
 * Key Points:
 * When a class extends another class, the child class must call super() before using this.
 * If super() is not called inside the child constructor, JavaScript will throw an error.
 */


