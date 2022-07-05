/**
 * Maintain 4 cncepts
 *
 * 1. understant the problem
 * 2. break it down
 * 3. solve and simplify
 * 4. look back and refactor
 */

/**
 * A problem
 * 1. Make a higher variable
 * 2. make a lower variable
 * 3. iterate the whole array
 * 4. lets check is there has any error
 * 5. if higher variable has smaller number than our current number then value will be our current element
 * 6. return our higher variable and lower variable
 */

let temperature = [-2, 4, 54, 24, -4, "error", -4, -6, 54, 21];

function getHigherAndLower(arr) {
  let higher = arr[0];
  let lower = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;

    // console.log(typeof arr[i]);

    if (higher < arr[i]) {
      higher = arr[i];
    }
    if (lower > arr[i]) {
      lower = arr[i];
    }
  }
  //   console.log(lower, higher);
  return higher - lower;
}

console.log(getHigherAndLower(temperature));
