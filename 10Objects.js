let obj1 = [1, 2, 3];
let obj2 = [1, 2, 3];

console.log(obj1 === obj2); //false because they both point at different reference at memory locations. Also obj1 and obj2 are stored in stack memory and the values are stored in heap memory. So the reference of obj1 and obj2 are different.
let obj3 = obj1;
console.log(obj1 === obj3); //true because obj3 is pointing to the same reference as obj1

let person = {
  name: "Darshan",
  age: 25,
  isEligible: true,
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
  greet: function () {
    console.log("Hello there!");
  },
};
console.log(person);
//adding prop to object
person.email = "xyz@123.com";
//deleting property in object
delete person.isEligible;
//modifying property in object
person.age = 26;

console.log(person);
//caling method defined in object
person.greet();


//properties can be accessed using both dot notation and bracket notation
console.log(person.name);
console.log(person["name"]);
console.log(person.address.city);
console.log(person["address"]["city"]);
person['greet'](); //calling a method using bracket notation
person['isEmployee'] = true; //adding a property using bracket notation
console.log(person)