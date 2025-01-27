// Number methods
let num = 123.456;
console.log(num.toFixed(2)); // "123.46" o/p type is string - to round off to  number of decimal placesmentioned in parameter
console.log(num.toString()); // "123.456"
console.log(Number.isInteger(num)); // false
console.log(Number.parseInt(num)); // 123
console.log(Number.parseFloat("123.456")); // 123.456

// String methods
let str = "Hello, World!"; //string
let strArr = ["Hello", "World!"]; //string array
console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.includes("World")); // true
console.log(str.indexOf("World")); // 7
console.log(str.substring(0, 5)); // "Hello"
console.log(str.split(", ")); // ["Hello", "World!"] - splits accross , and white space.
console.log(strArr.join(" ")); // "Hello, World!" - joins array to one single string with param specified. (space in this case)

// Array methods
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
console.log(arr.push(6)); // 6 (new length of array) - push is adding element at the last index of an array
console.log(arr.pop()); // 6 (removed element) - removing element at the last index of an array
console.log(arr.shift()); // 1 (removed element) - removing elemnt at the first index of array
console.log(arr.unshift(0)); // 5 (new length of array) - adding element at the first index of an array
console.log(arr.indexOf(3)); // 2
console.log(arr.includes(3)); // true
console.log(arr.join(", ")); // "0, 2, 3, 4, 5"
//currently arr contains 0, 2, 3, 4, 5
console.log("Slice " + arr.slice(1, 3)); // [2, 3] -slicing - returns array inclusive first index and exclusive last index it doesn;t modify the original array. Just creates a shallow copy of the array.
console.log("Splice " + arr.splice(1, 2)); // [2, 3] -splicing - removes elements from first index(inclusive), second param is delete count(How many elements to be deleted) and The third index specify which element needs to be added to the array. Splicing modifies the original array.]
//currently array contains 0, 4, 5 since splice modifies existing array.
arr.splice(1, 0, 10); //If we directly log this arr.splice(1,0,10) then it'll print empty array since no elememt was removed from array
console.log(arr) // at 1st index remove zero elements but add 10 at first index, so that rest of them shift to right.
console.log(arr.map((x) => x * 2)); // [0,20 , 8, 10]
console.log(arr.filter((x) => x > 2)); // [10,4, 5]
console.log(arr.reduce((acc, x) => acc + x, 0)); // 19

// Object methods
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
console.log(Object.assign({}, obj, { d: 4 })); // { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.freeze(obj)); // { a: 1, b: 2, c: 3 } (object is now immutable)
console.log(Object.seal(obj)); // { a: 1, b: 2, c: 3 } (object properties cannot be added or removed)
