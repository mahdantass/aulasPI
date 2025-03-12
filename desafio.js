const prompt = require('prompt-sync')();

//criar um input, criar duas classes 
// 1 - carro -> modelo e o valor
// 2 - carrinho -> total e itens [] > vetor 
// carrinho -> adicionar item(), removem item(), fechar compra()
//estoque de carro > carros [] veotr
// aparecer no console: 1 - adicionar carro no carrinho; 2 - remover carro do carrinho; 3 - fechar compra
//4 - sair (só pode encerrar ao sair ou finalizar compra)
class Carro{
    constructor(modelo, valor){
        this.modelo = modelo;
        this.valor = valor;
    }
}

class Carrinho{
    constructor(total, itens){
    this.total = 0;
    this.itens = [];
   
    }
    adicionarItem(item){
       this.itens.push(item);
    }
    // calcularTotal(){
    //     for(item of this.itens){
    //         this.total += item.valor;
    //     }
    //     return this.total;
    // }
    // removerItem(item){
    //     for(let i = 0; i < this.itens.length; i++)
    //         if(item === itens[i])
    //     this.itens.splice(indice, 1);
    // }  
    //     let indice = this.itens.indexOf(item);
    //     if(indicw !== -1){
    //         this.itens.splice(indice,1)
    //     }else{
    //         console.log("Carro não encontrado");
    //     }
    // }

let carrinho = new Carrinho(0, []);

let carro1 = new Carro("Fiat Mobi", 49900);
let carro2 = new Carro("Hyundai HB20", 69990);
let carro3 = new Carro("Toyota Corolla", 99990);
let carro4 = new Carro("Jeep Compass", 129990);
let carro5 = new Carro("Chevrolet Spark", 58000);

while(opcao != 3 && opcao != 4) {
console.log("Bem vindo ao Venda de Carros Online!");
console.log("1 - Adicionar carro ao carrinho");
console.log("2 - Remover carro do carrinho");
console.log("3 - Fechar compra");
console.log("4 - Sair");

let opcao = parseInt(prompt("Selecione uma das opções: "));


if(opcao == 1){
    console.log(`
        Qual modelo gostaria de acrescentar ao carrinho?
        ------------------------------------------------
        1 - ${carro1.modelo} R$${carro1.valor} 
        2 - ${carro2.modelo} R$${carro2.valor} 
        3 - ${carro3.modelo} R$${carro3.valor}
        4 - ${carro4.modelo} R$${carro4.valor}
        5 - ${carro5.modelo} R$${carro5.valor}`);

        let opcaoAdicionar = parseInt(prompt("Selecione o modelo: ")); 
        
        switch(opcaoAdicionar){
            case 1:
                carrinho.adicionarItem(carro1);
                console.log(`${carro1.modelo} adicionado ao carrinho!`);
                break;
            case 2:
                carrinho.adicionarItem(carro1);
                console.log(`${carro2.modelo} adicionado ao carrinho!`);
                break;
            case 3:
                carrinho.adicionarItem(carro1);
                console.log(`${carro3.modelo} adicionado ao carrinho!`);
                break;
            case 4:
                carrinho.adicionarItem(carro1);
                console.log(`${carro4.modelo} adicionado ao carrinho!`);
                break;
            case 5:
                carrinho.adicionarItem(carro1);
                console.log(`${carro5.modelo} adicionado ao carrinho!`);
                break;
        }
        
}
else if(opcao == 2){
    console.log(`
        Qual modelo você gostaria de remover do carrinho?
        ------------------------------------------------
        1 - ${carro1.modelo} R$${carro1.valor} 
        2 - ${carro2.modelo} R$${carro2.valor} 
        3 - ${carro3.modelo} R$${carro3.valor}
        4 - ${carro4.modelo} R$${carro4.valor}
        5 - ${carro5.modelo} R$${carro5.valor}`);

        let opcaoRemover = parseInt(prompt("Selecione o modelo: ")); 

        switch(opcaoRemover){
            case 1:
                carrinho.removerItem(carro1);
                console.log(`${carro1.modelo} removido do carrinho!`);
                break;
            case 2:
                carrinho.removerItem(carro1);
                console.log(`${carro2.modelo} removido do carrinho!`);
                break;
            case 3:
                carrinho.removerItem(carro1);
                console.log(`${carro3.modelo} removido do carrinho!`);
                break;
            case 4:
                carrinho.removerItem(carro1);
                console.log(`${carro4.modelo} removido do carrinho!`);
                break;
            case 5:
                carrinho.removerItem(carro1);
                console.log(`${carro5.modelo} removido do carrinho!`);
                break;
        }
    }
}
