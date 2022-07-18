const reverseInt = (n) => {
  return parseInt(n.toString().split("").reverse().join(""));
};

console.log(reverseInt(123));

/**
 * output: 15
 */
