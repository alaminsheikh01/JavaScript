/**
 * write a function that takes two parameters: A non-empty array of
 * distinct integers and an integer representing a target sum, if any two
 * numbers in the array sum up to the target sum, the function should
 * return them in an array. If no two numbers sum up to the target sum,
 * the function should return an empty array.
 */

function twoNumberSum(arr, targetNum) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetNum) {
        result.push(arr[i]);
        result.push(arr[j]);
        return result;
      }
    }
  }
  return result;
}

console.log(twoNumberSum([10, 8, 3, 5, 3], 6));
console.log(twoNumberSum([1, 2, 3, 4, 5], 10));
