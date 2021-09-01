const getNumber = require('../src/exercicio1');

// Ainda com a mesma função do primeiro exercício, utilizando o mock,
// crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, 
// resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('New implementation of generateNumber, with three paramaters', () => {
  it('return the multiplication of paramaters', () => {
    getNumber.generateNumber = jest
      .fn()
      .mockImplementation((a, b, c) => a * b * c);

    expect(getNumber.generateNumber(2, 3, 2)).toBe(12);
    expect(getNumber.generateNumber).toHaveBeenCalled();
    expect(getNumber.generateNumber).toHaveBeenCalledTimes(1);
    expect(getNumber.generateNumber).toHaveBeenCalledWith(2, 3, 2);
  });

  it('return double the number', () => {
    getNumber.generateNumber.mockReset();
    getNumber.generateNumber.mockImplementation((a) => a * 2);

    expect(getNumber.generateNumber(2)).toBe(4);
    expect(getNumber.generateNumber).toHaveBeenCalled();
    expect(getNumber.generateNumber).toHaveBeenCalledTimes(1);
    expect(getNumber.generateNumber).toHaveBeenCalledWith(2);
  });
});