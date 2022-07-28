//executando 1
console.log('Exercício 1:');
let num = 101;
serPar(num);

//executando 2
console.log('\nExercício 2:');
let idade = 1;
console.log(retornaCategoria(idade));






//funcao 1
function serPar(num) {
    let texto;
    if (num % 2 == 0) {
        console.log(`${num} é par.`);
    } else {
        console.log(`${num} não é par.`);

    }
}

//funcao 2
function retornaCategoria(idade) {
    let cat;
    if (idade >= 5 && idade <= 7) {
        cat = "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        cat = "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        cat = "Juvenil A";
    }
    else if (idade >= 14 && idade <= 17) {
        cat = "Juvenil B";
    }
    else if (idade >= 18) {
        cat = "Adulto";
    } else {
        cat = "Sem categoria";
    }
    return cat;
}