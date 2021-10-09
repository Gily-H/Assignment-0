class MySolution {
	constructor() {
		this.flag = false; // this is optional to use;
	}

	binarySearch(nums, target) {
    let start = 0;
		let end = nums.length - 1;
		let mid = Math.floor(end / 2);

      // console.log("This is the nums array", nums);
      // console.log("This is the target value", target);
      // console.log("This is the mid index", mid);
      // console.log();

		// base case
		if (nums[mid] === target) {
			return true;
		}
    
    // if target greater, get the second half of the array
    // else if target smaller, get the first half of the array
    nums[mid] < target ? start = mid + 1 : end = mid - 1;
    
    // slice() - substrings the array without altering the original
    // start value included, end value excluded
		let subArray = nums.slice(start, end + 1);
      // console.log("This is the subarray", subArray);
      // console.log();

		// base case
		if (subArray.length < 1) {
			return false;
		}

    // recursive call
		this.flag = this.binarySearch(subArray, target);
      // console.log("This is the output", this.flag);

    return this.flag;
	}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
