// Iterate over array once, and at each iteration
// check if the number you need to get to target exists in the array
// If it exists, return it's index and the present number index

function twoNumberSum(arr, targetValue) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let desiredNumber = targetValue - arr[i];
    // console.log(desiredNumber);
    if (arr.indexOf(desiredNumber) !== -1 && arr.indexOf(desiredNumber) !== i) {
      result.push(arr[i]);
      result.push(arr[arr.indexOf(desiredNumber)]);
      break;
    }
  }
  return result;
}

console.log(twoNumberSum([40, 5, 6, 4, 6, 10], 14));
