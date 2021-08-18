const uppercase = require('../src/exercicio1');

describe('Uppercase', () => {
  it('Verify the call of function uppercase', (done) => {
    uppercase('test', (str) => {
      try {
        expect((str)).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});