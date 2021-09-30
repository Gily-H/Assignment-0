function titleCaseEdit(title) {

	// split the title into an array of words delimited by " "
	let words = title.split(" ");

	// for each word, uppercase the first letter
	// and concat to remaining letters in the word
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		// console.log(`Current word: ${word}`);

    // assign the newly formed word to the old word's spot in the array
		words[i] = word[0].toUpperCase() + word.slice(1);
		// console.log(`Words: ${words}`);
	}

	// return a string composed of the words separated by " "
	return words.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;