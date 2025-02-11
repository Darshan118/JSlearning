/**
 * The Math object in JavaScript is a built-in object that provides mathematical constants and functions.
 * Unlike other objects, Math is not a constructor, so you cannot instantiate it. Instead, you access
 * its properties and methods directly.
 */

console.log(Math.PI);
console.log(Math.max(20, 1, 23, 12, 434));
console.log(Math.min(20, 1, 23, 12, 434));
console.log(Math.round(1.5)); //If the decimal value is equal to .5 or more in it's decimal place then round will ceil the value to next highest integer value and if the decimal value is less than .5 then it will floor down the value to next least integer value
console.log(Math.round(1.45));
console.log(Math.floor(1.8)); //rounds off to next lowest int value irrespective of decimal value whether it is greater than or even less than .5 is decimal place same rule for ceil but it rounds off to next highest int value
console.log(Math.ceil(1.0001));
console.log(Math.abs(-5.5)); //It is a modulous operator, converts -ve value to positive.
console.log(Math.pow(2, 3)); //2 raised to the power of 3
console.log(Math.trunc(4.9)); // 4 (Removes decimal part)
console.log(Math.sqrt(25)); // 5 (Square root of 25)

//To generate Random integer between 1 and 10
//Note : Math.random() Generates a random decimal between 0 (inclusive) and 1 (exclusive).
console.log(Math.floor(Math.random() * 10) + 1); //Adds 1, shifting the range from 0-9 to 1-10.

console.log(Math.sin(Math.PI / 2)); // 1 (Sine of 90 degrees) Pi is more like 360deg in trignometry terms
console.log(Math.cos(0)); // 1 (Cosine of 0 degrees)
console.log(Math.tan(Math.PI / 4)); // 1 (Tangent of 45 degrees)

//Logarithmic and Exponential Functions
console.log(Math.log(1)); // 0 (Natural logarithm of 1)
console.log(Math.log10(100)); // 2 (Log base 10 of 100)
console.log(Math.exp(1)); // 2.718 (e^1)

//Special constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045 (Euler's Number)
console.log(Math.SQRT2); // 1.4142135623730951 (Square root of 2)
