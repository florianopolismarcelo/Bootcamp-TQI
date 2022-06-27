function substituiPares(array) {
	if (!array) return -1;
	if (!array.length) return -1;
    
	

	for (let i = 0; i < array.length; i++) {
		if (array[i] === 0) {
			console.log("Você já é zero!");
			
		} else if (array[i] % 2 === 0) {
			console.log(` Substituindo ${array[i]} por 0...`);
		    array[i] = 0;
		}
	}
	return array;
}

let arr = [1, 2, 3, 4, 6, 80, 33, 90];
console.log(substituiPares(false));

/*
function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);
*/