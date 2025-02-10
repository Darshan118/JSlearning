/**
 * Destructuring allows us to extract values from arrays or object properties from objects and
 * assign them to variables in a concise way.
 *
 * consider destructuring as separating properties and array element into individual variable. Rather than
 * accessing it as array element(arr[0], arr[1]) and so on.. and obj.property name in case of objects.
 */

/**
 * ---------------------------Array Destructuring--------------------------------
 */

//basic syntax
const [a, b] = [10, 20];
console.log(a, " ", b);

const arr1 = [1, 2, 3, 4, 5];
const [a1, b1, c1, d1, e1] = arr1;
console.log(a1, b1, c1, d1, e1);

//skiping elements
const arr2 = [1, 2, 3, 4, 5];
const [a2, , , b2] = arr2; //skipped 2 and 3.
console.log("Skipping elements: ", a2, b2);

//use rest operator
const arr3 = [1, 2, 3, 4];
const [a3, ...restOperator] = arr3;
console.log("a3 ", a3);
console.log("Rest Operator ", restOperator);

//Default values
const [p = 10, q = 20] = [40, 50, 70];
console.log("p: ", p, "q: ", q);

//swapping values
let swapa = 1,
  swapb = 2;
console.log("A before swap: ", swapa, "B before swap: ", swapb);
[swapa, swapb] = [swapb, swapa];
console.log("A after swap: ", swapa, "B after swap: ", swapb);

/**
 * ---------------------------Object Destructuring--------------------------------
 */
const { fname, age } = { fname: "Darshan", age: 25 }; //property names while destructuring must match else it will be treated as new property.
console.log(fname, " ", age);

//Using alias to a property name (renaming property after destructuring)
const p1 = { namep1: "Shadow", agep1: 25 };
const { namep1: someName, agep1: someage } = p1;
console.log("Name after alias:", someName, " Age after alias:", someage);

//default values
const car = { brand: "Toyota", color: "red" };
const { brand, model = "Innova", color } = car;
console.log(brand, model, color);

//Nested destructuring

const emp = {
  empName: "Darshan",
  empAddress: {
    empCode: 123,
    empLocation: "Bangalore",
  },
};

const {
  empName,
  empAddress: { empCode, empLocation }, //destructuring one on one with object properties
} = emp;

console.log(
  "Emp Name:",
  empName,
  "Emp code:",
  empCode,
  "Emp Location:",
  empLocation
);

//Mixed destructuring (Array + Object)
const userData = {
  id: 1,
  profile: {
    profileName: "Shadow",
    hobbies: ["Badminton", "Cricket"],
  },
};

const {
  id,
  profile: {
    profileName,
    hobbies: [hobbie1, hobbie2],
  },
} = userData;

console.log(
  "ID:",
  id,
  "Profile Name:",
  profileName,
  "Hobbie 1:",
  hobbie1,
  "Hobbie 2:",
  hobbie2
);

//Function parameter destructuring
function destFun({ name2, age2 }) {
  console.log(name2, age2);
}

const user2 = { name2: "Darshan", age2: 25 };
destFun(user2);

//Default values in function parameters
const defFunction = ({ name3 = "Shadow" } = {}) => {
  //The reason = is used instead of : for default values in object destructuring is due to the difference between object property assignment and variable assignment.
  console.log(name3);
};

defFunction({ name3: "Darshan" }); //if param is passed then it is mapped with param value
defFunction(); //when no param is passed then it will use the default value
defFunction("Himalayan"); //when a different property structure is passed then it uses the default value
defFunction(undefined); //When undefined value is passed then it will use the default param value
// defFunction(null);

/**
 ******Ambiguities & things to watchout for while destructuring********
 */

// 1 - Destructuring undefined or null : this throws error since we cant destructure undefined or null

// const { x } = null; // ❌ TypeError
// const { y } = undefined; // ❌ TypeError

//use default value instead
const { x1 = 1 } = undefined || {};
console.log(x1);

// 2 - Confusion with Default Values in Objects
const obj2 = { obj2A: undefined }; //if the prop value is other than undefined then it'll destructure to that value. It's the same rule as the default value. If obj2A was assigned with null then it will be null since it is a deliberate instantiation.
const { obj2A = 5 } = obj2;
console.log(obj2A);

