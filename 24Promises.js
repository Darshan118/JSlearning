/**
 * 🚀 Key Takeaways:
 * Promises start as pending(Initial State).
 * resolve(value) changes them to 'fulfilled'.
 * reject(error) changes them to rejected.
 * finally() executes after.then and .catch
 */

/*const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise is resolved!");
    console.log("Some code inside setTimeout callback");
  }, 2000);
});

console.log(myPromise);
myPromise.then((value) => console.log(value));
/**
 * If you do not specify resolve() inside the promise function, the promise will remain
 * in the pending state forever and will never be fulfilled or rejected.
 * so myPromise.then((value) => console.log(value)) line will never be executed since promise is never resolved.
 */

//-------------------------------------------------------------------------------------

/*
// Step 1: Create the Promise
const myPromise = new Promise((res, rej) => {
  // Step 2: Start a 1-second timer
  setTimeout(() => {
    res("Promise is resolved!!"); // Step 4: After 1 sec, the promise is resolved.
  }, 1000);
});
// Step 3: Log the promise immediately which will be in pending state 
console.log(myPromise);
myPromise.then((value) => console.log(value)); //after 1 sec when promise is resolved it will be caught in then 
//and the value passedd in resolve is taken as param in .then
//if we use reject instead of resolve then we can catch it in .catch((error) => clg(error)) so in that case 
//.then() doesn't run instead .catch will run and the error message will be printed

*/

//---------------------------------------------------------------------------------------

/*
const myPromise = new Promise((resolve, reject) => {
  const check = true;
  if (check) resolve("Promise is resolved!");
  else reject("Promise is rejected!");
});

console.log(myPromise);
myPromise
  .then(() => console.log("Runs .this() if promise is resolved"))
  .catch((err) => console.log("Runs .catch when promise is rejected! ", err));
*/

/*
const myPromise = new Promise((resolve, reject) => {
  const check = false;
  setTimeout(() => {
    if (check) resolve("Promise is resolved!");
    else reject("Promise is rejected!");
  }, 2000);
});

myPromise
  .finally(() => console.log("Finally block executed"))
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
*/

//Note: even though the finally is printed first but .finally() does not execute first. It always runs after the promise settles (either fulfilled or rejected), regardless of success or failure. In the above case the
// output: (waits for 2 seconds) , Finally block executed , promise is rejected!
/**finally() does not execute immediately. It waits for the promise to settle.
 * 2️⃣ Since resolve("Success!") is called after 2 seconds:
 * .finally() runs first after resolution.
 * .catch() runs next with "Promise is rejected!".
 */

//-------------Shortcut for writing promises -------------------------------------
/**
 * Using Promise.resolve("Hello").then(value => clg(value)) is same as writing
 * const myPromiseObject = new Promise((resolve, reject) => {
 * resolve("Hello")
 * })
 * myPromiseObject.then((value) => clg(value))
 * or
 * Promise(resolve => resolve('Hello')).then(val => clg(val))
 */

/*new Promise((resolve) => resolve("Promise resolved!")).then((value) =>
  console.log(value)
);
*/
//-------------------------------equivalent to writing----------------------------

/*
Promise.reject("Hello!")
  .then((val) => console.log("It is resolved", val))
  .catch((err) => console.log("It is rejected", err))
  .finally(() => console.log("Promise Execution is complete!"));
*/

//---------------------------------------Promise Chaining----------------------
/*new Promise((resolve) => resolve(1))
  .then((num) => {
    console.log(num);
    return num * 2;
  })
  .then((num) => {
    console.log(num);
    return num * 2;
  })
  .then((num) => {
    console.log(num);
  })
  .finally((num) => {
    console.log(" Finally cannot access the final Number. hence it will be undefined!:", num);
  });
*/

//---------------------Promise.All()---------------------------------
/**
 * Promise.All() creates a promises that resolves with an array of promises that is specified within All
 * If any of the Promise fails then entire Promise.All() fails
 */
/*
Promise.all([
  Promise.resolve("Resolve 1"),
  new Promise((resolve) => {
    resolve("resolve 2!");
  }).then((val) => console.log(val)),
  new Promise((resolve) =>
    setTimeout(() => {
      resolve("resolve 3!");
    }, 1000)
  ),
  Promise.resolve("Resolve 4!"),
])
  .then((val) => console.log(val[1])) //here val is an array which contains array of resolved values.
  .catch((err) => console.log("Promise is rejected!", err));
*/

//---------------------Promise.race()---------------------------------
/**
 * Resolves or Rejects the promise when any of first the provided array of promises gets resolved or rejected.
 */
/*
Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("1 second");
    }, 4000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("3 seconds");
    }, 3000);
  }),
])
  .then((val) => {
    console.log("Promise is resolved!", val);
  })
  .catch((err) => {
    console.log("Promise is rejected!!", err);
  });

  //In the above code the second array element promise executes first sine the timeout is 3 seconds hence 
  //promise will be resolved and then the ultimate parent promise with .race will also be resolved! 
  //this is good for timeout mechanisms!

*/

//---------------------Promise.allSettles()---------------------------------
/**
 * Allsettles will resolve when all the array elements whcih are differnet promises will be
 * settled(wither resolve or reject)
 * It doesn't matter if any one of them fails they must settle then the allsettles promise will be resolved
 */
Promise.allSettled([
  Promise.resolve("Resolved 1!"),
  Promise.reject("Rejected!"),
  Promise.resolve("Resolved 2!"),
  new Promise((resolve, reject) => {
    console.log(
      "This promise will not be settled since it is not resolved nor rejected, hence the main promise will fail"
    );
    // resolve("Resolved 3!");
  }),
])
  .then((val) => {
    console.log(
      "All the promises are settled! hence main promise resolved!",
      val
    );
  })
  .catch((err) => console.log(err));
/**
 * "Resolved 1!" → Fulfilled
 * "Rejected!" → Rejected
 * "Resolved 2!" → Fulfilled
 * Unresolved Promise → Stays pending forever
 * 📌 Since the last promise never resolves or rejects, Promise.allSettled() itself hangs indefinitely!
 * Hence it never catches the error even if there are unresolved promises
 */
