// // *****ARRAY*****
// // // criando um vetor
const vetor1 = [1, 2, 3, 4, 5];
const vetor2 = ["banana", "maça", "melão"];
const vetor3 = [true, false];
// // // const vetor4 = [1, "banana", false] -> não fazer isso

// // // ~~~~~~METODOS DOS VETORES~~~~~~~~
// // // push() -> adicionar um elemento ao final do vetor
const vetor = [1, 2, 3];
vetor.push(4);
console.log(vetor);

// // // unshift() -> adiciona um elemento no início do vetor
vetor.unshift(0);
console.log(vetor);

// // // concat() -> concatenar 2 vetores
const vetorUm = [5, 6, 7];
const novoVetor = vetorUm.concat(vetor1);
console.log(novoVetor);

// // ~~~~~~~REMOVER ELEMENTO~~~~~~~
// // pop() -> remove o ultimo elemento do vetor
const vetorDois = [1, 2, 3];
vetorDois.pop();
console.log(vetorDois);

// acessar elemento 
const nomes = ["amanda", "joao", "breno", "carla"];
console.log(nomes[2]);

// // tamanho do vetor
// const tamanho = vetor.length

// percorrer um vetor
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

// froma 2 - percorrer vetor
// for -> of
for(let nome of nomes){
    console.log(nome);
}