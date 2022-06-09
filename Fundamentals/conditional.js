// 1
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance)

// 2
if ("cat" === "dog") {
  var outcome = "if block";
} else {
  var outcome = "else block";
}
console.log(outcome)

// 3
if (false) {
  var outcome = "if block";
} else if (true) {
  var outcome = "else if block";
} else {
  var outcome = "else block";
}

console.log(outcome)

// 4
if (false) {
  var outcome = "if block";
} else if (true) {
  var outcome = "first else if block";
} else if (true) {
  var outcome = "second else if block";
} else {
  var outcome = "else block";
}
console.log(outcome)


// 5
let time;
if(time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting)

// 6
