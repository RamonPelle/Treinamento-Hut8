//1
console.log('Parte 1\n');

// ---- usando variáveis normais ---- -> N no fim das variáveis para separar
const nomeN = "Ramon";
const sobrenomeN = "Pelle";
const diaN = "0" + 4;
const mesN = "0" + 4;
const anoN = 2003;
const primeiraNotaN = 9;
const segundaNotaN = 6.5;

let anoAtual = 2022;
const mediaN = (primeiraNotaN + segundaNotaN) / 2;
console.log("Nome completo: " + nomeN + " " + sobrenomeN);
console.log("Idade: " + (anoAtual - anoN));
console.log("Data de nascimento: " + diaN + "/" + mesN + "/" + anoN);
console.log("Média: " + mediaN);

// ---- usando objeto e array ----
console.log('\nSolução alternativa\n');

let pessoa = {
    nomeO: 'Ramon',
    sobrenomeO: 'Pelle',
    dataNascimentoO: ["0" + 4, "0" + 4, 2003],
    primeiraNotaO: 10,
    segundaNotaO: 9,
};

let mediaO = (pessoa.primeiraNotaO + pessoa.segundaNotaO) / 2

console.log("Nome completo: " + pessoa.nomeO + " " + pessoa.sobrenomeO);
console.log("Idade: " + (anoAtual - pessoa.dataNascimentoO[2]));
console.log("Data de nascimento: " + pessoa.dataNascimentoO[0] + "/" + pessoa.dataNascimentoO[1] + "/" + pessoa.dataNascimentoO[2]);
console.log("Média: " + mediaO);
//2
// ---- usando variáveis normais ----
console.log('\nParte 2\n');
let numero1 = 5;
let numero2 = 10;
let numero3 = 15;

let somaNormal = numero1 + numero2 + numero3;
console.log("Soma normal: " + somaNormal);

// ---- usando array ----
let numeros = [5, 10, 15];

let somaArrayNormal = numeros[0] + numeros[1] + numeros[2];

console.log("Soma com array: " + somaArrayNormal);

// ---- usando array e repetição e ``----
let somaArrayFor = 0;
let i;
for (i = 0; i < 3; i++) {
    somaArrayFor += numeros[i];
}
console.log(`Soma de array com repetição: ${somaArrayFor}`);