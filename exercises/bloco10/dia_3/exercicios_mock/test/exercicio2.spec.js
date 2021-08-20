const getNumber = require('../src/exercicio1');

// Com a mesma função do exercício anterior, utilizando o mock, crie 
// uma nova implementação, que deve receber dois parâmetros e retornar a divisão 
// do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

describe('generateNumber', () => {
  it('New implementacion of generateNumber with two parameters and return the division', () => {
    getNumber.generateNumber = jest
      .fn()
      .mockImplementationOnce((a, b) => a / b);

    expect(getNumber.generateNumber(10, 2)).toBe(5);
    expect(getNumber.generateNumber).toHaveBeenCalled();
    expect(getNumber.generateNumber).toHaveBeenCalledTimes(1);
    expect(getNumber.generateNumber).toHaveBeenCalledWith(10, 2);
  });
});