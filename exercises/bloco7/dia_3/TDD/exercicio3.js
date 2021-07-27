// Escreva a função sumAllNumbers para passar nos testes já implementados.
// Copiar

const assert = require('assert');

const sumAllNumbers = (numbers) => {

    let total = 0;
    for (let index in numbers) {
        total += numbers[index];
    }
    return total
}
sumAllNumbers([9, 23, 10, 3, 8]);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);