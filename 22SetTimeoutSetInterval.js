const someArgument = "Shadow";
const arg2 = "Himalayan";
setTimeout(
  () => {
    console.log(
      "Set timout runs the callback function only once after the time delay specified",
      someArgument,
      arg2
    );
  },
  1000,
  someArgument,
  arg2
);

setInterval(
  () => {
    console.log(
      "Set Interval runs the callback function each time after the time delay specified",
      someArgument,
      arg2
    );
  },
  1000,
  someArgument,
  arg2
);
