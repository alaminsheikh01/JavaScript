/**
 * write a method to replace all spaces in a string with "%20"
 * Assume that there is sufficient space at the end.
 *
 * input: ("Mr Alamin sheikh ", 13)
 * output: Mr%20Alamin%20sheikh
 *
 * algorithm: o(n)
 * loop through the string until you encounter white space
 * replace with '%20'
 *
 * algorithm
 * check to see if string last element is white space
 * convert string to array
 * join with '%20'
 */

function Urlify(str, n) {
  let newStr = "";

  for (i = 0; i < n; i++) {
    if (str[i] === " ") {
      newStr += "%20";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(Urlify("Mr Alamin Sheikh", 16));

/**
 * output: Mr%20Alamin%20Sheikh
 */
