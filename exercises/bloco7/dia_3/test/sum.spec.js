const sum = require('../exercicio1');

describe('A função Sum', () => {
  test('Existe', () => {
    expect(typeof sum).toEqual('function');
  })
});

describe('sum', () => {
  test('Test the sum of 4 and 5', () => {
    expect(sum(4,5)).toBe(9);
  })
});

describe('sum', () => {
  test('Test the sum of 0 and 0', () => {
    expect(sum(0,0)).toBe(0);
  })
});

describe('Show the error when a string is passed', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
});

describe('Show the error when a string is passed', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow('parameters must be numbers');
});

