function countOfAllBooleans(arr) {
	let booleanCount = 0;

  // for each element, check for strict equality with true or false
  for (const element of arr) {
    if (element === true || element === false) {
      booleanCount++;
    }
  }

	return booleanCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;