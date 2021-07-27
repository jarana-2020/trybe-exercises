// Compare dois objetos para verificar se são idênticos ou não
// Copiar


const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, 'Erro: obj1 e obj2 não são estritamente iguais');
assert.notDeepStrictEqual(obj1, obj3, 'Erro: obj1 e obj3 não são estritamente iguais');
assert.notDeepStrictEqual(obj2, obj3, 'Erro: obj2 e obj3 não são estritamente iguais');