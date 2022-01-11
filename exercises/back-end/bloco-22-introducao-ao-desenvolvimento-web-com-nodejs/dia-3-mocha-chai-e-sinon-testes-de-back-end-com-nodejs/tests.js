const { expect } = require("chai");
const verifyNumber = require('./exercise1');



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