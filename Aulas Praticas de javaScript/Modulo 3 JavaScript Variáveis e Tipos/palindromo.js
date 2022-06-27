// solução 1
function verificaPalindromo(string) {
	if (!string) return "String inexistente";
	
	return string.split("").reverse().join("") == string;
}


// solução 2
//omo
//012
//abbbba
//012345

function varificaPalindromo2(string) {
	if (!string) return "String inexistente";
	

	for (let i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(varificaPalindromo2('aba'));



/*/ solução 1
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');

// solução 2

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa'); */
