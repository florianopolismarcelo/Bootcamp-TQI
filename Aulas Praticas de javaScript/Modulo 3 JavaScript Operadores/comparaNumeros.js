/*## Atividade

- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

Exemplo:

```
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
```


// USANDO IF COM RETURN AO IVÉS DE ELSE
function comparaNumeros(num1, num2) {
	const saoIguais = num1 === num2;
	const soma = num1 + num2;

	if (saoIguais) {
		return "São iguais";
	}
	return "Não são iguais";
}

// USANDO PONTO DE ! (NÃO)
function comparaNumeros(num1, num2) {
	const saoIguais = num1 === num2;
	const soma = num1 + num2;

	if (!saoIguais) {
		return "Não são iguais";
	}
	return "São iguais";
}

// USANDO IF TERNÁRIO
function comparaNumeros(num1, num2) {
	const saoIguais = num1 === num2;
	const soma = num1 + num2;

	return saoIguais ? "São iguais" : "Não são iguais";
	
}

*/

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
// CÓDIGO ABAIXO FEITO POR MIM:


function comparaNumeros(num1, num2) {
	if (!num1 || !num2) return "Defina dois número!";
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let saoIguais = '';

	if (num1 != num2) {
		saoIguais = 'não';
	}

	return `Os números ${num1} e ${num2} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let resultado10 = 'menor';
	let resultado20 = 'menor';
	const compara10 = soma > 10;
	const compara20 = soma > 20;


	if (compara10) {
		resultado10 = 'maior';
	}

	if (compara20) {
		resultado20 = 'maior';
	}

	return `Sua soma é ${soma}, que é ${resultado10} do que 10 e ${resultado20} do que 20.`;
}

console.log(comparaNumeros(1, 2)); 





//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------

// CÓDIGO ABAIXO FEITO PELA PROFESSORA:
/*

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));  
*/