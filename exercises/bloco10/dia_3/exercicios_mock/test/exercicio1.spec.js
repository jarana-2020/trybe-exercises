const getNumber = require('../src/exercicio1');

let { generateNumber } = getNumber;

describe('generateNumber', () => {
  it('Verify if the function was call', () => {
    generateNumber = jest
      .fn()
      .mockReturnValue(10)
      .mockReturnValueOnce(15)
      .mockReturnValueOnce(25);
      
    expect(generateNumber).toHaveBeenCalledTimes(0);

    expect(generateNumber()).toBe(15);
    expect(generateNumber).toHaveBeenCalledTimes(1);

    expect(generateNumber()).toBe(25);
    expect(generateNumber).toHaveBeenCalledTimes(2);

    expect(generateNumber()).toBe(10);
    expect(generateNumber).toHaveBeenCalledTimes(3);
  });
});