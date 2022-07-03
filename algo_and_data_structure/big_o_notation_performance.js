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
console.log(multipleArray(2));
