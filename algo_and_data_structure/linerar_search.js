const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function search(num) {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return i;
    }
  }
  return "Item not found!";
}

console.log(search(7));
