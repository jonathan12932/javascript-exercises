const palindromes = function(word) {

	word = word.toLowerCase().replace(/[^a-z0-9]/g, "");
	let toCompare = "";

	for (let x = word.length - 1; x >= 0; x--) {

		toCompare += word.substring(x, x + 1);
	}

	return toCompare.toLowerCase() == word.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
