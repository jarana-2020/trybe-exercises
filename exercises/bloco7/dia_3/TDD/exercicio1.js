// Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código :
// Copie os testes já implementados e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.
// Escreva a função addOne para passar nos testes já implementados.
// Copiar

const assert = require('assert');

const addOne = (array) => {

    let newArray = [];
    for (let index in array) {
        newArray.push(array[index] + 1);
    }
    return newArray;

}
addOne([31, 57, 12, 5]);

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

 assert.strictEqual(typeof addOne, 'function');
 assert.deepStrictEqual(output, expected);
 assert.deepStrictEqual(myArray, unchanged);