const prompt = require('prompt-sync')();

// let nome = prompt('Digite seu nome: ');
// console.log(`Olá ${nome}`);

// // ex1 - solicite que o usuario infrome seu nome e idade e imprima na tela a mensagem: 
// // NOME tem IDADE anos

let nomeUsuario = prompt('Digite seu nome: ');
let idadeUsuario = prompt('Digite sua idade: ');
console.log(`${nomeUsuario} tem ${idadeUsuario} anos`);

// ex2- faça um programa para calcular o valor final de um produto após o vendor informar o 
// NOME DO PRODUTO, VALOR INICIAL, DESCONTO. o programa deve imprimir na tela: NOME DO 
// PRODUTO: R$ VALOR FINAL.

let nomeProduto = prompt('Digite o nome do produto: ');
let valorInicialProduto = parseInt(prompt('Digite o valor do produto: '));
let descontoProduto = parseInt(prompt('Digite o desconto do produto: '));
let valorFinal = (valorInicialProduto - descontoProduto);
console.log(`nome do produto: ${nomeProduto} e valor final: ${valorFinal}`);

// ex3 - usuario deverá digitar 3 notas e o programa deverá retorna a média das notas;

let notaUm = parseInt(prompt('Digite sua primeira nota: '));
let notaDois = parseInt(prompt('Digite sua segunda nota: '));
let notaTres = parseInt(prompt('Digite sua terceira nota: '));
let media = (notaUm + notaDois + notaTres) / 3;
console.log(`Sua média é: ${media}`);

// ex4 - usuario deve digitar a quantidade de votos para o candidato A, para o candidato
// B, nulos e branco. O programa deverá retornar a porcentagem de votos para cada candidato e
// nulos e branco.

let votosCandidatoA = Number(prompt('Digite os votos do candidato A: '));
let votosCandidatoB = Number(prompt('Digite os votos do candidato B: '));
let nulos = Number(prompt('Digite os votos nulos: '));
let brancos = Number(prompt('Digite os votos brancos: '));
let total = (votosCandidatoA + votosCandidatoB + nulos + brancos);

let totalCandidatoA = (votosCandidatoA / total) * 100;
let totalCandidatoB = (votosCandidatoB / total) * 100;
let totalBrancos = (brancos / total) * 100;
let totalNulos = (nulos / total) * 100;

console.log(`A porcentagem de votos do candidato A é: ${totalCandidatoA}%`);
console.log(`A porcentagem de votos do candidato B é: ${totalCandidatoB}%`);
console.log(`A porcentagem de votos brancos é: ${totalBrancos}%`);
console.log(`A porcentagem de votos nulos é: ${totalNulos}%`);


// ex5 - usuario digitará o salario bruto de um funcionario e o porgrama deverá mostrar na tela
// todos os descontos(INSS = 7%,  IR = 15%) e mostrar qual o salario liquid do funcionario

let salarioBruto = Number(prompt('Digite o salario bruto do funcionário: R$'));

let salarioLiquidoInss = salarioBruto * 0.07; 
let salarioLiquidoIr = salarioBruto * 0.15;

let descontoInss = salarioBruto - salarioLiquidoInss;
let descontoIr = salarioBruto - salarioLiquidoIr;
let salarioLiquido = salarioBruto - salarioLiquidoInss - salarioLiquidoIr;

console.log(`O salario liquido com o desconto do INSS (7%): R$${descontoInss}`);
console.log(`O salario liquido com o desconto do IR (15%): R$${descontoIr}`)
console.log(`O salario liquido total do funcionrio será: R$${salarioLiquido}`);

