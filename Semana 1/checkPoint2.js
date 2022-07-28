//1
console.log('Parte 1: \n');

let num = -10;
if (num < 0) {
    console.log('O número é negativo');
} else {
    console.log('O número é positivo');
}

let x = 10
let y = -5

//2
console.log('\nParte 2: \n');

if (x > 0 || y > 0) {
    console.log('Algum valor é positivo');
} else {
    console.log('Nenhum valor é positivo');
}

//3
console.log('\nParte 3: \n');

let precoEtiqueta = 100;
console.log('Condições:\n-----------------------------------------------------------------\n|1- À vista em dinheiro ou cheque, recebe 10% de desconto       |\n|2- À vista no cartão de crédito, recebe 15% de desconto        |\n|3- Em duas vezes, preço normal de etiqueta sem juros           |\n|4- Em três vezes, preço normal de etiqueta mais juros de 10%   |\n-----------------------------------------------------------------');

let opcao = 4
let precoFinal;
let precoFinal1;
switch (opcao) {
    case 1:
        precoFinal = precoEtiqueta * 0.9;
        break;
    case 2:
        precoFinal = precoEtiqueta * 0.85;
        break;
    case 3:
        precoFinal = precoEtiqueta;
        break;
    case 4:
        precoFinal = precoEtiqueta + (precoEtiqueta * 0.1);
        precoFinal1 = precoEtiqueta * 1.1;
        break;
    default:
        break;
}

console.log('Preço final: ' + precoFinal);
console.log('Preço final BUG: ' + precoFinal1);