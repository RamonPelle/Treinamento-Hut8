//1
console.log('Exercício 1');
const arrNum = [5, 9, 10, 6];
let i;
let answ;
function somar(arrNum) {
    let soma = 0;
    for (i = 0; i < arrNum.length; i++) {
        soma += arrNum[i];
    }
    return soma;
}

answ = somar(arrNum);
console.log(`A soma é ${answ}`);
//2
console.log('Exercício 2');
const objUser = {
    name: "Juca",
    projects: [
        { name: "Projeto 1", start: "01/02/2021", active: true },
        { name: "Projeto 2", start: "03/03/2021", active: false },
        { name: "Projeto 3", start: "10/08/2021", active: true },
        { name: "Projeto 4", start: "20/08/2021", active: false },
        { name: "Projeto 5", start: "18/10/2021", active: true }
    ]
}
function isActive(user) {
    for (i = 0; i < user.projects.length; i++) {
        if (user.projects[i].active == true) {
            console.log(user.projects[i].name);
        }
    }
}
isActive(objUser);
//3
console.log('Exercício 3');

const arrMaior = [6, 21, 9, 2, 50, 98, 1];
let maior = arrMaior[0]
for (i = 0; i < arrMaior.length; i++) {
    if (arrMaior[i] > maior) {
        maior = arrMaior[i];
    }
}

console.log(`O maior número no array é: ${maior}`);
//4
console.log('Exercício 4');
const frase = `Meu nome é Ramon e eu estudo na UFPEL`
const espaco = ' ';

function contarPalavras(toSplit, separator) {
    let newArr = toSplit.split(separator);
    console.log(`A string possui ${newArr.length} palavras.`);
}

contarPalavras(frase, espaco);


//5
console.log('Exercício 5');
let j;
let skills = '';
const users = [
    {
        name: "Joao",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Pedro",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

for (i = 0; i < users.length; i++) {
    for (j = 0; j < users[i].skills.length; j++) {
        if (j != users[i].skills.length - 1) {
            skills += users[i].skills[j] + ', ';
        } else {
            skills += users[i].skills[j] + '.';
        }

    }
    console.log(`O usuário ${users[i].name} possui as skills: ${skills}`);
    skills = '';
}
//6
console.log('Exercício 6');

let p1 = Math.floor(Math.random() * 3);
let p2 = Math.floor(Math.random() * 3);

function decifrandoOpcao(n) {
    switch (n) {
        case 0:
            return 'Tesoura';
            break;
        case 1:
            return 'Papel';
            break;
        case 2:
            return 'Pedra';
            break;
        default:
            break;
    }
}

function rockPaperScissorsWinner(primeiroJogador, segundoJogador) {
    let vencedor = '';
    if (primeiroJogador == 0 && segundoJogador == 1 || primeiroJogador == 1 && segundoJogador == 2 || primeiroJogador == 2 && segundoJogador == 0) {
        vencedor = 'O primeiro jogador ganhou!';
    } else if (segundoJogador == 0 && primeiroJogador == 1 || segundoJogador == 1 && primeiroJogador == 2 || segundoJogador == 2 && primeiroJogador == 0) {
        vencedor = 'O segundo jogador ganhou!';
    } else if (primeiroJogador == 0 && segundoJogador == 0 || primeiroJogador == 1 && segundoJogador == 1 || primeiroJogador == 2 && segundoJogador == 2) {
        vencedor = 'EMPATE!!!!';
    } else {
        vencedor = 'ERRO! Declare valores válidos.';
    }
    console.log(`Escolhas:\nJogador 1 - ${decifrandoOpcao(primeiroJogador)}\nJogador 2 - ${decifrandoOpcao(segundoJogador)}\n`);
    console.log(vencedor);

}

rockPaperScissorsWinner(p1, p2);



