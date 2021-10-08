function productOfAnyAmountOfNumbers(...args) {
	const nums = [...args];

	// goes through each element in the array being reduced
	// previousProduct = product of all previous elements, assigned the return value of the callbackfn
	// currentNum is the current element of the array
	return nums.reduce((previousProduct, currentNum) => previousProduct * currentNum);
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
