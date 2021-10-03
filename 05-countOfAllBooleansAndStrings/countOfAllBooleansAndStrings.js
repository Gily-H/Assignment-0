function countOfAllBooleansAndStrings(arr) {
	let booleanAndStringCount = 0;

	for (const element of arr) {
		// typeof checks the element's data type
		if (element === true || element === false || typeof element === "string") {
			booleanAndStringCount++;
		}
	}

	return booleanAndStringCount;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;