// For loop
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}

// While loop
let j = 0;
while (j < 5) {
  console.log("While loop iteration:", j);
  j++;
}

// Do-while loop
let k = 0;
do {
  console.log("Do-while loop iteration:", k);
  k++;
} while (k < 5);

// For-in loop (used for iterating over object properties)
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log("For-in loop key:", key, "value:", obj[key]);
}

// For-of loop (used for iterating over iterable objects like arrays)
const arr = [10, 20, 30, 40, 50];
arr.name = "Darshan";
for (let value of arr) {
  console.log("For-of loop value:", value);
}

// forEach loop (used for iterating over array elements) //traverses through only numbered index/properties of array and ignores any other kinds just like a traditional for loop does.
arr.forEach((value, index) => {
  console.log("forEach loop index:", index, "value:", value);
});

//For-in loop with array by adding a new property to array , Hence it is not recommended to use for-in loop with arrays. because it doesn't loops through the array index instead it loops through the properties of array.\

for (let i in arr) {
  console.log("For-in loop index:", i, "value:", arr[i]);
}

// If we run for in and for of loop on an string, then for in will loop through properties(index values) of string check value of i printed for for in and for of. whereas, for of will loop through the characters of string.
let fname = "Darshan";
for (let i in fname) {
  console.log("Index: " + i +" value: " +fname[i]);
}

for (let i of fname) {
  console.log("Value: " + i);
}