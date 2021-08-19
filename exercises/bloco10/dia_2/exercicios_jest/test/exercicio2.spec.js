const { getUserName } = require('../src/exercicio2');

describe('findUserById', () => {
  it('When the user exists', () => expect(getUserName(1))
    .resolves.toBe('Mark'));

  it('When the user not find', () => expect(getUserName(3))
    .rejects.toEqual(new Error('User with 3 not found.')));
});