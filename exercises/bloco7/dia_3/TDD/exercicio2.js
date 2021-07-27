// Escreva a função wordLengths para passar nos testes já implementados.
// Copiar

const assert = require('assert');

const wordLengths = (words) => {

    let arrayWords = [];
    for (let index in words) {
        arrayWords.push(words[index].length);
    }

    return arrayWords;
}

wordLengths(['sun', 'potato', 'roundabout', 'pizza']);

 const words = ['sun', 'potato', 'roundabout', 'pizza'];
 const expected = [3, 6, 10, 5];

 assert.strictEqual(typeof wordLengths, 'function');
 const output = wordLengths(words);
 assert.deepStrictEqual(output, expected);