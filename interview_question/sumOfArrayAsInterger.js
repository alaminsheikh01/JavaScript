// function findTwoSumOfArray(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sum = arr[i] + arr[j];
//       if (sum === value) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// const result = findTwoSumOfArray([1, 2, 3, 6, 5, 4, 8, 7], 10);

// console.log(result);

/**
 * arr = [1,7,5,8,6,3,2,1,5,9,5,2,10];
 * value = 12;
 */

function test(arr, value) {
  // statement
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[i], arr[j]);
      sum = arr[i] + arr[j];
      if (sum === value) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}

//O(n*n) // slow
const a = test([1, 7, 5, 8, 6, 3, 2, 1, 5, 9, 5, 2, 10], 12);
console.log(a);
