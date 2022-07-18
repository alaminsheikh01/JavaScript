/**
 * find plainedromes
 * plindrome("abba") === true
 * palindroem("abcdefg") === false
 */

/**
 * palindrome mean when you will get same thing from reverse string like "abba"
 * if you will reverse this stirng then you will get same "abba"
 * now we need to check if it is plandrome or not, if palindrome then return true otherwise false;
 */

const Palindrome = (str) => {
  const isPalindrome = str.split("").reverse().join("");
  if (str === isPalindrome) {
    return true;
  } else {
    return false;
  }
};

console.log(Palindrome("abba"));
