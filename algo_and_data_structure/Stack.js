// Stack data structure impletmentaion

class Stack {
  constructor() {
    this.arr = [];
  }
  added(value) {
    this.arr.push(value);
    return this.arr;
  }
  remove() {
    return this.arr.pop();
  }
  lookUp() {
    return this.arr[this.arr.length - 1];
  }
}

let stack = new Stack();
console.log(stack.added(8));
console.log(stack.remove());
console.log(stack.added(10));
console.log(stack.added(15));
console.log(stack.added(12));
console.log(stack.remove());
console.log(stack.lookUp());
