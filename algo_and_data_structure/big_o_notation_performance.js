//  way one // big 0(n)
function sumOfAll(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// console.log(sumOfAll(10));

// way two // best case for performance // big 0(1)
function sumOfAll(n) {
  return (n * (n + 1)) / 2;
}
// let time1 = performance.now();
// console.log(sumOfAll(5));
// let time2 = performance.now();

// console.log(`your time ${time1 - time2} / 1000`);

// big 0(n)2
function multipleArray(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}
// console.log(multipleArray(2));

/**
 * space complexity
 */

// sum of one dimentional array // big o(1) // reason here depand on total
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// console.log(sum([23, 4, 6]));

// space compixity of big o(n) // which is depand on array
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
console.log(double([4, 3, 4]));

// find and delete a unique name

function uniqueName(arr) {
  let uniqueName = [];

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];

    if (!uniqueName.includes(ele)) {
      uniqueName.push(ele);
    }
  }
  return uniqueName;
}

let nameArray = ["alamin", "sheikh", "alamin", "awal", "sheikh", "alamin"];
console.log(uniqueName(nameArray));
