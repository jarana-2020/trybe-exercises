const { expect } =require('chai');
const sinon = require('sinon');
const connection = require('../../models/connection');
const MovieModel = require('../../models/Movie');


describe('Busca um filme no DB', () => {

  before(async() => {
    const execute = [[]];
    sinon.stub(connection,'execute').resolves(execute);
  })

  after(async() => {
    connection.execute.restore();
  })

  describe('quando não localiza um filme no DB', async() => {
    it('retorna null',async() => {
      const result = await MovieModel.getMovie();
      expect(result).to.be.equal(null);
    })
  })
})

describe('quando localiza um filme no DB', async() => {

  before(async() => {
    const execute = {
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }
    sinon.stub(MovieModel,'getMovie').resolves(execute);
  })

  after(async() => {
    MovieModel.getMovie.restore();
  })

  it('retorna um objeto',async() => {
    const result = await MovieModel.getMovie(1);
    expect(result).to.be.a('object');
  })
  
  it('o objeto possui as propriedades necessarias',async() => {
    const result = await MovieModel.getMovie(1);
    expect(result).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
  })
})