/* -- Exercícios práticos -- */
const prompt = require('prompt-sync')();

//1
console.log('\nExercício 1');

let name1 = 'Ramon';
let graduation = 'Engenharia de computação';

console.log('Meu nome é ' + name1 + ' e eu estou estudando ' + graduation + '.');

//se usar name dá como preterido por conta do objeto window. name1 foi uma solucao encontrada.


//2
console.log('\nExercício 2');

const otterwise = 'otter' + 'wise';
console.log(otterwise);


//3
console.log('Exercício 3');

//usando a variavel name1 criada no exercício 1
let surname = 'Pelle';
console.log(name1 + ' ' + surname + '\n');
//4
console.log('Exercício 4');

const quarentaDois = 42;
const menosTresQuatorze = -3.14;
console.log(quarentaDois * menosTresQuatorze);

//5
console.log('Exercício 5');

let valor1 = 10;
let valor2 = -5;
const resultado = valor1 + valor2;
console.log(resultado);


//6
console.log('Exercício 6');

const salarioFixo = 2000;
const valorTotalVendido = 30000;
const porcentagemComissao = 1;

let ganhoComissao = (valorTotalVendido * porcentagemComissao) / 100;
let salarioFinal = salarioFixo + ganhoComissao;
console.log('Valor mensal: ' + salarioFinal);

//7
console.log('Exercício 7');
//usando valor1 e valor2 do exercício 5
let aux = valor1;
console.log("Valores antes da alteração:");
console.log('Valor 1: ' + valor1);
console.log('Valor 2: ' + valor2);

valor1 = valor2;
valor2 = aux;

console.log("Valores depois da alteração:");
console.log('Valor 1: ' + valor1);
console.log('Valor 2: ' + valor2);
//8
console.log('Exercício 8');

const distanciaEmKm = 240;
const velocidadeEmKm = 80;
const qtdCombGasto = 20;
const mediaConsumo = distanciaEmKm / qtdCombGasto;
const tempoViagem = distanciaEmKm / velocidadeEmKm;

console.log('Média de consumo de combustível: ' + mediaConsumo + ' km/l');
console.log('Tempo de viagem: ' + tempoViagem + ' horas');

//9
console.log('Exercício 9');
let idade = 19

if (idade >= 18) {
    console.log(name1 + ' é maior de idade');
} else {
    console.log(name1 + ' não é maior de idade');
}


//10
console.log('Exercício 10');

if (valor1 > valor2) {
    console.log('O valor 1 é maior que o valor 2. ---> ' + valor1 + " > " + valor2);
} else {
    console.log('O valor 1 é maior que o valor 2. ---> ' + valor2 + " > " + valor1);
}

//11
console.log('Exercício 11');

let lado1 = 1;
let lado2 = 0;
let lado3 = 10;

if (lado1 == lado2 && lado1 == lado3) {
    console.log('Triângulo Equilátero');
} else if (lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado3 != lado2 || lado2 == lado3 && lado3 != lado1) {
    console.log('Triângulo Isósceles');
} else {
    console.log('Triângulo Escaleno');
}
//12
console.log('Exercício 12');

const nomeCompleto = 'Ramon Pelle'
const servidor = false
const professor = true

if (servidor == false) {
    console.log(nomeCompleto + ' infelizmente você não tem uma linha de crédito disponível.');
} else if (servidor == true && professor == true) {
    console.log('Parabéns ' + nomeCompleto + '! Você tem acesso a nossa linha de crédito especial!');
} else if (servidor == true && professor == false) {
    console.log(nomeCompleto + ' você tem acesso a nossa linha de crédito para servidores.');
}

//13
console.log('Exercício 13');

if (valor1 % 2 == 0) {
    console.log(valor1 + ' é par');
} else {
    console.log(valor1 + ' é ímpar');
}

//14
console.log('Exercício 14 - tem como melhorar');

valor1 = 3;
valor2 = 2;
valor3 = 1;
if (valor3 > valor2) {
    menor = valor2
} else {
    menor = valor3
}

if (valor1 < menor) {
    menor = valor1
}

if (menor == valor1) {
    console.log(valor2 + valor3);
} else if (menor == valor2) {
    console.log(valor1 + valor3);
} else {
    console.log(valor2 + valor1);
}
//15
console.log('Exercício 15');


if (valor2 < valor1) {
    aux = valor1;
    valor1 = valor2;
    valor2 = aux;

}
if (valor3 < valor1) {
    aux = valor1;
    valor1 = valor3;
    valor3 = aux;
}
if (valor3 < valor2) {
    aux = valor2
    valor2 = valor3;
    valor3 = aux;
}
console.log(valor1, valor2, valor3);
//16
console.log('Exercício 16');
let x = 22;
let y = 3;

if (x % y == 0) {
    console.log(x + ' é múltiplo de ' + y + '.');
} else {
    console.log(x + ' não é múltiplo de ' + y + '.');
}

//17
console.log('Exercício 17');

let horaInicio = 2
let horaFim = 6
let totalHoras
if (horaInicio > horaFim) {
    totalHoras = 24 - horaInicio + horaFim
} else {
    totalHoras = horaFim - horaInicio
}

console.log('Total de horas: ' + totalHoras);

//18
console.log('Exercício 18');

let valueOne = 10;
let valueTwo = 15;
let valueThree = 20;

console.log('Value 1: ' + valueOne + ' Value 2: ' + valueTwo + ' Value 3: ' + valueThree);

aux = valueTwo;
valueTwo = valueThree;
valueThree = valueOne;
valueOne = aux;

