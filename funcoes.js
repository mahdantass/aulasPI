function saudacao(){
    console.log('Olá mundo');
}

saudacao();

function soma(a,b){
    return a + b; //a e b sao parametros
}

console.log(soma(2,3)) //2, 3 sao argumentos

// // função anonima
const sub = function(a, b){
    return a - b;
}

// console.log(sub(3,2));

// // função seta
const subtracao = (a,b) => {
    return a - b;
}

// função recursiva

function fatorial(a){
    if(a===1){
        return 1
}
    return a * fatorial(a-1);
}

console.log(fatorial(3))

