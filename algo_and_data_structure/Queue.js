// Queue data structure implementaion

// FIFO (First in first out)

class Queue {
  constructor() {
    this.arr = [];
  }

  // push
  push(value) {
    this.arr.unshift(value);
    return this.arr;
  }

  // pop
  pop(value) {
    this.arr.shift(value);
    return this.arr;
  }
}

let queue = new Queue();
console.log(queue.push(9));
console.log(queue.push(10));
console.log(queue.push(15));
// console.log(queue.pop());
