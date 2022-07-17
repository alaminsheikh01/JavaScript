class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // check is empty or not
  isEmpty() {
    return this.length === 0;
  }

  // push value
  push(value) {
    let newNode = {
      value: value,
      next: null,
    };
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

let list = new SinglyLinkedList();
// console.log(list);
// console.log(list.isEmpty());
list.push(5);
list.push(8);
// console.log(list.isEmpty());
console.log(list);
