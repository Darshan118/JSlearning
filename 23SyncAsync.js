/*console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

async function test() {
  console.log("Async Start");
  await Promise.resolve();
  console.log("Async End");
}

test();

console.log("End");
*/

/**
 * op: Start , Async Start ,End , Promise 1 , Async End, Timeout
 */
/**
 * 🔍 Breakdown of Execution
 * 🟢 Step 1: Run Synchronous Code First
 * console.log("Start"); → Prints Start
 * console.log("Async Start"); inside test() → Prints Async Start
 * await Promise.resolve(); → Pauses function execution
 * 🔹 Microtask Queue: Promise 1 & Async End
 * 🔹 Macrotask Queue: setTimeout (to run later)
 * 
 * 🟢 Step 2: Continue Synchronous Code
 * console.log("End"); → Prints End
 * 
 * 🟢 Step 3: Microtasks Execute (Before Any Macrotask)
 * Promise.resolve().then(() => console.log("Promise 1")); → Prints Promise 1
 * await Promise.resolve(); resumes → Prints Async End

 * 🟢 Step 4: Run Macrotasks (setTimeout)
 * setTimeout(() => console.log("Timeout"), 0); → Prints Timeout
 * 
 * 🚀 Key Learnings
 * ✔ Microtasks (Promises, await) execute before Macrotasks (setTimeout).
 * ✔ await Promise.resolve(); defers execution but stays in the Microtask Queue.
 * ✔ Async functions pause at await, but their code runs in the Microtask Queue after resolution.
 */

// ---------------------------------------------------------------------------------------------

/*console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");*/

// ---------------------------------------------------------------------------------------------

/*console.log("X");

setTimeout(() => {
  console.log("Y");
}, 0);

Promise.resolve().then(() => {
  console.log("Z");

  setTimeout(() => {
    console.log("W");
  }, 0);
});

console.log("End");

//op: X , End , Z , Y , W */

// ---------------------------------------------------------------------------------------------

/*
async function demo() {
  console.log("Start");

  await Promise.resolve(); //when it encounters await it stops the rest of the exectution in the async function and then goes out and executes rest of the code in their respective order. Once all the other line of codes are executed it will return back and execute after await step.
  console.log("Mid");

  setTimeout(() => {
    console.log("End");
  }, 0);
}

demo();
console.log("After function call");

//op: Start , After Function call , Mid , End */

/*
async function demo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");
demo();
console.log("D");

//op: C , A , D , B
*/
/*
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

async function test() {
  console.log("Async Start");
  await Promise.resolve();
  console.log("Async End");
}

test();

console.log("End");
//OP: start , Async start , End , promise 1,Async End , Timeout
*/

/*
console.log("X");

setTimeout(() => console.log("Y"), 0);

Promise.resolve()
  .then(() => {
    console.log("Z");
    return Promise.resolve();
  })
  .then(() => console.log("W"));

console.log("End");

//Op: X , End , Z , W, Y */
/*
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");
  setTimeout(() => console.log("4"), 0);
});

console.log("5");

Promise.resolve().then(() => console.log("6"));
//OP: 1 , 5 , 3 , 6 , 2 ,4 */
/*
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => {
    console.log("C");
    return Promise.resolve();
  })
  .then(() => console.log("D"));

console.log("E");

setTimeout(() => console.log("F"), 0);

Promise.resolve().then(() => console.log("G"));
//OP: A ,E , C , G , D , B ,F */

/*
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");
  setTimeout(() => console.log("4"), 0);
});

Promise.resolve()
  .then(() => {
    console.log("5");
    return Promise.resolve();
  })
  .then(() => console.log("6"));

console.log("7");

setTimeout(() => console.log("8"), 0);
//op: 1, 7 , 3 ,5 ,6 ,2 ,8 ,4 */

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => {
    console.log("C");
    return Promise.resolve();
  })
  .then(() => {
    console.log("D");
  });

console.log("E");

setTimeout(() => console.log("F"), 0);
//op: A, E , C, D , B , F