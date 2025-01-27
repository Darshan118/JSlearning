// Arithmetic Operators
let a = 10;
let b = 5;

let addition = a + b; // Addition: 15
let subtraction = a - b; // Subtraction: 5
let multiplication = a * b; // Multiplication: 50
let division = a / b; // Division: 2
let modulus = a % b; // Modulus: 0
let exponentiation = a ** b; // Exponentiation: 100000 (a^b is exponentiation operator)

// Increment and Decrement Operators
//pre-increment/decrement : increment/decrement first and then assign the value
let pre_increment = ++a; // pre_increment = 11 and a = 11
let pre_decrement = --b; // pre_decrement = 4 and b = 4
//post-increment/decrement : Assign the value first and then increment/decrement
//latest value of a is 11 and b is 4
let post_increment = a++; // post_increment = 11 and a = 12
let post_decrement = b--; // post_decrement = 4 and b = 3

// Assignment Operators
let x = 10;
x += 5; // x = x + 5: 15
x -= 3; // x = x - 3: 12
x *= 2; // x = x * 2: 24
x /= 4; // x = x / 4: 6
x %= 3; // x = x % 3: 0
x **= 2; // x = x ** 2: 0 (x^2 kind of operation)

// Comparison Operators
let isEqual = a == b; // Equal to: false
let isStrictEqual = a === b; // Strict equal to: false both operands must be of same type and value for strict equality.
let isNotEqual = a != b; // Not equal to: true
let isStrictNotEqual = a !== b; // Strict not equal to: true
let isGreaterThan = a > b; // Greater than: true
let isLessThan = a < b; // Less than: false
let isGreaterOrEqual = a >= b; // Greater than or equal to: true
let isLessOrEqual = a <= b; // Less than or equal to: false

// Logical Operators
let a1 = 10;
b1 = 5;
let andOperator = a > 5 && b < 10; // Logical AND: true
let orOperator = a > 15 || b < 10; // Logical OR: true
let notOperator = !(a > 15); // Logical NOT: true
let defaultOperator = a1 || b1; // Logical OR: 10
let defaultOperator2 = false || b1; // Logical OR: 5
let guardOperator = a1 && b1; // Logical AND: 5 //if first condition is true then second condition will be returned.
let guardOperator2 = b1 && false; // Logical AND: false //if either of condition is false then false will be returned.
console.log(`Default operator: `, defaultOperator);
console.log(`Default operator2: `, defaultOperator2);
console.log(`Guard operator: `, guardOperator);
console.log(`Guard operator2: `, guardOperator2);

// Bitwise Operators
let bitwiseAnd = a & b; // Bitwise AND: 0
let bitwiseOr = a | b; // Bitwise OR: 15
let bitwiseXor = a ^ b; // Bitwise XOR: 15
let bitwiseNot = ~a; // Bitwise NOT: -11
let leftShift = a << 1; // Left shift: 20
let rightShift = a >> 1; // Right shift: 5
let zeroFillRightShift = a >>> 1; // Zero fill right shift: 5

// Ternary Operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // Ternary Operator: "Yes"
// Arithmetic Operators
console.log("Arithmetic Operators:");
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

// Increment and Decrement Operators
console.log("\nIncrement and Decrement Operators:");
console.log("Pre-increment:", pre_increment);
console.log("Pre-decrement:", pre_decrement);
console.log("Post-increment:", post_increment);
console.log("Post-decrement:", post_decrement);

// Assignment Operators
console.log("\nAssignment Operators:");
console.log("x after += 5:", x);
console.log("x after -= 3:", x);
console.log("x after *= 2:", x);
console.log("x after /= 4:", x);
console.log("x after %= 3:", x);
console.log("x after **= 2:", x);

// Comparison Operators
console.log("\nComparison Operators:");
console.log("Equal to:", isEqual);
console.log("Strict equal to:", isStrictEqual);
console.log("Not equal to:", isNotEqual);
console.log("Strict not equal to:", isStrictNotEqual);
console.log("Greater than:", isGreaterThan);
console.log("Less than:", isLessThan);
console.log("Greater than or equal to:", isGreaterOrEqual);
console.log("Less than or equal to:", isLessOrEqual);

// Logical Operators
console.log("\nLogical Operators:");
console.log("Logical AND:", andOperator);
console.log("Logical OR:", orOperator);
console.log("Logical NOT:", notOperator);

// Bitwise Operators
console.log("\nBitwise Operators:");
console.log("Bitwise AND:", bitwiseAnd);
console.log("Bitwise OR:", bitwiseOr);
console.log("Bitwise XOR:", bitwiseXor);
console.log("Bitwise NOT:", bitwiseNot);
console.log("Left shift:", leftShift);
console.log("Right shift:", rightShift);
console.log("Zero fill right shift:", zeroFillRightShift);

// Ternary Operator
console.log("\nTernary Operator:");
console.log("Can vote:", canVote);
