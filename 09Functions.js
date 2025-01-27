/**
 * A function can be called before it's declaration with the hel of concept called Hoisting mechanism in JS
 * Hoisting is a mechanism in JS where variables and function declarations are moved to the top of their
 * containing scope.
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
  console.log("Hello World");
};

//Arrow function
//They are short annanymous functions and are not hoisted. Since we are assigning it to a variable, it is a function expression.
const arrowFunction = () => {
  console.log("Hello World");
};

//Callback function
//A callback function is a function that is passed as an argument to another function. They are extensivelu used in asynchronous programming.

const callbackFunction = function (callbackFunction) { //Here callbackFunction is a function argument just like any other argument. but in this case it's a function argument that will be passed in the function call.
  //Some async operation 
  setTimeout(() => {
    const data = "Data fetched Sucessfully!";
    callbackFunction(data);
  }, 2000);
};

const processData = (data) => { //data is defined and fetched in the callbackFunction and passed to processData function.
  console.log("Processing the data: ", data);
};

callbackFunction(processData);


//Returning funtions 

function multiplier(factor){ //factor is just a factor
    return function(number){
        return number * factor;
    }
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

js
Copy
Edit
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
The multiplier function takes a parameter called factor.
It returns an anonymous function (a function without a name) that takes another parameter number.
The returned function multiplies number by factor and returns the result.
Creating a Function (double)

js
Copy
Edit
const double = multiplier(2);
The multiplier function is called with 2 as the argument, meaning factor now holds the value 2.
It returns the inner function:
js
Copy
Edit
function(number) {
    return number * 2;
}
This returned function is stored in the constant double.
Calling the Function (double(5))

js
Copy
Edit
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