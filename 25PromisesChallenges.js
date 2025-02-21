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

/************************** Error Handling ***********************
Promise.reject("Error happened!")
  .catch((err) => {
    console.log("Caught:", err);
    return "Recovered!"; // Recovering from error
  })
  .then((res) => {
    console.log("Next Then:", res);
  })
  .catch((err) => {
    console.log("Final Catch:", err); //it won't go into this because there's no error or reject to catch 
  });
//OP: Caught: Error happened! Next Then: Recovered!
*/

/*********************** Parallel vs Sequential Requests *********************** */

/***************** fetching in sequence ********************
 * making await in a loop makes it more slower

async function fetchSequentially(ids) {
  for (let id of ids) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      console.log("Sequence execution: ", data.title);
    } catch (err) {
      console.log(err);
    }
  }
}

fetchSequentially([1, 2, 3, 4]);
 */

/*********** fetching parallely using 2 methods *** */
/****** Method 1 - this is more faster compared to moethod 2
function fetchParallely1(arr) {
  for (let i of arr) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
      .then((response) => response.json())
      .then((data) => console.log("Parallel execution: ", data.title))
      .catch((err) => console.log("Error caught!!", err));
  }
}
fetchParallely1([1, 2, 3, 4]);
*/
/****** Method 2 using Promise.all() *********
async function fetchParallely2(ids) {
  //fetch().then() will return a promise and this list of pending promises will be stored in promises varable
  //If it seems confusing why myPromise().then() return a promise then check next code example below in console
  // it will print Promise{<pending>} untill 1 second then it gets resolved similarly te below will in pending
  // and one it is passed to await Promise.all() it will return all resolved value which can then be stored
  // in results
  let promises = ids.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    )
  );

  let results = await Promise.all(promises);

  results.forEach((element, index) => {
    console.log(`Parallel Execution `, element.title);
  });
}
fetchParallely2([1, 2, 3, 4]);
 */

/******************* Handling Error if any of the user/value is invalid 
async function fetchUsers(ids) {
  try {
    let promises = ids.map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Error!! User ${id} no found!`);
          return res.json();
        })
        .catch((err) => console.log("Error fetching data:", err))
    );

    let results = await Promise.all(promises);
    results.forEach((element) => {
      console.log(element.name);
    });
  } catch (err) {
    console.log("Error Caught!!", err);
  }
}

fetchUsers([1, 999, 3]); // 999 is an invalid ID that may cause an error
*/

/************* To print other users inspite of few of the users are invalid
 * To print 'User is Invalid' if user is not found or data is invalid
 * But it shouldn't stop the execution it must still print rest of the user details.

async function fetchUsers(ids) {
  try {
    let promises = ids.map(
      (id) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((res) => {
            if (!res.ok) throw new Error(`User ${id} not found!!`);
            returnres.json();
          })
          .catch(() => ({ name: "User not found" })) // Ensure a valid object is returned
    );

    let results = await Promise.all(promises);

    results.forEach((user, index) => {
      console.log(`User ${ids[index]}:`, user.name);
    });
  } catch (err) {
    console.log("Error Caught!!", err);
  }
}

fetchUsers([1, 999, 3]); // 999 doesn't exist!
 */

/***************** Handling Multiple Fetch Requests with Different Response Times ********************
 * To print data in the order they complete rather than in the order they are requested.
 */
/******************Solution Using .then() for Immediate Logging  
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

async function fetchAsTheyArrive(urls) {
  let promises = urls.map((url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log("Fetched:", data.id))
  );

  await Promise.all(promises); //It ensures that all promises have settled before fetchAsTheyArrive finishes execution.
  //If you call this function inside another async function and need to wait for all requests before moving forward,
  //this guarantees completion
  //If you remove it, fetchAsTheyArrive(urls) will fire off the requests asynchronously and return immediately 
  // without waiting for them to finish.

fetchAsTheyArrive(urls);
*/

/***************** Using fo await...of ******************
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];
async function fetchAsTheyArrive(urls) {
  let promises = urls.map((url) => fetch(url).then((res) => res.json()));

  for await (let data of promises) {
    console.log("Fetched:", data.id);
  }
}

fetchAsTheyArrive(urls);
 */