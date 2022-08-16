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
console.log('Exercício 10 - falta ordenar por senioridade');
const bd = [
    {
        nome: "João",
        idade: 30,
        salario: 15000,
        senioridade: "senior"
    },
    {
        nome: "Pedro",
        idade: 22,
        salario: 10000,
        senioridade: "pleno"
    },
    {
        nome: "Carla",
        idade: 27,
        salario: 1500,
        senioridade: "estagio"
    },
    {
        nome: "Lucas",
        idade: 35,
        salario: 15000,
        senioridade: "senior"
    },
    {
        nome: "Roberta",
        idade: 45,
        salario: 5000,
        senioridade: "junior"
    },
    {
        nome: "Patrícia",
        idade: 19,
        salario: 10000,
        senioridade: "pleno"
    },
    {
        nome: "Joana",
        idade: 23,
        salario: 5000,
        senioridade: "junior"
    }
];

const idadeCrescente = bd => {
    return bd.sort((a, b) => a.idade - b.idade);
}
const idadeDecrescente = bd => {
    return bd.sort((a, b) => b.idade - a.idade); //tambem funciona: (a.idade - b.idade).reverse() ou return idadeCrescente(bd).reverse();
}
const salarioCrescente = bd => {
    return bd.sort((a, b) => a.salario - b.salario);
}
const salarioDecrescente = bd => {
    return bd.sort((a, b) => b.salario - a.salario); //return salarioCrescente(bd).reverse();
}

//codigo do lucas pra ordenar por senioridade
const senioridadeCrescente = bd => {
    return bd.sort((a, b) => {
        if (
            a.senioridade == 'senior' &&
            (b.senioridade == 'junior' ||
                b.senioridade == 'pleno' ||
                b.senioridade == 'estagio')
        ) {
            return 1;
        } else if (
            a.senioridade == 'pleno' &&
            (b.senioridade == 'junior' || b.senioridade == 'estagio')
        ) {
            return 1;
        } else if (a.senioridade == 'junior' && b.senioridade == 'estagio') {
            return 1;
        } else if (a.senioridade == b.senioridade) {
            return 0;
        } else {
            return -1;
        }
    })
}

const senioridadeDecrescente = bd => {
    return senioridadeCrescente(bd).reverse(); //poupar codigo
}
// output = salarioCrescente(bd);
// console.log(output.reverse());

senioridadeDecrescente(bd);
console.log(bd);
//11
console.log('Exercício 11 - erro ao printar compracao de precos\n');

const livraria = [
    { cod: "8568014003", nome: "mais esperto que o diabo", autor: "Napoleon Hill", valor: 24.6, quantidadeVendido: 17675, },
    { cod: "8550801488", nome: "pai rico, pai pobre", autor: "Robert T. Kiyosaki", valor: 42.71, quantidadeVendido: 8992, },
    { cod: "8547001085", nome: "antifragil", autor: "Nassim Nicholas Taleb", valor: 70.99, quantidadeVendido: 1700, },
    { cod: "8595080801", nome: "o investidor inteligente", autor: "Benjamin Graham", valor: 36.3, quantidadeVendido: 8445, },
    { cod: "8539004119", nome: "o poder do hábito", autor: "Charles Duhigg", valor: 48.9, quantidadeVendido: 14581, },
    { cod: "8543102146", nome: "essencialismo", autor: "Greg Mckeown", valor: 36.43, quantidadeVendido: 9730, },
    { cod: "9788539003839", nome: "rápido e devagar", autor: "Daniel Kahneman", valor: 50.93, quantidadeVendido: 5703, },
    { cod: "8551003429", nome: "princípios", autor: "Ray Dalio", valor: 89.9, quantidadeVendido: 3707, },
    { cod: "855717358X", nome: "gestão de alta performance", autor: "Andrew S. Grove", valor: 34.94, quantidadeVendido: 442, },
    { cod: "8550805246", nome: "empresas feitas para vencer", autor: "Jim Collins", valor: 44.2, quantidadeVendido: 824, },
    { cod: "855080455X", nome: "avalie o que importa", autor: "John Doerr", valor: 40.9, quantidadeVendido: 797, }
];

