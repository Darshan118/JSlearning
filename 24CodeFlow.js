const fs = require("fs");

console.log("A: script start");

setTimeout(() => console.log("B: setTimeout"), 0);

setImmediate(() => console.log("C: setImmediate"));

fs.readFile(__filename, () => {
  console.log("D: I/O callback (poll phase)");

  setTimeout(() => console.log("E: inner setTimeout"), 0);
  setImmediate(() => console.log("F: inner setImmediate"));

  process.nextTick(() => console.log("G: inner nextTick"));
  Promise.resolve().then(() => console.log("H: inner Promise"));
});

process.nextTick(() => console.log("I: nextTick"));
Promise.resolve().then(() => console.log("J: Promise"));

console.log("K: script end");
