function countOfAllNumbersSmallerThanTarget(nums, target) {
  let smallerThanTargetCount = 0;

  for (const number of nums) {
    if (number < target) {
      smallerThanTargetCount++;
    }
  }

  return smallerThanTargetCount;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;