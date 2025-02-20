/**
 * Order of execution -
 * 1 - Sync operations
 * 2 - Async - Microtask like Promises ,MutationObserver, queueMicrotask
 * 3 - Async - Macrotask Queue like setTimeout , setInterval, I/O operations , setImmediate(Node.js only)
 */

/* ******************* Q1 - Microtask Queue & Execution Order **********************
console.log("Start");

Promise.resolve().then(() => console.log("Promise 1"));

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 2");
    return Promise.resolve();
  })
  .then(() => console.log("Promise 3"));

console.log("End");
//op: start , end , promise 1 , promise2 , promise 3, timeout
*/

/*********************** Q2 ***********************************
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Something went wrong!"), 1000);
});

myPromise
  .then((val) => console.log("Success:", val))
  .catch((err) => console.log("Error:", err))
  .finally(() => console.log("Cleanup Done!"));
//op:Error: Something went wrong! Cleanup Done!
*/

/*
const p1 = Promise.resolve("P1 resolved!");
const p2 = Promise.reject("P2 rejected!");
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("P3 resolved!"), 2000)
);

Promise.all([p1, p2, p3])
  .then((values) => console.log("All Resolved:", values))
  .catch((error) => console.log("Promise.all Error:", error));

Promise.allSettled([p1, p2, p3]).then((results) =>
  console.log("All Settled:", results)
);
*/

/**
 * OP: Promise.all Error: P2 rejected!
 * All Settled: [{status: 'fulfilled' , value: 'P1 resoved!'},
 *               {status: 'rejected' , value: 'P2 rejected!'} ,
 *               {status: 'fulfilled' , value:'P3 resolved!'
 *              }]
 */

/**************** Q3 - Chaining Promises ***************************************

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Step 1"), 1000);
});

myPromise
  .then((val) => {
    console.log(val);
    return "Step 2"; //thhis is the resolved value for another chained promise
    //  * When you return a non-promise value (like "Step 2") inside a .then(), 
    //  * JavaScript automatically wraps it in a resolved promise. This allows the next .then()
    //  * in the chain to receive it as a resolved value. 
    //  * it is equivalent to writing  'return Promise.resolve("Step 2");'
    //  * It’s a convenient way to pass values down the chain without manually wrapping them in a Promise.resolve().
    //  * 
  })
  .then((val) => {
    console.log(val);
    return new Promise((resolve) => setTimeout(() => resolve("Step 3"), 1000));
  })
  .then((val) => console.log(val));

  //op: step 1(after 1 second), Step 2(Immediately) , Step 3(after 1 second) 
  */

/**************** Q4 - Error Handling in Promises ***************** 
const myPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

myPromise
  .then((val) => console.log("Success:", val))
  .catch((err) => {
    console.log("Caught Error:", err);
    return "Recovered!"; //it's a promise reolve wrapped automatically bby JS.
  })
  .then((val) => console.log("Next Then:", val))
  .catch((err) => console.log("Final Catch:", err));

//OP: Caught Error: Something went wrong! , Next Then: Recovered!
*/

/**************** Q5 - Mixing Promise.resolve() & setTimeout() *************************
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

Promise.resolve().then(() => {
  console.log("Promise 2");
  setTimeout(() => console.log("Inside Timeout"), 0);
});

console.log("End");
//OP: Start , End , Promise 1 , Promise 2 , Timeout , Inside Timeout
*/

/*
console.log("Start");
setTimeout(() => {
  console.log("Timeout with 1 second delay");
}, 1000);
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved!!");
    console.log("Timeout with no delay! Inside Promise"); //this will be printed first since mypromise 
    // will run wither way whether or not it is fulfilled yet but this call back will run regardless 
    // hence it prints this before the fullfilled message.
  }, 0);
});
console.log(myPromise);
myPromise.then((val) => console.log(val));
console.log("End");
*/
