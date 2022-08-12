const prompt = require('prompt-sync')();
//1
console.log('Exercício 1');
let quantidadeDinheiro;
quantidadeDinheiro = prompt('Você quer saber quantas notas tem em qual valor?');
let qtdNotas = [0, 0, 0, 0, 0, 0, 0];
let notas = [100, 50, 20, 10, 5, 2, 1];
let i;
let j;
console.log(`${quantidadeDinheiro} possui:`);
for (i = 0; i < notas.length; i++) {
    while (quantidadeDinheiro >= notas[i]) {
        qtdNotas[i]++;
        quantidadeDinheiro -= notas[i];
    }
    console.log(`${qtdNotas[i]} notas de ${notas[i]}`);
}


//2
console.log('Exercício 2');

let salarioPJ = prompt('Digite o salário oferecido pela PJ?');
let salarioCLT = prompt('Digite o salário oferecido pela CLT?');

const salarioSomadoCLT = salario => ((salario * + 0.08) * 13) + 700; //tem que ser 0.08 nao 1.08 pq é tirado 8%, nao aumentado
const salarioSomadoPJ = salario => salario * 12;

console.log(`O salário anual pela PJ é de ${parseInt(salarioSomadoPJ(salarioPJ)).toFixed(2)}`);
console.log(`O salário anual pela CLT é de ${parseInt(salarioSomadoCLT(salarioCLT)).toFixed(2)} e tem férias.`);


//3
console.log('Exercício 3');
const nomes = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];
let nomesJuntos = '';
const retornaNomes = nomes => {
    for (i = 0; i < nomes.length; i++) {
        i == nomes.length - 1 ? nomesJuntos += nomes[i] + '.' : nomesJuntos += nomes[i] + ', ';
    }
}
retornaNomes(nomes);
console.log(nomesJuntos);

//4
console.log('Exercício 4');
let numeroTabuada = prompt('Digite o número para calcularmos a tabuada: ');
let limite = prompt('Digite até que numero você quer multiplicar: ');

for (i = 1; i <= limite; i++) {
    console.log(`${numeroTabuada} x ${i} = ` + numeroTabuada * i);
}

//5
console.log('Exercício 5');
let posi = 0, neg = 0, impar = 0, par = 0;
let arrNum = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

const numPositivos = arrPosi => {
    for (i = 0; i < arrPosi.length; i++) {
        arrPosi[i] >= 0 ? posi++ : null;
    }
}
const numNegativos = arrNeg => {
    for (i = 0; i < arrNeg.length; i++) {
        arrNeg[i] <= 0 ? neg++ : null;
    }
}
const numImpares = arrImpar => {
    for (i = 0; i < arrImpar.length; i++) {
        arrImpar[i] % 2 == 0 ? null : impar++;
    }
}
const numPares = arrPar => {
    for (i = 0; i < arrPar.length; i++) {
        arrPar[i] % 2 == 0 ? par++ : null;
    }
}

numImpares(arrNum);
numNegativos(arrNum);
numPares(arrNum);
numPositivos(arrNum);
console.log(`Array: ${arrNum}`);
console.log(`Quantidade de números:\nPositivos: ${posi}\nNegativos: ${neg}\nImpares: ${impar}\nPares: ${par}\n`);
//6
console.log('Exercício 6');

arrNum = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
let multiplicador = prompt('Você quer multiplicar o vetor por qual número? ');
const funMult = (arrNum, multiplicador) => {
    for (i = 0; i < arrNum.length; i++) {
        arrNum[i] = arrNum[i] * multiplicador;
    }
}

funMult(arrNum, multiplicador);
console.log(arrNum);


//7
console.log('Exercício 7');
let arrNotas = [6, 8, 7, 7, 7, 7, 7, 7, 7.5];
const calculaNota = arrNotas => {
    let media = 0;
    for (i = 0; i < arrNotas.length; i++) {
        media += arrNotas[i];
    }
    return media / arrNotas.length;
}

output = calculaNota(arrNotas);
console.log(output.toFixed(2));

//8
console.log('Exercício 8');
arrNum = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
const serMenor = arrNum => {
    let menor = arrNum[0], position;
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] < menor) {
            menor = arrNum[i];
            position = i;
        }
    }
    console.log(`O menor valor é ${menor} na posição ${position}`);
}

const serMaior = arrNum => {
    let maior = arrNum[0], position;
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > maior) {
            maior = arrNum[i];
            position = i;
        }
    }
    console.log(`O maior valor é ${maior} na posição ${position}`);
}
serMenor(arrNum);
serMaior(arrNum);
//9
console.log('Exercício 9');
let arrListaCompras = [
    { nome: 'maçã', quantidade: 2, valor: 0.5 },
    { nome: 'alface', quantidade: 1, valor: 1.73 },
    { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
]

const calculaPrecoTotal = arrListaCompras => {
    let total = 0;
    for (i = 0; i < arrListaCompras.length; i++) {
        total += (arrListaCompras[i].valor * arrListaCompras[i].quantidade);

    }
    console.log(`R$${total}`);
}

calculaPrecoTotal(arrListaCompras);


//10
console.log('Exercício 10');


//11
console.log('Exercício 11');


//12
console.log('Exercício 12');


//13
console.log('Exercício 13');