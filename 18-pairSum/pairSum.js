function pairSum(nums, target) {
  
  // need at least two numbers to form a pair
  if (nums.length <= 1) {
    throw error("Unable to form a pair with given list of numbers");
  }
  
  // holds the second number needed to reach the target value
  let neededNums = new Set();  
  
  for (let i = 0; i < nums.length; i++) {
    // searching for an item in a set is constant time
    if (neededNums.has(nums[i])) {
      return true;
    } 

    // add to the set, the number needed to pair 
    // with the current number to reach the target
    targetDiff = target - nums[i];
    neededNums.add(targetDiff);
  }
  
  return false;
}

// Do not edit this line;
module.exports = pairSum;