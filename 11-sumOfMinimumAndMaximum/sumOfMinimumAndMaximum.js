function sumOfMinimumAndMaximum(nums) {
  // assuming the array nums is not sorted, 
  // need to loop through entire array

  let minNum = nums[0];
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    } else if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }
  
  return minNum + maxNum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;