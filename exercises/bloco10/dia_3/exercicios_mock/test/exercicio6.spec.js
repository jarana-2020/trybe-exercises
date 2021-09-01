const getDogs = require('../src/exercicio6');

describe('fetchDog', () => {
  getDogs.fetchDog = jest.fn();
  afterEach(getDogs.fetchDog.mockReset);

  it('Test if requisicion was resolved', async () => {
    getDogs.fetchDog.mockResolvedValue('request sucess');

    getDogs.fetchDog();
    expect(getDogs.fetchDog).toHaveBeenCalled();
    expect(getDogs.fetchDog).toHaveBeenCalledTimes(1);
    await expect(getDogs.fetchDog()).resolves.toBe('request sucess');
    expect(getDogs.fetchDog).toHaveBeenCalledTimes(2);
  });

  it('Test if requisicion did not resolved', async () => {
    getDogs.fetchDog.mockRejectedValue('request failed');

    expect(getDogs.fetchDog).toHaveBeenCalledTimes(0);
    await expect(getDogs.fetchDog()).rejects.toBe('request failed');
    expect(getDogs.fetchDog).toHaveBeenCalledTimes(1);
  });
});