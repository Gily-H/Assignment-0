function countOfAllIndexMatchingNumbers(nums) {
  let indexMatchingNumberCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      indexMatchingNumberCount++;
    }
  }

  return indexMatchingNumberCount;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;