function findTwoSumOfArray(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === value) {
        return [arr[i], arr[j]];
      }
    }
  }
}

const result = findTwoSumOfArray([1, 2, 3, 6, 5, 4, 8, 7], 10);

console.log(result);
