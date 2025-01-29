/**
 * A deep copy in JavaScript creates a completely independent copy of an object, including all nested objects or arrays.
 * Using JSON.parse(JSON.stringify()) method
 * Using Lodash library
 */

const person = {
    name: 'Darshan',
    location: {
        city : 'Bangalore',
    }
}

const person2 = JSON.parse(JSON.stringify(person));
console.log(person);
console.log(person2);
console.log(person === person2);

person2.location.city = 'Hospet';
console.log(person);
console.log(person2);

//Downside of using JSON.parse(JSON.stringify()) method is if the object has functions or undefined properties, they will be lost in the copied object.

//using lodash library!!