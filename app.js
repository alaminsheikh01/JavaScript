// var arrayName = ["Alamin", "sheikh", "Karim", "Rahim"];
// console.log(arrayName);
// console.log(arrayName.length);
// console.log(arrayName["length"]);

// for (var i = 0; i < arrayName.length; i++) {
//   console.log("name: ", arrayName[i]);
// }

// console.log(arrayName.indexOf("Karim"));
// console.log(arrayName.splice(1, 2));
// console.log(arrayName);

// function myFunction(name, callback) {
//   var myAge = 10;
//   callback(myAge);
//   console.log("Is it interesting? Yes it is Mr. " + name);
// }
// function hello(age) {
//   console.log("age is: " + age);
// }

// const a = myFunction("Alamin", hello);
// console.log(a);

// console.log(this === window);

// function unNamed() {
//   this.name = "alamin sheikh";
// }
// unNamed();
// console.log(window.name);
// console.log(this.name);

// var myCustomObject = {
//   name: "alamin Shiekh",
//   age: 32,
//   msg: function () {
//     console.log(this);
//   },
// };

// myCustomObject.msg();

var a = 10,
  b = 30;

console.log("before swap value of a: " + a + " and value of b: " + b);

function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
  console.log("after swap a is: " + a + " and b is: " + b);
}

swap(a, b);

var numbers = [12, 34, 54, 21, 65, 78];

var findNum = numbers.map(function (theNum) {
  return theNum === 12;
});
console.log(findNum);
