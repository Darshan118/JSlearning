/**
 * A function is called as First class citizen because it can be used everywhere like 
 * as an argument to another function(callback functions).
 * can retuen the function in the return statements(returning functions)
 * can be used as array elements as well as property in a object. 
 * can be assigned to a variable as well.(function expressions)
 */

/**
 * A function can be called before it's declaration with the help of concept called Hoisting mechanism in JS
 * Hoisting is a mechanism in JS where variables and function declarations are moved to the top of their
 * containing scope.
 * let and const: With the introduction of let and const in ES6, you have more control over variable hoisting. These keywords do not hoist in the same way as var. They are hoisted to the top of their scope, but they are not initialized until their declaration line. Attempting to use them before declaration results in a ReferenceError.
 * Use let and const: These keywords provide better scoping and prevent unintended hoisting behavior. They are block-scoped, which means they are only accessible within the block they are defined in.
 */
//Function declaration
//Function declaration is done using function key word and it can be called before it's declaration.(meaning
//it uses hoisting mechanism)

funDeclaration();
//funExpression(); //Throws errror since it is an expression and it is not hoisted.
//arrowFunction(); //Throws errror since it is an expression and it is not hoisted.

function funDeclaration() {
  console.log("Hello World");
}

//Function expression
//Function expression is defined function as a part of expression, typically by assigning it to a variable.
//It is not hoisted and cannot be called before it's declaration.
const funExpression = function () {
  //it's an anonymous function and it is assigned to a variable named funexpression.
  console.log("Hello World");
};

//Arrow function
//Arrow functions are new and short way to define anonymous functions. Everthing is same as function expression but in case of arrow function we do not use function keyword.
//They are short annanymous functions and are not hoisted. Since we are assigning it to a let/const variable, it is a function expression.
const arrowFunction = () => {
  console.log("Hello World");
};

//Callback function
//A callback function is a function that is passed as an argument to another function. They are extensivelu used in asynchronous programming.

const callbackFunction = function (callback) {
  //Here callback is a function argument(callback is't a keyword in this case) just like any other argument. but in this case it's a function argument that will be passed in the function call.
  //Some async operation
  setTimeout(() => {
    const data = "Data fetched Sucessfully!";
    callback(data);
  }, 2000);
};

const processData = (data) => {
  //data is defined and fetched in the callbackFunction and passed to processData function.
  console.log("Processing the data: ", data);
};

callbackFunction(processData);

//Returning funtions

function multiplier(factor) {
  //factor is just a factor variable
  return function (number) {
    //number is an argument passed to the inner function.
    return number * factor;
  };
}

const double = multiplier(2); //factor is 2 and Here double variable stores the inner function that is returned by the multiplier function.
/**
 * it's like double = function(number){ return number * 2;} //here 2 is the variable passed to the multiplier function in line 56.
 */

console.log(double(5)); //Output: 10
/**
 * This code demonstrates higher-order functions and closures in JavaScript.

Explanation:
Function Definition (multiplier)

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
The multiplier function takes a parameter called factor.
It returns an anonymous function (a function without a name) that takes another parameter number.
The returned function multiplies number by factor and returns the result.
Creating a Function (double)

const double = multiplier(2);
The multiplier function is called with 2 as the argument, meaning factor now holds the value 2.
It returns the inner function:

function(number) {
    return number * 2;
}
This returned function is stored in the constant double.
Calling the Function (double(5))

console.log(double(5)); // Output: 10
Here, double(5) means calling the returned function with number = 5.
Inside the function, 5 * 2 is calculated, resulting in 10.
The result is printed to the console.

Key Concepts Used:
Closure
The inner function "remembers" the factor variable (value 2) even after multiplier has finished execution.
This happens because JavaScript functions retain access to variables in their lexical (outer) scope.
Higher-Order Function

multiplier is a higher-order function because it returns another function.
Partial Application

By passing 2 first, the function becomes specialized for doubling any number.
*/

//----------------------Lexical Scoping----------------------

function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable from outer scope
  }

  innerFunction();
}

outerFunction();
/*
In JavaScript, lexical scoping (also known as static scoping) defines how variable names are resolved within nested functions. It means that the scope of a variable is determined by where it is declared in the source code, not where it is called. 
Here's how it works:
Scope: A scope is a region of code where variables are accessible.
Lexical: The word "lexical" refers to the structure of the code, meaning the scope of a variable is determined by its position in the code.
Key points about lexical scoping:
Inner functions have access to variables declared in their outer functions.
The scope chain is established when a function is created.
Variables in the global scope are accessible from anywhere in the code. 

Explanation:
innerFunction can access outerVariable because it is declared in the scope of outerFunction, which is the parent scope of innerFunction.
This relationship is determined when innerFunction is created, not when it is called.

Benefits of Lexical Scoping:
Predictability:
It makes code easier to reason about because you can determine the scope of a variable by looking at where it is declared in the code.
Encapsulation:
It helps to encapsulate variables within their respective scopes, preventing unintended access or modification from outside the scope.
Closures:
Lexical scoping enables the creation of closures, which are functions that "remember" their lexical environment even when executed outside of it.
 */

/**
 * Anonymous functions:
 * An anonymous function is simply a function that does not have a name. Unlike named functions, which are declared with a name for easy reference, anonymous functions are usually created for specific tasks and are often assigned to variables or used as arguments for other functions.

In JavaScript, you normally use the function keyword followed by a name to declare a function. However, in an anonymous function, the name is omitted. These functions are often used in situations where you don’t need to reuse the function outside its immediate context.
syntax: 
function() {
    // Function Body
 }

 We may also declare an anonymous function using the arrow function technique which is shown below:
The below example is called IIFE(Immediately Invoked Function Expression)
( () => {
    // Function Body...
} )();
 */
setTimeout(function () {
  console.log("Anonymous function passed as callback function to setTimeout!");
}, 2000);

(function () {
  console.log("IIFE(Immediately Invoked Function Expression)!");
})();

(() => {
  console.log("IIFE using arrow function!");
})();

//Array of function
let arr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
  function (a, b) {
    return a * b;
  },
];

let sum = arr[0];
let sub = arr[1];
let mul = arr[2];

console.log(sum(10,20));
console.log(sub(20,5));
console.log(mul(12,2));