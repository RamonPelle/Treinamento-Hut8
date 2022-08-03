/* -- Exercícios práticos -- */
const prompt = require('prompt-sync')();

//1
console.log('Exercício 1');
let i = 0;
for (i = 0; i < 25; i++) {
    console.log(i + 1);
}

//2
console.log('Exercício 2');

for (i = 10; i <= 200; i += 10) {
    console.log(i);
}
//3
console.log('Exercício 3');
let arrNomes = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];
let nomesMesmaFila = '';
for (i = 0; i <= arrNomes.length; i++) {
    if (i == arrNomes.length - 1) { //-1 pois o lenght começa no 1, logo arrNomes.lenght == 5;
        nomesMesmaFila += `${arrNomes[i]}.`;
        console.log(nomesMesmaFila);
    } else {
        nomesMesmaFila += `${arrNomes[i]}, `;
    }
}

//4
console.log('Exercício 4');
let numeroTabuada = prompt('Digite o número para calcularmos toda a tabuada: ');
for (i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ` + numeroTabuada * i);
}

//5
console.log('Exercício 5');
arrNumerosPositivos = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];
for (i = 0; i < arrNumerosPositivos.length; i++) {
    if (arrNumerosPositivos[i] >= 0) {
        console.log(arrNumerosPositivos[i]);
    }
}

//6
console.log('Exercício 6');

let checarNumeros = [-5, 0, -3, -4, 12];
let caracteristicaNumeros = [0, 0, 0, 0] //indice: 0 = par, 1 = impar, 2 = positivo, 3 = negativo

for (i = 0; i < checarNumeros.length; i++) {
    if (checarNumeros[i] % 2 == 0) {
        caracteristicaNumeros[0]++;
    } else {
        caracteristicaNumeros[1]++;
    }

    if (checarNumeros[i] != 0) { //no portal o 0 não é nem positivo nem negativo, logo criei essa condição para evitar outputs diferentes aos da plataforma
        if (checarNumeros[i] > 0) {
            caracteristicaNumeros[2]++;
        } else {
            caracteristicaNumeros[3]++;
        }
    }
}

console.log(`${caracteristicaNumeros[0]} valor(es) par(es)`);
console.log(`${caracteristicaNumeros[1]} valor(es) impar(es)`);
console.log(`${caracteristicaNumeros[2]} valor(es) positivo(s)`);
console.log(`${caracteristicaNumeros[3]} valor(es) negativo(s)`);

//7
console.log('Exercício 7');
let j;
let qtdLinhas = prompt('Quantas linhas de execução de PUMs você deseja? ');
let qtdPum = 1;
for (i = 1; i <= qtdLinhas; i++) {
    console.log(qtdPum, qtdPum += 1, qtdPum += 1, ' PUM');
    qtdPum += 2
}
//8
console.log('Exercício 8');

let arrMult10 = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
console.log(arrMult10);
for (i = 0; i < arrMult10.length; i++) {
    arrMult10[i] = arrMult10[i] * 10;
}

console.log(arrMult10);
//9
console.log('Exercício 9');

let somar = prompt('Digite o número limite para a soma: ');
let output = 0;
for (i = 1; i <= somar; i++) {
    output += i;
}
console.log(output);
//10
console.log('Exercício 10');
let arrNotas = [6, 8, 7];
function calculaNota(arrNotas) {
    let media = 0;
    for (i = 0; i < arrNotas.length; i++) {
        media += arrNotas[i];
    }
    return media / 3;
}

output = calculaNota(arrNotas);
console.log(output);

//11
console.log('Exercício 11');
let arrDeNomes = ['Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla'];
let pesquisaNome = prompt('Digite o nome que você quer pesquisar: ');
for (i = 0; i < arrDeNomes.length; i++) {
    if (arrDeNomes[i] == pesquisaNome) {
        console.log(`O nome ${arrDeNomes[i]} existe no Array`);
    }
}


//12
console.log('Exercício 12');
arrMenor = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
function serMenor(arrMenor) {
    let menor = arrMenor[0];
    let position;
    for (i = 0; i < arrMenor.length; i++) {
        if (arrMenor[i] < menor) {
            menor = arrMenor[i];
            position = i;
        }
    }
    console.log(`O menor valor é ${menor} na posição ${position}`);
}

serMenor(arrMenor);


//13
console.log('Exercício 13');