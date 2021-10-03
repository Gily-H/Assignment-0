function countOfAllOddNumbers(nums) {
	let oddNumberCount = 0;

	for (const number of nums) {
		if (number % 2 !== 0) {
			oddNumberCount++;
		}
	}

	return oddNumberCount;
}

// Do not edit this line;
module.exports = countOfAllOddNumbers;