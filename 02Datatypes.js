//--------------------Number---------------------------------
let n1 = 123;
let n2 = 10.33;
console.log(typeof n1, typeof n2);
console.log(n1 + " " + n2);

//--------------------String---------------------------------
let s1 = "Darshan";
let s2 = "Shadow";
let s3 = `Himalayan`;
console.log(typeof s1, typeof s2, typeof s3);
console.log(s1, s2, s3);

//--------------------Boolean---------------------------------
let b1 = true;
let b2 = false;
let b3 = b1 && b2;
console.log(typeof b1, typeof b2, typeof b3);
console.log(b1, b2, b3);

//--------------------Undefined---------------------------------
let uX = undefined;
console.log(uX);
console.log(typeof uX);
let uY;
console.log(uY);
console.log(typeof uY);

//--------------------Null---------------------------------
let nu1 = null;
console.log(typeof nu1);
console.log(nu1);

//--------------------BigInt---------------------------------
//when the number is greater than 2^53 -1 it's big int and is specified by number folowed by 'n' in the end
let bInt = 123456789876543212345678998765432112345643241234123123n;
console.log(typeof bInt);
console.log(bInt);

//--------------------Symbol---------------------------------
//This is for creating usinque objects. Though the assignment to variables are similar it will still fail in comparision === but in case of other primitive types when we assign same value to the variables and chack for equality then they always provide truthy

let sym1 = Symbol("Hello");
let sym2 = Symbol("Hello");
console.log(typeof sym1);
console.log(sym1);
console.log(sym1 === sym2);
console.log(sym1 == sym2);

let myObj = {};
myObj[sym1] = "Darshan";
myObj[sym2] = "Chandran";

console.log(typeof myObj);
console.log(myObj);

console.log(myObj[sym1]);
console.log(myObj.sym2); //!! Cannot do this because it's like adding an prop to object which will be not defined

//Symbols cannot be accessed using for in loop
myObj.bike = "Himalayan";
for (const key in myObj) {
  console.log(`Key : ${key}, Object : ${myObj[key]}`); //This will print only newly added string property but it won't print those symbol properties.
}

//Symbols will be ignored in JSON stringify
console.log(JSON.stringify(myObj));
