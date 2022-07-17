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

  // push method
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

  // pop method
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      let removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeNode;
    }

    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    while (currentNode) {
      if (currentNode.next === this.tail) {
        newLastNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    newLastNode.next = null;
    this.tail = newLastNode;
    this.length--;
    return lastNode;
  }
}

let list = new SinglyLinkedList();
// console.log(list);
// console.log(list.isEmpty());
list.push(5);
list.push(8);
list.push(10);
list.push(15);

list.pop();
// console.log(list.isEmpty());
console.log(list);
