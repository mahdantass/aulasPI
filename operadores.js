// OPERADORES MATEMATICOS


// PADRÃO: +, -, /, *
// NOVO: ** -> potencialização

// ~~~~~UNÁRIO -> INCREMENTO (++) E DECREMENTO (--)~~~~~~
// -> PRE FIXADO -> depois devolve o valor
// ++a
// --a

// -> PÓS FIXADO -. primeiro devolve o valor
// a++
// a--

let contador = 0;
console.log(contador++);
console.log(contador);

// ATRIBUIÇÃO
// * adição -> +=
// * subtração -> -=
// * multiplicação -> *=
// * divisão -> /=
// * resto -> %=
// * potencialização -> **=

let numero = 1;
let passo = 2;

numero += passo;
numero *= passo;
numero -= passo;
numero %= passo;
numero **= passo;

console.log(numero);

// ex1 -> imc
// Homens = 61,2 + (altura -1,6) * 53,5

// Mulheres = 53,6 + (altura - 1,52) * 53,5

let altura = 188;
let peso = 150;
let resultado = peso/(altura**2);

console.log(resultado);

const numb = "5.5"; // string
let resposta = parseFloat(numb); //-> float: quebrados ; int: inteiros
// let resultado = parseInt(numb)
console.log(resposta ** 10);

