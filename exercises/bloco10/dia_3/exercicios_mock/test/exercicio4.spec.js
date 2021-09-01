const manyFunctions = require('../src/exercicio4');

// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta.
// A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las.
//  Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. 
//  Para a segunda função, uma nova implementação deve retornar a última letra de uma string.
//   A terceira deve receber três strings e concatená-las.

jest.mock('../src/exercicio4');

describe('Testing the functions wordUppercase, firstCharacter', () => {
  it('return string lowercase', () => {
    manyFunctions.wordUpperCase.mockImplementation((string) => string.toLowerCase());
    expect(manyFunctions.wordUpperCase).toHaveBeenCalledTimes(0);
    expect(manyFunctions.wordUpperCase('JULIO')).toBe('julio');
    expect(manyFunctions.wordUpperCase).toHaveBeenCalled();
    expect(manyFunctions.wordUpperCase).toHaveBeenCalledTimes(1);
    expect(manyFunctions.wordUpperCase).toHaveBeenCalledWith('JULIO');
  });
  it('return the last character of string', () => {
    manyFunctions.firstCharacter.mockImplementation((string) => string.substr(-1));
    expect(manyFunctions.firstCharacter).toHaveBeenCalledTimes(0);
    expect(manyFunctions.firstCharacter('JULIO')).toBe('O');
    expect(manyFunctions.firstCharacter).toHaveBeenCalled();
    expect(manyFunctions.firstCharacter).toHaveBeenCalledTimes(1);
    expect(manyFunctions.firstCharacter).toHaveBeenCalledWith('JULIO');
  });
});

describe('Testing the function concat', () => {
  it('concat three strings', () => {
    manyFunctions.concatString.mockImplementation((string1, string2, string3) => 
      string1 + string2 + string3);
      
    expect(manyFunctions.concatString).toHaveBeenCalledTimes(0);
    expect(manyFunctions.concatString('Hi', 'Im', 'Here')).toBe('HiImHere');
    expect(manyFunctions.concatString).toHaveBeenCalled();
    expect(manyFunctions.concatString).toHaveBeenCalledTimes(1);
    expect(manyFunctions.concatString).toHaveBeenCalledWith('Hi', 'Im', 'Here');
  });
});