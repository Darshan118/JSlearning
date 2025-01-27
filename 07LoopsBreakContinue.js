// Example of using break and continue in loops

// Using break in a loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // When i is 5, break the loop
        break;
    }
    console.log('Using break, i:', i);
}
// Output: 0, 1, 2, 3, 4

// Using continue in a loop
for (let j = 0; j < 10; j++) {
    if (j === 5) {
        // When j is 5, skip the rest of the loop and continue with the next iteration
        continue;
    }
    console.log('Using continue, j:', j);
}
// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9

// Using break in a while loop
let a = 0;
while (a < 10) {
    if (a === 5) {
        // When a is 5, break the loop
        break;
    }
    console.log('Using break in while, a:', a);
    a++;
}
// Output: 0, 1, 2, 3, 4

// Using continue in a while loop
let b = 0;
while (b < 10) {
    b++;
    if (b === 5) {
        // When b is 5, skip the rest of the loop and continue with the next iteration
        continue;
    }
    console.log('Using continue in while, b:', b);
}
// Output: 1, 2, 3, 4, 6, 7, 8, 9, 10

// Warning about infinite loops
// Be careful with while loops to ensure they have a condition that will eventually be false
// Example of an infinite loop (do not run this code):
// while (true) {
//     console.log('This will run forever');
// }