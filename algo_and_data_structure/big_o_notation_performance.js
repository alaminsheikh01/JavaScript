//  way one
function sumOfAll(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// console.log(sumOfAll(10));

// way two // best case for performance
function sumOfAll(n) {
  return (n * (n + 1)) / 2;
}
let time1 = performance.now();
console.log(sumOfAll(5));
let time2 = performance.now();

console.log(`your time ${time1 - time2} / 1000`);
