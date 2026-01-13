/**
 * * The async function always makes the function to return a promise
 * * Await is the keyword which makes JS to pause execution inside the async function
 * until the promise resolves
 * * Await can only be used inside the async function or else JS will throw syntax error
 */

/********************************
async function fetchData() {
  return "Data Fetched!";
//   
//    * Even if we return a normal value JS under the hood wraps it inside promise automatically!
//    * equivalent of writing 'return Promise.resolve('Data Fetched!');
//    
}

fetchData().then((val) => console.log(val));
*/

/*********************************************** 
async function fetchData() {
  console.log("Start");
  let data = await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Fetch data in promise resolve!");
    }, 2000)
  );
  console.log(data);
}
fetchData();
console.log("End");
//OP: Start , End , Fetch data in promise resolve!(after 2 second delay)
*/

/************* Difference Between await and .then() **************************
 * Both await and .then() handle asynchronous operations, but:
 * Feature	        await	                                .then()
 * syntax	        Looks like synchronous code	            Uses callbacks (chained .then())
 * Readability	    Easier to read & maintain	            Can become nested with .then()
 * Error Handling	try...catch	                            .catch()
 */

/************* Error Handling in Async/Await *********************************
async function fetchData() {
  try {
    let response = await fetch("https://wrong-url.com");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Caught error: ", err);
  }
}
fetchData();
//If an error occurs, it will be caught in the catch block.
*/

/**************** Handling Multiple Async call using Promise.all() ******************************

async function fetchData() {
  //Remember promise.all resolves the promises passed as array inside it and returns array of fulfilled value.
  //These value are destructured in data1 and data2 directly shortening the code length.
  //Promise.all() rejects if either one of the promises inside the array rejects.
  try {
    let [data1, data2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
        res.json()
      ),
    ]);
    console.log(data1, data2);
  } catch (err) {
    console.log("Error Caught!! ", err);
  }
}

fetchData();
*/

/****************** The Role of .catch() After an async Function ***************************
 * Useful when calling async functions without try..catch block*
async function fetchData() {
  throw new Error("Something went wrong!!");
}
fetchData().catch((err) => console.log("Error Caught:", err));

*/

/****************** What Happens When You await Inside a Loop? ****************************
 *
 * Using await inside a loop will execute the promises sequentially instead of parallely
 * Consider tasks as a array of promises which can be passed into Promise.all() method
 * .map() in JS traverses through array elements in JS
 * In this case each array element is a Promise which will fulfill or reject eventually
 *
 * When you use await inside a loop, each iteration waits for the previous one to finish
 * before starting the next. This makes the execution sequential instead of parallel,
 * slowing down performance.
 *
 * Below is a bad example of usage
 *
 * async function fetchData()
 * {
 *  for (let task of tasks)
 *  {
 *      await task(); //each task is a promise themselves
 *  }
 * }
 *
 * Below is the better alternative using Promise.all()
 *
 * async function fetchData(tasks)
 * {
 *   await Promise.all(tasks.map(task => task()));
 * }
 *
 * 🚀 This runs all tasks in parallel, improving performance.
 * */

/******************* When NOT to Use await (e.g., Inside Promise.all()) ************************************
 *
 * If you use await inside Promise.all(), it removes parallelism, making the code slower. 
 * Because await makes the functuion to pause further exection unless the promise is resolved.
 *
 * bad example:
 *
 * await Promise.all([
 *  await task1(),  // ❌ No need for await inside Promise.all
 *  await task2()
 * ])
 *
 * Instead use:
 *
 * await Promise.all([ task1() , task2()])
 */

/******************* Example of using await inside loop slowing Performance ***************************

// async function fetchData(ids) {
//   for (let id of ids) {
//     let response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     let data = await response.json();
//     console.log(`Fetched post ${id}`, data.title);
//   }
// }

// fetchData([1, 2, 3, 4]);

//Instead use Promise.all()

async function fetchData(ids) {
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
  console.log("Promises contain: ", promises);
  let results = await Promise.all(promises);

  results.forEach((data, index) => {
    console.log(`Fetched Post ${ids[index]}: `, data.title);
  });
}
fetchData([1, 2, 3]);
*/

/*
let myPromise = new Promise((resolve, reject) => {
  let check = true;
  if (check) {
    setTimeout(() => {
      resolve("Promise will be resolved!");
    }, 2000);
  } else reject("Promise will be rejected!");
});

console.log(myPromise.then((val) => console.log(val)));
*/