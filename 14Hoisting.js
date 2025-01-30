/**
 * var in js is used for hoisting.
 * hoisiting is a behaviour where variable(only for the ones defined using var) and functions are moved to the
 * top of their containing scope regardless of where they are defined.
 * Key points:
 * a) Only variable declaration is hoisted not the initialized value.
 * b) function declarations are completely hoisted.
 * c) Only varaibles declared with 'var' are hoisted but not 'let' and 'const'.
 *
 * Best practices:
 * Use let and const instead of var to avoid unexpected behavior.
 * Declare variables and functions at the top of their scope.
 * Avoid relying on hoisting for code readability.
 */

/**
 * In this example below, even though the variable x is declared after the console.log statement,
 * it doesn't throw an error because the declaration is hoisted to the top of the scope. However,
 * the value is undefined because the initialization (x = 5) is not hoisted.
 */
console.log(x); // Outputs: undefined
var x = 5;

/**
 * In the below example we can see that we can access entire function since function is hoisted entirely.
 * also the variables defined inside that function can be accessed by calling that function even though it is
 * let and const. But we cannot access those variables outside the function since they are local to that function.
 */
hoisting();

function hoisting() {
  let y = 10;
  console.log("This is hoisted function " + y);
}

/**
 * However, declaring an function using an expression will not be hoisted even if the expression is declared
 * using var, let or const.
 */

//checkz();
var checkz = function () {
  console.log("This is function expression initialized using var");
};
checkz();
console.log(typeof checkz); //function

/**
 * But when we try to access just the expression which was used to store the function then it will give undefined
 * only when we use var just like any other variable, since same rule is applicable for let and const
 * they cannot be used for hoisting.
 */
console.log("This is function expression variable: " + a); //accessing a variable rather not calling a function which will be a(); hence when var is declared
//and when it is accessed at top level then it will be undefined
var a = function () {
  console.log("Check for Hoisting");
};

/**
 * Classes are also not hoisted
 */
//cannot create an object before the class initialization, Hence
//classes are not hoisted!
//const person = new Human("Darshan", 25);
class Human {
  constructor(name, age) {
    //constructor is called when object/instance to the class is created!
    (this.name = name), (this.age = age);
  }
  greet() {
    console.log(`Hi my name is ${this.name} and I'm ${this.age} years old!`);
  }
}

const person1 = new Human("Darshan", 25);
person1.greet();

/**Temportal Dead Zone
 * We know that we cannot access the expressions or variables defied with let and const before the declaration.
 * Since they are not hoisted. the zone which are written before defiing the non-hoisted(let,const) expressions or 
 * variables are called Temporal Dead Zone!
 */

// console.log(tdz);
// console.log('Hello!');
// console.log('This is Darshan!');
const tdz = 10;
console.log('temporal Dead Zone example!')
/**
 * So the passage of code which are written before the initialization of vairable or function exression (from 
 * line 84 till 87) using let or const which cannot be hoisted is termed as Temporal Dead Zone.  
 * */