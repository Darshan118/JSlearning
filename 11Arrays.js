let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));
console.log(arr);
let arr2 = arr;
console.log(arr === arr2);
let arr3 = arr.slice();
console.log(arr3 == arr);

arr.splice(1, 0, 25);
console.log(arr);
let arr4 = arr.splice();
console.log(arr4);

//Array constructor
let arrConst = new Array(1, 2, 3, 4, 5);
console.log(arrConst);
console.log(typeof arrConst, typeof arr); //Both are of type objects
//Array built-in methods
/*
 *push - to push element at the end of array.
 *pop - to remove element from the last index.
 *unshift - To add element at the first index of array.
 *shift - to remove element from the first index of array
 *slice(startIndex , endIndex) - slices from start index inclusive till end index exclusive.
 *splice(startIndex, noOfelementstoDelete , elementstoadd...).
 *arr.map((value , index)=>{}) - traverse through individual elements in array which executes one callback function.
 *arr.filter((value)=> {condition}) - filters the value if condition succeeds and stores it in another array.
 *array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
 *arr.sort(compareFunction);
 *array.find(function(currentValue, index, arr), thisValue)
 *array.indexof
 * */

//array reduce method
const a = [2, 4, 6];

function sum2(acc, x) {
  //acc is accumilator and x is current value.
  console.log("Accumilator: " + acc);
  console.log("Current value: " + x);
  return acc + x;
}

const sum = a.reduce(sum2, 0); //sum2 is the callback funtion with params(total , currentIndexValue) and 0 is the initialValue of sum

console.log(sum);

//array sort
const arrSort = [8, 20, 100, 2, 1, 214];
arrSort.sort();
console.log(arrSort); //[ 1, 100, 2, 20, 214, 8 ] because, compareFunction (Optional): A function that defines the sort order. If omitted, the array elements are sorted based on their string Unicode code points.
//Hence in order to sort the array the right method is to include comparefunction
console.log(
  arrSort.sort((a, b) => a - b) //sorts in ascending order
);

console.log(
  arrSort.sort((a, b) => b - a) //sorts in descending order
);

console.log(arrSort); //arr.sort() It does not create a new array but updates the original array.

//Array find method

const arrFind = [1, 2, 24, 54, 57, 90];
console.log(
  arrFind.find((value, index) => {
    return value > 25;
  })
);
//It returns the first element which satisfies the condition
//it doesn't alter original array
//If no elements matches it returns undefined.

//Array filter
const arrFilter = [12, 11, 23, 4234, 46, 89, 7, 9];
console.log(
  arrFilter.filter((value) => {
    //     if (value % 2 === 0) {
    //       return value;
    //     }
    return value % 2 === 0;
  })
);

const arrFilter2 = [
  1,
  20,
  "Darshan",
  "Shadow",
  "Himalayan",
  undefined,
  null,
  true,
];

console.log(
  arrFilter2.filter((value) => {
    return typeof value === "string";
  })
);


//Indexof 
const arrIndex = [1,2,23,51,11];
console.log(arrIndex.indexOf(51));
