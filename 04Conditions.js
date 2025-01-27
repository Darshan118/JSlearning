// If statement
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

// If-else statement
let y = 3;
if (y > 5) {
    console.log("y is greater than 5");
} else {
    console.log("y is not greater than 5");
}

// Else-if statement
let z = 7;
if (z > 10) {
    console.log("z is greater than 10");
} else if (z > 5) {
    console.log("z is greater than 5 but less than or equal to 10");
} else {
    console.log("z is 5 or less");
}

// Switch statement
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("This is a banana");
        break;
    case "apple":
        console.log("This is an apple");
        break;
    case "orange":
        console.log("This is an orange");
        break;
    default:
        console.log("Unknown fruit");
}

// Ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);

// Logical AND (&&) operator
let a = true;
let b = false;
if (a && b) {
    console.log("Both a and b are true");
} else {
    console.log("Either a or b is false");
}

// Logical OR (||) operator
if (a || b) {
    console.log("Either a or b is true");
} else {
    console.log("Both a and b are false");
}

// Logical NOT (!) operator
if (!b) {
    console.log("b is false");
}