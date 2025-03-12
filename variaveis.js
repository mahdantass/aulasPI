// // var é PROIBIDO

var nome = "amanda";
console.log(nome);
{
     var nome = "carla";
    console.log(nome);
}

console.log(nome);

// // ~~~~~~~~~~LET~~~~~~~~~~/

let nome = "pedro";
console.log(nome);

{
    // console.log(nome); -> não pode
    let nome = "joao";
    console.log(nome);
}

console.log(nome);

// // ~~~~~~~~~~PALAVRAS RESERVADAS~~~~~~~~~~/
// // let while = 14 -> nao pode

let base = 2;
let expoente = 2; 
let resultado = base * expoente;
console.log(resultado);

// // Camel Sense
let nomeCompleto = "joão pedro";
// // Case Sensitive -> diferencia maiusculo de miusculo
let nomecompleto = "maria fernanda";

// // ~~~~~~~~~~CONSTANTES~~~~~~~~~~ -> inicia declarando ela
const nomeConstante = "pietra";

    // ex1 -> criar variaveis e constantes para os dados de uma pesso: nome, sobrenome, ano de nascimento, peso e altura. o programa deve imprimir no console a seguinte frase: "NOME tem IDADE anos, pesa PESO kg e tem ALTURA m de altura"

let nomeCompletoDois = "marcelo dantas";
let anoNascimento = "1977";
let peso = "80";
let altura = "1.70";
console.log(nomeCompletoDois + " tem " + (2025 - anoNascimento) + " anos, pesa " + peso + " kg e tem " + altura + " m de altura ");

