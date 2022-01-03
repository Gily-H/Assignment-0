// palindrome -> letters from start-middle === letters from end-middle
function isPalindrome(word) {

  const halfWordLength = Math.floor(word.length / 2);
  const lastIndexOfWord = word.length - 1;

  // loop through letters in first half of the word and compare
  // with letters of second half starting from the last letter going to middle letter
  for (let i = 0; i < halfWordLength; i++) {
    
    // if any letters do not match, not a palindrome
    if (word[i] !== word[lastIndexOfWord - i]) {
      return false;
    }
  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
