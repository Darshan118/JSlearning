/** Difference between
 * let fname = 'John'; and let lname = new String('Doe');
 *
 * First one is a primitive datatype and second on is an string object
 *
 * Primitive datatypes are immutable.
 * meaning when a variable is assigned with a value of any primitive types(number, string ,bool , null, undefined , symbol, bigint) then
 * they are stored in the stack memory and the value of the variable cannot be changed.
 * even though we can change the value of the variable but it will create a new memory location for the new value
 * making the old value unaccessible and not mutable. consider from memory address perspective.
 *
 * Object datatyes are derived datatypes and they are mutable.
 * in case of new String('Doe') the value is stored in the heap memory and the reference of the value is stored in the stack memory. and it is created using string constructor.
 * unlinke primitive datatypes, object datatypes are mutable. meaning the value of the object can be changed.
 * Also, the object datatype can have properties and methods like length, toUpperCase, toLowerCase, etc.
 * It takes up more memory than primitive datatypes.
 * Objects are reference types so when we compare two objects, we are comparing the references, not the values they are holding.
 *
 * */

let fname = "Darshan";
let lname = new String("Darshan");
console.log(typeof fname); // string
console.log(typeof lname); // object

//Equality check

console.log(fname == lname); // true because the value is same and it's not strick equality check.
console.log(fname === lname); // false because one is primitive and other is object

//Changing the value of the object
lname[0] = "d"; //cannot change individual characters of an object datatype
console.log(lname); // Darshan
console.log(lname[0]); // D

lname = "Darshan R";
fname = "Darshan R";
console.log(typeof fname); // string
console.log(typeof lname); // string
console.log(lname[0]); //can access individual characters

/**Autoboxing in javascript
Autoboxing is the process of converting a primitive datatype to an object datatype.
When we notice some examples like fname.length, fname.toUpperCase(), fname.toLowerCase() etc.
Though fname is a primiti datatype, ideally only objects can access methods and properties but in javascript, it is possible to access methods and properties of a primitive datatype.
This is because of autoboxing. When we try to access a method or property of a primitive datatype, javascript automatically converts the primitive datatype to an object datatype. 
when we call fname.length or fname.toUpperCase() 
JS creates a temporary string object using primitive datatype.
Executes the method or property on temporary object 
Discards the temporary object once the value is returned leaving the original primitive value unchanged.
*/

/**
 *  * Primitive types are stored in stack memory and objects(including arrays and functions) are stored in heap
 * memory.
 */

let sentence = "Hi \\my \\name \\is \\Darshan";
const words = sentence.split("\\");
console.log(words); // ["Hi ", "my ", "name ", "is ", "Darshan"]

const sentence1 = words.join(",");
console.log(sentence1); // Hi ,my ,name ,is ,Darshan
