const manyFunctions = require('../src/exercicio4');

// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const mockUpperCase = jest.spyOn(manyFunctions, 'wordUpperCase')
  .mockImplementation((string) => string.toLowerCase());

describe('Testing the mock of function wordUppercase', () => {
  it('return string lowercase', () => {
    expect(mockUpperCase).toHaveBeenCalledTimes(0);
    expect(mockUpperCase('JULIO')).toBe('julio');
    expect(mockUpperCase).toHaveBeenCalled();
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase).toHaveBeenCalledWith('JULIO');
  });
  it('Reset for the original implementation wordUppercase, and testing', () => {
    manyFunctions.wordUpperCase.mockRestore();
    expect(manyFunctions.wordUpperCase('julio')).toBe('JULIO');
  });
});