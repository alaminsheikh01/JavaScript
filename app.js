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

function fun() {
  console.log("function is fun so far so");
}
console.log(typeof fun);
