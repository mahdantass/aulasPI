//Criando objetos
let nomeobjto = {};

let aluno = {
    nome: " João",
    idade: 43,
    cpf: "111.222.333-44",

    ola: function(){
        console.log(`Olá ${this.nome}`);
    }
};
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.enail = "joao;ffcoghi@sp.senac.br";
aluno.cpf = "222.333.444-55";

// console.log(aluno.email);
// console.log(aluno.cpf);

// console.log(aluno);

aluno.ola();