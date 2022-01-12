const { expect } = require("chai");
const fs = require('fs');
const sinon = require('sinon');
const verifyNumber = require('./exercise1');

const CONTENT_FILE = 'teste de escrita em arquivo';

sinon.stub(fs,'writeFileSync')
  .returns('ok');

describe('Quando o parametro for maior que 0', () => {
 it('retorna positivo',() => {
  const answer = verifyNumber(4);
  expect(answer).to.be.equals('positivo');
 })
});

describe('Quando o parametro for menor que 0', () => {
  it('retorna negativo',() => {
    const answer = verifyNumber(-2);
    expect(answer).to.be.equals('negativo');
 })
});

describe('Quando o parametro for 0', () => {
  it('retorna neutro',() => {
    const answer = verifyNumber(0);
    expect(answer).to.be.equals('neutro');
  })
});

describe('Quando o parametro não for Number', () => {
  it('retorna "o valor deve ser um número"',() => {
    const answer = verifyNumber('teste');
    expect(answer).to.be.equals('o valor deve ser um número');
  })
});

//Testes para leitura de um arquivo

describe('Quando realizar a escrita no arquivo', () => {
  it('retorna "ok"',() => {
   const result = writeFile('teste.txt',CONTENT_FILE);
   expect(result).to.be.equals('ok');
  })

});

describe('Quando ocorrer um erro na escrita no arquivo', () => {
  it('retorna "erro na escrita do arquivo"',() => {
    const result = writeFile(1,CONTENT_FILE);
    expect(result).to.be.equals('erro na escrita do arquivo');
  })

});

