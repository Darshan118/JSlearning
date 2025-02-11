/**
 * Access Modifiers
 * Unlike other programming languages like Java , C#, C++ etc..
 * JS doesn't have the built-in keywords like public, private and protected for defining access modifiers.
 * It can be simulated using following techniques.
 */

/**
 * -------------------Public properties(Default behaviour)-------------------------
 * By default all the properties in JS are public and they can be accessed and modified from outside the class.
 */

class Car {
  constructor(brand) {
    this.brand = brand; //public property.
  }
}

let myCar = new Car("Toyota"); // ✅ Toyota (Accessible)
console.log(myCar);
myCar.brand = "Honda"; // ✅ Modified
console.log(myCar);
/**Public variables/ peroperties are accessible everywhere. Inside and outside the the class. */

/**
 * --------Private Properties(#property - ES2020+)
 * Members marked as private(using # as prefix before property or behaviors/methods) can be accessed with the
 * class but not outside the class where they are defined.
 * Private members are marked with # symbol.
 * Private members are inaccessible to external code.
 * Private members provide encapsulation and ensure that internal logics remain hidden.
 */
class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
  #greet() {
    console.log("Hello " + this.#name);
  }
  greetings() {
    this.#greet();
  }
}
let p1 = new Person("Darshan!");
p1.greetings();

// console.log(p1.#name); throws error since name is a private property and it cannot be accessed outside class.
// p1.greet(); throws error since greet is a private method and it can't be accessed outside class.

/**
 * Public properties using _ (Old Convention : NOT TRULY PRIVATE)
 * Before # developers used _ as a convention to indicate private properties. However, it is not truly private,
 * it was just a signal for developers.
 */

class Employee {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
}

const emp1 = new Employee("Darshan");
console.log(emp1._name); //This is still accessible it's trult not private rather just an indication for dev's

/**
 * Getters and setters for controlled access
 * Getters and setters help control access over properties allowing validations on values passed.
 */
class People {
  #fname;
  constructor(fname) {
    this.#fname = fname;
  }

  get fname() {
    return this.#fname;
  }

  set fname(newName) {
    if (newName.length < 3) {
      console.log("Name is too Short!⚠️");
      return;
    }
    this.#fname = newName;
  }
}

let people1 = new People("Darshan"); //get's into constructor function and assign the value right away
console.log(people1.fname);
people1.fname = "Da"; //Validation fails here hence da can't be assigned to fname
console.log(people1.fname);
people1.fname = "Shadow"; //Validation passes, hence Shadow get's assigned to fname.
console.log(people1.fname);

/**
 * Protected Properties(using _property convention).
 * Just like older convention of private field which is using _. JS doesn't yet suport protected properties
 * just like Java, C# but we can simulate using _ indicating it is intended to be only used in subclass and not
 * publically. However, we can still access them publically but _ is just used as an indication here saying
 * proerty is protected and shouldn't be accessed publically.
 */

class Parent {
  constructor(name) {
    this._name = name;
  }

  gshowname() {
    console.log("My name is " + this._name);
  }
}

class Child extends Parent {
  displayname() {
    console.log("The name defined in parent class is " + this._name);
  }
}

const child = new Child("John"); //this by default parent class constructor before it's own constructor.
child.displayname();
console.log(child._name); //Still accessible publicly but it's not recommended rather it must be avoided.

/**
 * Combined Public, Private and Protected fields.
 */

class Combined {
  #salary; //Private
  constructor(name, age, salary) {
    this.name = name; //public
    this._age = age; //protected by convention
    this.#salary = salary; //private
  }
  #getSalary() {
    return this.#salary; //Accessible within class and not outside
  }
  showSalary() {
    console.log("Salary of " + this.name + " is " + this.#getSalary());
  }
}

let emp = new Combined("Himalayan ", 25, 50000);
console.log(emp.name);
console.log(emp._age); //not really protected it's just an convention. And protected has significance in
//parent child classes since properties of parent can be accessed in child but not publicly this way.
emp.showSalary(); //accessing private field using method

// Access Type	            Syntax	                Accessible Outside Class?	Accessible in Subclasses?
// Public	                this.name	            ✅ Yes	                   ✅ Yes
// Protected (Convention)	this._name	            ⚠️ Yes (but discouraged)	✅ Yes
// Private (ES2020)	        this.#name	            ❌ No	                   ❌ No
// Getter & Setter	        get name(), set name()	✅ Yes (Controlled)	       ✅ Yes


/**
 * Which One Should You Use?
 * ✅ Use public properties for normal data that doesn't need restriction.
 * ✅ Use #private properties if you need strict privacy (ES2020+).
 * ✅ Use _protected convention for values that should be accessed only in subclasses.
 * ✅ Use getters/setters when you need controlled access (e.g., validation).
 */