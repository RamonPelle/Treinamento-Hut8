//1
console.log('Exercício 1');

const operadores = function (str) {
    switch (str) {
        case 'soma':
            return function (v1) {
                return function (v2) {
                    return v1 + v2;
                }
            }
            break;
        case 'subtrai':
            return function (v1) {
                return function (v2) {
                    return v1 - v2;
                }
            }
            break;
        case 'divide':
            return function (v1) {
                return function (v2) {
                    return v1 / v2;
                }
            }
            break;
        case 'multiplica':
            return function (v1) {
                return function (v2) {
                    return v1 * v2;
                }
            }
            break;
        default:
            break;
    }
}

console.log(operadores('multiplica')(2)(4));
//2
console.log('Exercício 2');

const user =
{
    name: 'Juca',
    idade: 18
}
const maiorDeIdade = ({ idade }) => { idade >= 18 ? console.log('É maior de idade') : console.log('Não é maior de idade') }; //doidera
maiorDeIdade(user);


