//O que são vetores ou arrays

// Como declarar um array

/*let array = ['string', 1, true];
console.log(array);*/

/* pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['Array2'], ['array3'], ["array4"]];
console.log(array[3]);*/

//MANIPULANDO ARRAYS 
//Ao ser declarado, o Array traz consigo uma série de método

// . forEach() - intera um array;
// . push() - add item no final do array;
// . pop() - remove item no final do array;
// . shift() - remove item no inicio do array;
// . unshift() - add item no início do array;
// . index() - retorna o índice de um valor;
// . splice() - remove ou substitui um item pelo índice;
// . slece() -retorna uma parte de um array existente;

/* . forEach() - intera um array;
array.forEach(function(item, index){console.log(item, index)});
*/

/* . push() - add item no final do array;
array.push([]);
console.log(array);*/

/* . pop() - remove item no final do array;
array.pop();
console.log(array);*/

/* . shift() - remove item no inicio do array;
array.shift();
console.log(array);*/

/* . unshift() - add item no início do array;
array.unshift('novo item no inicio');
console.log(array); */

// . index() - retorna o índice de um valor;
/*console.log(array.lastIndexOf(true));*/

/* . splice() - remove ou substitui um item pelo índice;
array.splice(0,3)
console.log(array);*/

/* . slece() -retorna uma parte de um array existente;
let novoArray = array.slice(0, 3);
console.log(novoArray);*/


//OBJETOS

/* Dados que possui propriedades e valores que definem
suas características. Deve ser declarado entre chaves "{}".

Ex: imagine uma xícara azul, ela tem cor, pode ter vários
tamanhos e funções, pode ser declarada assim:

var xicara = {
    cor: 'azul',
    tamanho: 'p',
    funca.tomarCafe()
}

//MANIPULANDO OBJETOS

As propriedades de objetos poder ser atribuidas à variáves,
facilitando a manipulação do objeto. Chamamos isso de 
desestruturação.

Ex: var cicara ={ cor: 'azul', tamanho: 'p', funca.tomarCafe()}
 var cor = xicara.cor;
 var tamanho = xicara.tamanho;
 var funcao = tomarCafe();
*/


let objeto = {string: 'string', Number: 1, Boolean: true, Array:["Array"], objetcInterno: {
objetcInterno: 'objeto interno'}};

// console.log(objeto); /* Aqui traz todo objeto */

//console.log(objeto.string) /* Aqui traz apenas o objeto string */

console.log(objeto.objetcInterno) /* Aqui traz apenas o objeto Interno */


// DESESTRUTURAÇÃO ABAIXO:

var string = objeto.string;
console.log(string);

// OUTRO TIPO DE DESESTRUTURAÇÃO

var arrayInterno = Object.array;
console.log(arrayInterno);