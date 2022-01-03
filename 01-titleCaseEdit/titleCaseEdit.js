function titleCaseEdit(title) {

	// separate title into list of single words
	let words = title.split(" ");

	// uppercase first letter of each word
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		// console.log(`Current word: ${word}`);
		
		words[i] = word[0].toUpperCase() + word.slice(1);
		// console.log(`Words: ${words}`);
	}

	return words.join(" "); // recreate sentence with proper capitalization
}

// Do not edit this line;
module.exports = titleCaseEdit;