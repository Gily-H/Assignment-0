function countOfAllBooleans(arr) {
	let booleanCount = 0;

  // for each element, check for strict equality with true or false
  for (const element of arr) {
    // strict equality, "true" and "false" as string data types are not counted
    if (element === true || element === false) {
      booleanCount++;
    }
  }

	return booleanCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;