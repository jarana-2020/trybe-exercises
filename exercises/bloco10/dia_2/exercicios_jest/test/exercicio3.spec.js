const { getUserName } = require('../src/exercicio3');

describe('FindUserById', () => {
  it('When the user is found', async () => {
    const getName = await getUserName(1);
    expect(getName).toBe('Mark');
  });

  it('When the user does not exists', async () => {
    expect.assertions(1);
    try {
      await getUserName(3); 
    } catch (error) {
      expect(error).toEqual(new Error('User with 3 not found.'));  
    }
  });
});