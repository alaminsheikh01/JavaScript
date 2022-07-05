function charCount(str) {
  let charList = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (charList[char] > 0) {
      charList[char]++;
    } else {
      charList[char] = 1;
    }
  }
  return charList;
}

console.log(charCount("hello Everyone"));

/**
 * output: { h: 1, e: 4, l: 2, o: 2, ' ': 1, v: 1, r: 1, y: 1, n: 1 }
 */
