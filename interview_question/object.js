//Object in JavaScript;

/*
const user = {
  name: "Alamin Sheikh",
  age: 22,
};

user.name = "Sheikh alamin";
delete user.name;
console.log(user);
*/

// const func = (function (a) {
//   delete a; // delete property just delete from an object not in the local variable
//   return a;
// })(5);
// console.log(func);

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a["[object Object]"] = 123;
// a[c] = 456;

// console.log(a);

// output: [object Object]: 456

// -------------------question 4 - what is JSON.strigify and JSON.parse ?-----------------------
// convert object to string and again convert string to object

/*
const user = {
  name: "alamin",
  age: 22,
};
console.log(user);
console.log(user.name); // find data from normal object

let strObj = JSON.stringify(user);
localStorage.setItem("test", strObj); // save data in the localStorage as a string.
console.log(JSON.parse(strObj)); // again make an object from string using parse

// access data from localStorage;
console.log(JSON.parse(localStorage.getItem("test")).name);

*/

// ____________________question 5 - what is the output;

console.log([..."Lydia"]);

/*
output: 
(5) ['L', 'y', 'd', 'i', 'a']
0: "L"
1: "y"
2: "d"
3: "i"
4: "a"
length: 5
*/

const user = { name: "Alamin", age: 21 };
const admin = { admin: true, ...user };
console.log(admin);
// output: {admin: true, name: 'Alamin', age: 21}

const settings = {
  username: "alamin",
  level: 22,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
// output: {"level":22,"health":90}
