/**
 * Fetch API is used for making https requests
 *
 * It uses promises making it easy to work with async data.
 * Remember that fetch returns a promise that resolves to the response object which has meta data details
 * including status codeu, actual body(which contains data) which will be in stream format,headers information,
 *  etc.. At this stage response is not the actual data but just an object representing an HTTP response.
 *
 * Once we get the response we need to extract the data from the response, The body of response will be
 * in stream format meaning we will not be getting the response at one shot hence this streamable body needs to
 * be processed before we can use it. methods like '.json()' , '.text' or '.blob()' are used to convert the
 * "stream" of response body into usable data. That is the reason why we need to await when we convert response body
 * to .json() since we do not get response body at a stretch hence .json() also needs to be awaited.
 *
 * await response.json() will covert the response body which contains data into JS object.
 * it basically returns promise which resolves with the parsed data.
 *
 *
 *
 * .json() is asynchronous because?
 * The response body is a stream 🔄
 * When fetch() gets a response, the body is not fully available immediately.
 * The body is a readable stream(data comes bit by bit rather not in an instant) that needs to be read
 * completely before conversion.
 * Parsing JSON takes time ⏳
 * The .json() method reads the stream completely and then parses it into a JavaScript object.
 * This process can take a noticeable amount of time for large JSON files.
 * JS is a single threaded language hence making .json() async ensures main thread is not freezed completely while
 * processing the data.
 * eg:
 * If response body contains: {"name": "Alice", "age": 25}
 * Then .jsson() will return: {name: "Alice", age: 25} - Object
 *
 * "In short, .json() converts JSON data into a JavaScript object."
 *
 * what happens if we don't await .json()?
 * If we do not await we will get a promise rather not an actual data. //Outputs: Promise { <pending> }
 *
 * Alternative formats are:
 * a) .text() - reads the response as plain string(useful for HTML , XML etc)
 * b) .blob() - reads the response as binary large object (useful for images, videos etc)
 * c) .arrayBuffer() - reads the response as Raw Binary Data.
 *
 *
 * syntax:
 * (Using promises)
 *
 * fetch(url, options)
 * .then(response => response.json())
 * .then(data => console.log(data))
 * .catch(error => console.log('Error!!: ',error));
 *
 * (using await)
 * let response = await fetch(url);
 * let data = await response.json();
 */

/******************** Basic Fetch Request *********************** 
fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json()) //try printing response directly you will find all the metadata from fetch req
  .then((data) => console.log(data))
  .catch((err) => console.log("Caught Error!!", err));
*/

/********************** Handling Response Status Codes *************************
 * When making an HTTP request, handling response status codes is crucial for determining
 * whether the request was successful or if there was an error. The status code provides
 * information about the result of the request.
 

fetch("https://fakestoreapi.com/products/1")
  .then((res) => {
    if (res.ok) {
      //Checks if the HTTP response status is in the range of 200–299, indicating success.
      return res.json();
    } else {
      throw new Error("Network response was not OK.");
      //If the status code indicates an error (e.g., 404 or 500), an error is thrown to handle it.
    }
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("Caught Error!! ", err));
*/

/*************** using Async/Await with Fetch API **********************
 * Async function helps in fetching data without blocking the rest of the program execution.
 * await is the keyword used to pause function until the fetch() request is complete. 
 * So that data can be used right after receiving.
 * awaiting for .json() because the response will in the form of stream rather not instantaneously. 
 * Hence we need to wait for response to be awaited when it is being converted to JSON format to JS object.
 * 
 * try/catch block catches any unexpected error that may happen while running code defined in try block
 * (like network problems). Which will be caught in catch block thus preventing program from crashing.
 
async function fetchData() {
  try {
    let response = await fetch("https://fakestoreapi.com/products/1");
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    } else {
      throw new Error("Failed to fetch data!!");
    }
  } catch (err) {
    console.log("Caught Error!!", err);
  }
}

fetchData();
*/

/**************** Sending Custom Headers with fetch API ********************
 * * Purpose of custom headers is that it allows clients to provide additional info to the server beyond
 * standard headers. This helps in authentication, tracking and providing metadata about request.
 *
 * * Purpose of Authenticatio and Security is that headers like Authorization(eg; Bearer token) enable
 * secure API access by verifying the client's identity before processing requests.
 *
 * * Purpose of content negotiation is that headers like Content-type and Accept define the format of
 * request and respons(eg: Application/json). This ensures proper communication between client and server.
 *
 * * Server side extracts , validates and processes headers before executing the request. Logging headers helps
 * in monitoring and debugging the API interaction (how exactly to do it? I'm not sure check sounds interesting!!)
 

fetch("http://localhost:3000/test-api", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer my-secret-token",
    "Custom-Header": "HelloWorld",
  },
  body: JSON.stringify({ name: "Darshan" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error cught!!", err));
  */

/************* Handling differnet request methods (GET,POST, PUT, DELETE) ************************* */

/*************************** 1 - Handling GET request ************************************** */
/**
 * Using Promises .then().catch()
 
fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Caught Error!!", err));
 */
/**
 * Using await
 * Mind that await can be used at the top level of a module or class without defining async anywhere
 * If we are planning to use await inside function then we have to declare function as async.

let response = await fetch("https://fakestoreapi.com/products/1");
let data = await response.json();
console.log(data);
 */

/*************************** 2 - Handling POST request ************************************** */
/************ Using Promises .then() .catch() ************
const data = { name: "Darshan", age: 25 };
fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: {
    "content-type": "Application/json",
    //Application/JSON specify the type of data which will be sent. Since we will be doing JSON.Stringify(data)
    //the object will be converted into string which is indirectly an JSON format.
  },
  body: JSON.stringify(data),
  //The body contains the data to be sent, which is stringified using JSON.stringify().
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((err) => console.log("Error caught!!", err));
*/

/************* Using await *************** 
let data = { fname: "Darshan", age: 25 };
let response = await fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: {
    "content-type": "Application/json",
  },
  body: JSON.stringify(data),
});
let result = await response.json();
console.log(result);
*/

/*************************** 2 - Handling PUT request **************************************
 * Body sends the updated data in JSON format (once it goes through JSON.Stringify)
 */
/****** using promises .then() **************
const updatedData = { id: 1, price: 300 };
fetch("https://fakestoreapi.com/products/1", {
  method: "PUT",
  headers: {
    "content-type": "Application/json",
  },
  body: JSON.stringify(updatedData),
})
  .then((res) => res.json())
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
*/
/********** using await ****************** 
const updatedData = { id: 1, price: 300 };
let response = await fetch("https://fakestoreapi.com/products/1", {
  method: "PUT",
  headers: {
    "content-type": "Application/json",
  },
  body: JSON.stringify(updatedData),
});
let result = await response.json();
console.log(result);
*/

/*************************** 2 - Handling DELETE request **************************************/
/********************* Using promise .then() ************************ 
fetch("https://fakestoreapi.com/products/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((res) => console.log('DELETED!', res))
  .catch((err) => console.log(err));
*/

/*********************** Using await *****************************
 * Use try catch block to catch catch error if present
 
let response = await fetch("https://fakestoreapi.com/products/1", {
  method: "DELETE",
});
let result = await response.json();
console.log("Deleted!!", result);
*/
