// step 1 - Put a pointer at each extreme of the word
// step 2 - Iterate the stirng "inwards"
// step 3 - At each iteration, check if the pointers repersent equal values
// If this condition isn't accomplished, the word isn't a palindrome

function isPalindrome(word) {
  let left = 0;
  //   console.log(word.length);
  //   console.log(word.length - 1);
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("eye"));
// console.log(isPalindrome("alamin"));
