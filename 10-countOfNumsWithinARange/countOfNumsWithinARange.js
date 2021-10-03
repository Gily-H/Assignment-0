function countOfNumsWithinARange(nums, start, end) {
	let numsInRangeCount = 0;

	for (const number of nums) {
		// increment count if number is in range from start to end, both inclusive
		if (number >= start && number <= end) {
			numsInRangeCount++;
		}
	}

	return numsInRangeCount;
}

// Do not edit this line;
module.exports = countOfNumsWithinARange;