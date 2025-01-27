//--------------------Variable naming convention--------------------
// a) can start with a number, '_' , '$'
// b) There should be no space in between variable names instead use underscore as seperator.
// c) Use camelCase , Snakecase , PascalCase corresponding eg are firstName , Lastname , PhoneNumber 
// d) variable names should be meaningful rather than just a , x, y etc..
// e) Cannot use reserved keywords eg: null , bool , new and so on


console.log("-------------VAR-----------------------");
//Var is function scoped when defined within function(vi in this case) and it can be global scoped when it is defined outside the function(v0 in this case) and the global variable vo can be accessed in any functions and the same variable name can be redeclared as well. But var is not block scoped. meaning the var defined within {} can be accessed outside the block as well!

{
  var vblock = "I'm var block scoped";
}
var vo = 20;
function varExample() {
  var vi = 10;
  var vo = "Darshan";
  console.log("within function " + vi + " " + vo + " " + vblock);
}
varExample();
// console.log("Outside function " + vi); //var cannot be accessed outside of function if it's defined within function
console.log("Global variable vo " + vo);

console.log(
  "--------Let and const are ES6 features(ECMAscript indroduced in 2015)-----------------------"
);

//-------------------------------------------------------------------
console.log("--------------LET-----------------------");
// Let is a function scoped and block scoped which allows modification/mutation/re-assignment of values but not re-initialization of same variable, but it allows redeclaration of same variable in different block

{
  let lname = "Darshan";
  lname = "shadow";
  console.log(lname);
}
// console.log(lname); cannot access lname outside the block since it's a block scoped variable
function letExample() {
  let lph = 7975826568;
  console.log("Let within function " + lph);
}
// console.log("Let outside function " + lph); cannot access lph outside the function since it's a function scoped variable
let lph = "Darshan";
console.log(lph);

//-------------------------------------------------------------------
console.log("-----------CONST---------------------");
//This is block and function scoped, it cannot be redeclared/reinitialized neither it can be mutated/modified/re-assigned. It can be redeclared in different block.

const cname = "Darshan";
// cname = "Shadow"; //cannot mutate
console.log(cname);
{
  const cname = "shadow"; //it allows re-declaration in different block but again it doesn't allow mutation of same variable name in the same block
  console.log(cname);
}
console.log(cname);
