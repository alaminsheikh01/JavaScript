const obj = {
  prop1: "Hello",
  prop3: function () {
    console.log("I'm a property dude!");
  },
};

console.log(obj.prop1);
console.log(obj.prop3());
console.log(obj["prop1"]);
