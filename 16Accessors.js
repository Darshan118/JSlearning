/**
 * -------------JS Accessors(getters and setters)-----------------
 * Getters and setters provide a way to encapsulate the implementation details of object properties, while still
 * allowing external code to access and modify it's value.
 * they are defined using get and set keyword
 * when we are using getter and setters we are essentially definig a method that is associated with the property
 * of that object
 */

/**
 * If you simply create a property like this.brand = brand, you can access and modify it directly,
 * but using getters and setters allows you to:
 * ✅ Control how a property is accessed and modified.
 * ✅ Add validation or transformations before setting a value.
 * ✅ Make computed properties that behave like normal ones.
 * ✅ Encapsulate private properties (conventionally using _propertyName)
 */
class Person {
  constructor(name) {
    console.log("Inside constructor...");
    this._name = name; //developers use _propertyName as a convention to indicate that a property
    // should be treated as private and should not be accessed directly outside the class.
  }
  get name() {
    console.log("Getting your name...");
    return this._name;
  }
  set name(newName) {
    //Hence getters and setters allow us to add validation or transformations
    // before setting the value
    if (newName.length >= 3) {
      console.log("Setting your name to " + newName);
      return (this._name = newName);
    } else {
      console.log("Can't set name. Name is too short!");
      return;
    }
  }
}

const person1 = new Person("Darshan");
console.log(person1.name);
person1.name = "Shadow";
console.log(person1.name);

/**
 * 🧐 What’s Happening Here?
 * Getter (get name())
 * When console.log(person1.name) is called, the get method executes instead of directly accessing _name.
 * We can add custom logic, like logging.
 * Setter (set name(newname))
 * when person1.name = "Shadow" is executed, the set method runs instead of directly modifying _name.
 * This allows validation (e.g., rejecting names if it's shorter than 3 characters).
 * Without a setter, myCar.brand = newBrand would directly overwrite _brand without any validation.
 */

/**
 * ---making read-only peroperty using get-------------
 */
console.log("making read-only peroperty using get");
class Car {
  constructor(brand) {
    this._brand = brand;
  }
  get brand() {
    //make sure the function name used for getters and setters exactly match the property name(case sensitive)
    //else it will be treated as some other method.
    console.log("Fetching model name...");
    return this._brand;
  }
}
const myCar = new Car("Toyota");
console.log(myCar.brand); // Toyota
myCar.brand = "Honda"; // ❌ This will not update the brand as it is read only. since there's no setter method,
//hence, by using getters and setters we now have more control over the properties in class.
console.log(myCar.brand); // Still "Toyota"

/**
 * ---------using getters and setters for computed properties---------------
 * Getters are useful for computed values that don't need to be stored separately in a property.
 */
console.log("using getters and setters for computed properties");

class Rectangle {
  constructor(length, width) {
    this._length = length;
    this._width = width;
  }
  get area() {
    return this._length * this._width;
  }
}

const rect = new Rectangle(10, 50);
console.log(rect.area);
console.log(typeof rect.area); //area is not a function access using object.name!
