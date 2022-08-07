/* -- Exercícios práticos -- */
const prompt = require('prompt-sync')();
let i;
let j;
//13
console.log('Exercício 13');
let objCv = {
    name: "Juca",
    projects: [
        { name: "Projeto 1", start: "01/02/2021" },
        { name: "Projeto 2", start: "03/03/2021" }
    ]
}

console.log(objCv.name);
console.log(objCv.projects[1]);
console.log(objCv.projects[0].name);
//14
console.log('Exercício 14');

let myUser = {
    name: 'Juca',
    age: 25,
    email: 'juca@gmail.com'
}

console.log(myUser);
//15
console.log('Exercício 15');

let arrMedia = [
    { nome: 'Marcos', notas: [10, 7, 2] },
    { nome: 'Michele', notas: [10, 10, 10] },
    { nome: 'Pedro', notas: [3, 10, 9] },
    { nome: 'Andressa', notas: [6, 6, 8] },
    { nome: 'Cristiana', notas: [7, 9, 2] }
]
let media = 0
function calcularMedia(arrMedia) {
    for (i = 0; i < arrMedia.length; i++) {
        for (j = 0; j < arrMedia[i].notas.length; j++) {
            media += arrMedia[i].notas[j];
        }
        if ((media / arrMedia[i].notas.length) >= 7) {
            console.log(arrMedia[i].nome);
        }
        media = 0;
    }

}

calcularMedia(arrMedia);
//16
console.log('Exercício 16');

let user = {
    name: "Marília",
    age: 26,
    job: "Dev"
}

let teste;
for (i = 0; i < 3; i++) {
    teste = Object.keys(user); //!!!!!!!!acessa o nome da propriedade!!!!!!

    console.log(`o valor da propriedade ${teste[i]} é ${user[teste[i]]}`);
}

//17
console.log('Exercício 17 corrigir');

let arrChecarDev = [
    { name: 'Marília', age: 26, job: 'Dev' },
    { name: 'Juca', age: 21, job: 'RH' },
    { name: 'Flávia', age: 30, job: 'Financeiro' },
    { name: 'Sérgio', age: 24, job: 'Dev' }
]

let outputString = '';

for (i = 0; i < arrChecarDev.length; i++) {
    if (arrChecarDev[i].job == 'Dev') {
        outputString += `${arrChecarDev[i].name} é dev. `;
    } else {
        outputString += `${arrChecarDev[i].name} não é dev. `;
    }
}

console.log(outputString);

//18
console.log('Exercício 18');
let arrListaCompras = [
    { nome: 'maçã', quantidade: 2, valor: 0.5 },
    { nome: 'alface', quantidade: 1, valor: 1.73 },
    { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
]

function calculaPrecoTotal(arrListaCompras) {
    let total = 0;
    for (i = 0; i < arrListaCompras.length; i++) {
        total += (arrListaCompras[i].valor * arrListaCompras[i].quantidade);

    }
    console.log(`R$${total}`);
}

calculaPrecoTotal(arrListaCompras);

//19

console.log('Exercício 19 ??'); //rafa me ajudou - for... of
let arrTroca = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt '];

function trocaLetra(palavraArray) {
    for (let letra in palavraArray) {
        switch (palavraArray[letra]) {
            case '1':
                palavraArray = palavraArray.replace(palavraArray[letra], 'i');
                break;
            case '3':
                palavraArray = palavraArray.replace(palavraArray[letra], 'e');
                break;
            case '4':
                palavraArray = palavraArray.replace(palavraArray[letra], 'a');
                break;
            case '5':
                palavraArray = palavraArray.replace(palavraArray[letra], 's');
                break;
            case '0':
                palavraArray = palavraArray.replace(palavraArray[letra], 'o');
                break;
        }
    }
    return palavraArray;
}

let string = '';
for (let [i, string] of arrTroca.entries()) {
    string = trocaLetra(string);
    string = string.trim();
    arrTroca[i] = string;
}

console.log(arrTroca);


//20
console.log('Exercício 20 - incompleto');

const objAluno = {
    nome: 'Analu dos santos baptista',
    cpf: '14776213931',
    telefone: '8328008258'
};

function mudarNome(nome) {
    let novoNome = '';
    let arrNovoNome = nome.split(' ');

    for (i = 0; i < arrNovoNome.length; i++) {
        arrNovoNome[i] = arrNovoNome[i].charAt(0).toUpperCase() + arrNovoNome[i].slice(1);
        novoNome += arrNovoNome[i] + ' ';
    }
    return novoNome;
}
