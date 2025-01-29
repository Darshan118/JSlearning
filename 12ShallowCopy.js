const person = {
    name: "Darshan",
    age: 25,
}
const person2 = person;
console.log(person);
console.log(person2);

person2.name = "Shadow";
console.log(person);
console.log(person2);
console.log(person === person2);

//Shallow copy using spread operator
const person3 = { ...person };
console.log(person3)
person3.name = "Darshan";
console.log(person3);
console.log(person === person3);

//Spread operator can be used to avoid shallow copy of objects. But when the object is nested, the nested object will still be a shallow copy. meaning it will affect the original object as well. 
const person4 = {
    name: "Darshan",
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
}
const person5 = { ...person4 };
console.log(person4 === person5)
person5.address.city = "Mysore";
person5.name = "Himalayan";
console.log(person4);
console.log(person5);
/**
 * Explanation for the above behaviour
 * When you do:


const person5 = { ...person4 };
This creates a shallow copy of person4.

The top-level properties (like name and address) are copied by value.
But for nested objects (like address), only a reference to the original object is copied.
So, person5.address is still pointing to the same address object as person4.address.

Why Does Modifying person5.address.city Affect person4?
When you do:

person5.address.city = "Mysore";

Since person5.address is not a new object, but a reference to person4.address, modifying it affects person4.address as well.
This is why person4.address.city also changes to "Mysore".

Examples of shallow copy
a) Using Object.assign
b) using spread operator
c) using Array.slice() for arrays
 */