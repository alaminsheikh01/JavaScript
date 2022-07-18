/**
 * give a stirng
 * reverse it
 * reverse ('apple') === 'elppa'
 * reverse('Greetings!') === '!sgniteerG'
 */

/**
 * solution 1
 * given stirng = convert it into array
 * reverse it the array
 * turn the array back into string
 */

const revString = (str) => {
  const arr = str.split("");
  arr.reverse();
  str = arr.join("");
  console.log(str);
};
revString("apple");

/**
 * solution 2
 * given string = create empty string
 * loop throught each character
 * return the reversed
 */

(function (str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  console.log(reversed);
})("Greetings!");
