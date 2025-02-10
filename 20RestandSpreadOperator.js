/**
 * --------------------Rest Operator---------------------
 * It is represented by 3 dots(...). When used in function params list it catches any extra argument passed
 * to the function and packs into an array which can then be accessed later.
 * This allows the functions to handle different number of arguments without explicitely defining them.
 *
 * Think of this like rest is packing a spread values which generally happens in function params,
 * spread is spreading the values which are packed as array or objects.
 * They are both opposites.
 */

function abc(a, ...rest) {
  return rest;
}
console.log(abc(10, 1, 2, 3, 4, 5));

//Rest in funcion parameters.
function printNames(first, second, ...rest) {
  console.log("First: ", first);
  console.log("Second: ", second);
  console.log("Rest: ", rest); //rest of the names are packed as array using rest parameter.
}
printNames("Darshan", "Shantaveer", "Mallikarjun", "Shadow", "Himalayan");
printNames("Darshan", "Shadow"); //if the value is not present in rest parameter then it'll be an empty array.
printNames("Darshan"); //other values will be undefined and rest param will be empty aray.

//Rest in destructuring - Arrays
const a = [1, 2, 3, 4, 5];
const [a1, a2, ...aspread] = a;
console.log("a1:" + a1, "a2:" + a2, "aspread:" + aspread);

//Rest in destructuring - Objects
const user = { id: 1, fname: "Darshan", age: 25, country: "India" };
const { fname, ...details } = user; //make sure the prop key match while destructuring the obj params else it will create a new property which will be undefined upon printing.
console.log("Name:" + fname, " ", "details: ", details);

/**
 * ------------------Spread Operator----------------------------
 * This works by same 3 dots(...) by taking all elements in an array and then spreading them out to
 * individual elements.
 * It's like taking a box filled with different items and them spreading them on table individually
 * making easier to work with individual items rather than dealing with entire array.
 */
//Spread in arrays : this allows to create coppies of arrays or merge arrays
const sa1 = [1, 2, 3];
const sa2 = [4, 5, 6];
const sa3 = [...sa1, ...sa2]; //combining arrays into one.
console.log("Spread sa3: ", sa3);
console.log([sa1, sa2]); //this is not spread instead it's an array containing 2 array elemets sa1 and sa2 within it
console.log([...sa1, sa2]); //Here only sa1 is spread and sa2 is an array element

//copying an array without modifying original
const arrOriginal = [1, 2, 3, 4, 5];
const arrCopy = [...arrOriginal];
console.log("Copy array: ", arrCopy);
arrCopy.push("Darshan!!");
console.log("Copy array after modification: ", arrCopy);
console.log("Original array after modification: ", arrOriginal);

//spread operator in objects
const objSpread = { fname: "Darshan", age: 25 };
const objUpdated = { ...objSpread, address: "India" }; //copying or merging content of one object into another also adding additional properties.
console.log(objSpread);
console.log(objUpdated);

//spread in function
const sum = (a, b, c) => {
  return a + b + c;
};

const nums = [1, 2, 3, 4];
console.log("Sum is: ", sum(...nums));

/**
 *  Key Differences Between Rest and Spread
 * Feature	      Spread (...)	                      Rest (...)
 * Purpose	      Expands elements	                  Gathers elements
 * Works with	    Arrays, Objects, Function Calls.	  Function Parameters, Arrays, Objects
 * Usage	        const arr2 = [...arr1]	            const [first, ...rest] = arr
 * Example	      sum(...arr)	                        function sum(...nums) {}
 */

/**
 * Common Mistakes & Things to Watch Out For
 * ❌ Using Spread Instead of Rest
 * function wrongFunction(...args) {
 *   console.log(...args); // Works fine
 * }
 *   wrongFunction(1, 2, 3); // 1 2 3
 *
 *
 * But using spread directly inside function parameters will cause an error:
 * function incorrect(...rest, last) { } // ❌ SyntaxError
 * ✅ Fix: Rest must be the last parameter:
 * function correct(first, ...rest) { } ✅
 *
 *
 * ❌ Mixing Spread and Rest Incorrectly
 * const numbers = [1, 2, 3];
 * const [first, second, ...rest, last] = numbers; // ❌ SyntaxError
 * ✅ Fix: The rest parameter must always be the last:
 * const [first, second, ...rest] = numbers; ✅
 */
