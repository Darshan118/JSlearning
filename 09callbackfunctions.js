function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}
function doStep2(init, callback) {
  const result = init + 3;
  callback(result);
}
function doStep3(init, callback) {
  const result = init + 6;
  callback(result);
}

function callCallbacks()
{
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log("Final result: " + result3);
      });
    });
  });
}

callCallbacks();
