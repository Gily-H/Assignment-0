// palindrome -> letters from start-middle === letters from end-middle
function isPalindrome(word) {

  // loop through letters in first half of the word and compare 
  // with letters of second half starting from the last letter going to middle letter
  for (let i = 0; i < word.length / 2; i++) {

    // if any letters do not match, not a palindrome
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;