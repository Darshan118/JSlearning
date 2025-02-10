/**
 * -----------------Default Parameters---------------------
 * Default parameters allow us to specify the default value to the function parameters if no value is
 * provided when the function is called. This helps in preventing undefined values when arguments are missing.
 *
 */

function greet(message = "Hello!") {
  console.log(message);
}
greet(); //This will by default take the value of message as Hello when no param is passed to the function.
greet("Hi"); //When argument is provided it will override the default value
greet(null); //Null is something which is passed to defined the value is null explicitly it is delibrerately assigned.
greet(undefined); //Undefined is when some value is not assigned to a variable and it's not deliberate.

/**
 * If an argument is provided, it overrides the default value.
 * If an argument is not provided or is undefined then it will use default value.
 * Only undefined triggers the default value but not null which is considered a valid value.
 */

/**
 * ----------Multiple default parameters---------------------
 */
function multiply(a = 2, b = 5) {
  return a * b;
}

console.log(multiply()); //uses default value
console.log(multiply(5, 10)); //overrides default value
console.log(multiply(4)); //overrides only the first param and second will be using default value.

/**
 * --------Default parameters with expressions-------------
 */
function power(base, exponent = base) {
  //param as expressions: assigning 'base' to second param when sencond param is missing in function call.
  return Math.pow(base, exponent);
}

console.log(power(2)); // Output: 4 (2^2)
console.log(power(2, 3)); // Output: 8 (2^3)

/**
 * -----------Function call as default value-----------
 */
function defaultValue() {
  return 10;
}
function mul(a = 5, b = defaultValue()) {
  return a * b;
}
console.log(mul());
console.log(mul(10, 20));
console.log(mul(6));
