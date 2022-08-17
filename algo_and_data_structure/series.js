function series(val) {
  let add = 1;
  for (let i = 0; i <= val; i++) {
    add = add + i + " ";
  }
  console.log(add);
}

console.log(series(8));