// funcoes printBook e printBooksList foram feitas pelo colega de PS Lucas Ferreira. Implementei no meu código
// pois achei uma solução muito inteligente.
const printBook = book => {
    console.log(`\nCodigo: ${book.cod}\nNome: ${book.nome}\nAutor: ${book.autor}\nValor: R$ ${book.valor}\nVendidos: ${book.quantidadeVendido}\n`);
};

const printBooksList = books => {
    books.forEach((book) => {
        printBook(book);
    });
};


const estoque = livraria => { console.log(`Estoque:`); printBooksList(livraria); }
// estoque(livraria);


const maisVendido = livraria => {
    livraria.sort((maior, menor) => menor.quantidadeVendido - maior.quantidadeVendido);
    return livraria[0];
}
// printBook(maisVendido(livraria));


const pesquisaLivro = (livraria, modo, dado) => {
    let aux = 0;
    switch (modo) {
        case 'nome':
            for (i = 0; i < livraria.length; i++) {
                if (livraria[i].nome == dado) {
                    printBook(livraria[i]);
                    aux++;
                }
            }
            if (aux == 0) {
                console.log('Não encontramos nenhum livro com este nome.');
            }
            break;
        case 'autor':
            aux = 0;
            for (i = 0; i < livraria.length; i++) {
                if (livraria[i].autor == dado) {
                    printBook(livraria[i]);
                    aux++;
                }
            }
            if (aux == 0) {
                console.log('Não encontramos nenhum livro escrito por este autor.');
            }
            break;
        case 'codigo':
            aux = 0;
            for (i = 0; i < livraria.length; i++) {
                if (livraria[i].cod == dado) {
                    printBook(livraria[i]);
                    aux++;
                }
            }
            if (aux == 0) {
                console.log('Não encontramos nenhum livro com este valor.');
            }
            break;
        default:
            break;
    }
}
// let modo = prompt(`Você quer pesquisar por codigo, nome ou autor?\n`);
// let dado = prompt(`Digite as informacoes: `);
// pesquisaLivro(livraria, modo, dado);


const maisVendidos = (livraria, num) => {
    let arrMaisVendidos = [];
    livraria.sort((maior, menor) => menor.quantidadeVendido - maior.quantidadeVendido);
    for (i = 0; i < num; i++) {
        arrMaisVendidos.push(livraria[i]);
    }
    return arrMaisVendidos
}
//printBooksList(maisVendidos(livraria, 5));

/*erro*/const comparaPrecoMaior = (livraria, preco) => {
    let arrPrecoMaior = [];
    for (i = 0; i < livraria.length; i++) {
        if (livraria[i].preco >= preco) {
            arrPrecoMaior.push(livraria[i]);
        }
    }

    return arrPrecoMaior;
}

printBooksList(comparaPrecoMaior(livraria, 5));

/*erro*/const comparaPrecoMenor = (livraria, preco) => {
    let arrPrecoMenor = [];
    for (i = 0; i < livraria.length; i++) {
        if (livraria[i].preco <= preco) {
            arrPrecoMenor.push(livraria[i]);
        }
    }

    return arrPrecoMenor;
}

printBooksList(comparaPrecoMenor(livraria, 50));

//12
console.log('Exercício 12');
let arrMultiplicaDez = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

const multiplicacaoPorDez = numero => numero * 10;

const retornaArray = (arr, callback) => {
    let arrMultiplicado = []
    for (i = 0; i < arr.length; i++) {
        arrMultiplicado.push(callback(arr[i]));
    }
    console.log(arrMultiplicado);
}

retornaArray(arrMultiplicaDez, multiplicacaoPorDez);

//13
console.log('Exercício 13');