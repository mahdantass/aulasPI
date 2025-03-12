// const input = require('prompt-sync')();
// // logica condicional
// // if - else simples
// // if - else encadeado
// // if - else if - else
// // ternário
// // switch case (escolha caso)

const numero = 3;
 if(numero > 3){
     console.log('Maior')
 }else{
     console.log('Não é maior')
 }

// // if - else encadeado
 if(numero == 3){
     if(numero > 3){
         console.log('Maior');
     }
     else{
         console.log('Igual')
     }
 }else{
     console.log('Menor');
 }

// // if - else if - else
 if(numero == 3){
     console.log('Igual');
 }
 else if(numero > 3){
     console.log('Maior');
 }
 else{
     console.log('Menor');
 }

// // logica condicional -> && e ||
 if(numero < 2 || numero > 4){
     console.log('Temos o numero 3');
 }
 else if( numero < 2 || numero > 4){
     console.log('Não temos o numero 3');
 }

// // ternário
 let mensagem = (numero == 3) ? 'Igual' : 'Não é igual';
 console.log(mensagem)

// // quero saber se o numero é positivo ou negativo 
 if(numero > 0){
     console.log('Positivo')
 }
 else if(numero < 0){
     console.log('Negativo')
 }
 else{
     console.log('Zero')
 }

 mensagem = (numero > 0) ? 'Positivo' : (numero < 0) ? 'Negativo' : 'Zero';
 console.log(mensagem);

// // switch case
 switch(numero){
     case 1:
        console.log('Segunda feira');
             break;
     case 2:
        console.log('Terça feira');
           break;
     case 3:
        console.log('Quarta feira');
             break;
     default:
        console.log('Data incorreta');       

 numero++
 }

// laço de repetição
// while - enquanto
 while(numero < 6){
    console.log(numero);
 }

// for
for(let i = 0; i = < 4; i++){
     console.log(i);
}
 console.log(i);

 let n = 100;
 {
     let n = 200;
    console.log(n);
}
 console.log(n);

// do while
 do{
 console.log(numero);
numero--;
}while(numero > 0);

// ex1 -> faça um programa que mostrará na tela todos os números entre 1 e 100
let numero = 1;
while(numero < 101){
    console.log(numero)
    numero++;
}
// // exe. faça um programa que mostrará na tela todos os números entre 1 e 100. 1- quando o valor for múltiplo de 3 deve aparecer "fizz". 2- quando o valor for múltiplo de 5, deve aparecer "buzz". 3- quando o valor for múltiplo ed 3 e 5 ao mesmo tempo, deve aparecer 'fizz buzz".
let numer = 0
while(numer < 100) {
    numer++;
 if (numer % 3 == 0 && numer %5 == 0 ) {
    console.log(numer + ' fizz buzz')
} else if (numer % 3 == 0) {
    console.log(numer + ' fizz')
} else if (numer % 5 == 0) {
    console.log(numer + ' buzz')}
    else {
        console.log(numer);
    }
} 

// exe.2
const nseioq = 
switch(numero){
    case 1:
        console.log('atacar');
        break;
    case 2:
        console.log('defender');
        break;
    case 3:
        console.log('fugir da batalha');
        break;
    
}
