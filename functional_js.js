function test() {
  let name = "Alamin Sheikh";
  function inner() {
    console.log(name);
  }
  return inner;
}

var name = "Shekh Alamin";
const inner = test();
//console.log(inner); // functional programming
//console.dir(inner); // function must be first class citizen
/**
 * function also is an object.
 * object is a value.
 */

function fun() {
  console.log("function is fun so far so");
}
console.log(typeof fun);

const log = new Function(`console.log("Hello world")`);
log();

function spliteName(name) {
  const names = name.split(" ");

  return {
    firstName: names[0],
    lastName: names[1],
  };
}
console.log(spliteName("Alamin Sheikh"));

/**
 * callback
 */

function sum(a, b) {
  return a + b;
}

function calculate(a, b, cb) {
  return cb(a, b);
}

console.log(calculate(3, 4, sum));

const cb = () => {
  console.log("Hello from callback");
};

setTimeout(cb, 5000);

const data = [1, 2, 3].map((a) => a * 2);
console.log(data);

const data2 = setTimeout(() => {
  return 100;
});

// console.log(data2);

function parent() {
  let money = 1000;

  function child() {
    console.log("I am taking 500 from parent");
    money -= 500;
  }

  child();
  return money;
}

console.log(parent());
