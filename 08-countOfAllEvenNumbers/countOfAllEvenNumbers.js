function countOfAllEvenNumbers(nums) {
	let evenNumberCount = 0;

	for (const number of nums) {
		if (number % 2 === 0) {
			evenNumberCount++;
		}
	}

	return evenNumberCount;
}

// Do not edit this line;
module.exports = countOfAllEvenNumbers;