console.log('Value 1: ' + valueOne + ' Value 2: ' + valueTwo + ' Value 3: ' + valueThree);

//19
console.log('Exercício 19');
function checkSignal(num) {
    if (num < 0) {
        console.log(num + ' é negativo.')
    } else {
        console.log(num + ' é positivo.')
    }
}

let checarSinal = prompt('Você quer checar o sinal de qual número? ');


checkSignal(checarSinal);
//20
console.log('Exercício 20');

function double(num) {
    return num * 2;
}

let dobrar = prompt('Você quer dobrar qual número? ');
console.log(double(dobrar));

//21
console.log('Exercício 21');

function calculate(string, num1, num2) {
    let r;
    if (string == 'soma') {
        r = num1 + num2;
    } else if (string == 'subtrai') {
        r = num1 - num2;
    } else if (string == 'multiplica') {
        r = num1 * num2
    } else if (string == 'divide') {
        r = num1 / num2
    } else {
        r = 'Erro, tente novamente.'
    }
    return r
}

let calcularNumeros = calculate('soma', 3, 45)
console.log('Olha! 3 somando 45 fica ' + calcularNumeros);

//22
console.log('Exercício 22');

let quantidadeDinheiro;
quantidadeDinheiro = prompt('Você quer saber quantas notas tem em qual valor?');
aux = quantidadeDinheiro;
let qtdNotas = [0, 0, 0, 0, 0, 0, 0];
let i;
while (quantidadeDinheiro != 0) {
    if (quantidadeDinheiro % 100 == 0) {
        quantidadeDinheiro -= 100;
        qtdNotas[0]++;
    } else if (quantidadeDinheiro % 50 == 0) {
        quantidadeDinheiro -= 50;
        qtdNotas[1]++;
    } else if (quantidadeDinheiro % 20 == 0) {
        quantidadeDinheiro -= 20;
        qtdNotas[2]++;
    } else if (quantidadeDinheiro % 10 == 0) {
        quantidadeDinheiro -= 10;
        qtdNotas[3]++;
    } else if (quantidadeDinheiro % 5 == 0) {
        quantidadeDinheiro -= 5;
        qtdNotas[4]++;
    } else if (quantidadeDinheiro % 2 == 0) {
        quantidadeDinheiro -= 2;
        qtdNotas[5]++;
    } else if (quantidadeDinheiro % 1 == 0) {
        quantidadeDinheiro -= 1;
        qtdNotas[6]++;
    }
}

console.log(`${aux} tem ${qtdNotas[0]} notas de 100, ${qtdNotas[1]} notas de 50, ${qtdNotas[2]} notas de 20, ${qtdNotas[3]} notas de 10, ${qtdNotas[4]} notas de 5, ${qtdNotas[5]} notas de 2, ${qtdNotas[6]} notas de 1`);

//23
console.log('Exercício 23');

let qtdSegundos = prompt('Quantos segundos você quer converter? ');
let horario = valorSegundos(parseInt(qtdSegundos));
console.log(horario);
function valorSegundos(seconds) {
    let h = 0;
    let m = 0;
    let s = 0;
    while (seconds != 0) {
        if (seconds % 3600 == 0) {
            seconds -= 3600;
            h++;

        } else if (seconds % 60 == 0) {
            m++;
            seconds -= 60
        } else {
            s++;
            seconds--;
        }
    }
    let texto = h + ':' + m + ':' + h;
    return texto
}

//24
console.log('Exercício 24');

let salarioPJ = prompt('Digite o salário oferecido pela PJ?');
let salarioCLT = prompt('Digite o salário oferecido pela CLT?');
let salarioSomadoCLT = ((salarioCLT * + 0.08) * 13) + 700;
let salarioSomadoPJ = salarioPJ * 12;

console.log('O salário anual pela PJ é de ' + parseInt(salarioSomadoPJ).toFixed(2));
console.log('O salário anual pela CLT é de ' + parseInt(salarioSomadoCLT).toFixed(2) + ' e tem férias.');
//25
console.log('Exercício 25');

console.log('Quantidade de imposto de renda que deve pagar sobre a PJ de ' + salarioSomadoPJ + ' é:');
if (salarioSomadoPJ <= 21453.24) {
    console.log(0);
} else if (salarioSomadoPJ > 21453.24 && salarioSomadoPJ <= 32151.48) {
    console.log(salarioSomadoPJ *= 0.075);
} else if (salarioSomadoPJ >= 32151.49 && salarioSomadoPJ <= 42869.16) {
    console.log(salarioSomadoPJ *= 0.15);
} else if (salarioSomadoPJ >= 42869.17 && salarioSomadoPJ <= 53565.72) {
    console.log(salarioSomadoPJ *= 0.225);
} else {
    console.log(salarioSomadoPJ *= 0.275);
}

console.log('Quantidade de imposto de renda que deve pagar sobre a CLT de ' + salarioSomadoCLT + ' é:');
if (salarioSomadoCLT <= 21453.24) {
    console.log(0);
} else if (salarioSomadoCLT > 21453.24 && salarioSomadoCLT <= 32151.48) {
    console.log(salarioSomadoCLT *= 0.075);
} else if (salarioSomadoCLT >= 32151.49 && salarioSomadoCLT <= 42869.16) {
    console.log(salarioSomadoCLT *= 0.15);
} else if (salarioSomadoCLT >= 42869.17 && salarioSomadoCLT <= 53565.72) {
    console.log(salarioSomadoCLT *= 0.225);
} else {
    console.log(salarioSomadoCLT *= 0.275);
}
//26
console.log('Exercício 26');

