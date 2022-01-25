const { expect } = require('chai');

const MovieModel = {
  getMovie: () => {}
};

describe('Localiza um filme no DB', () => {
  const dataMovie = {
    id: 1,
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  describe('Quando localiza com sucesso', async() => {
    it('retorna um objeto', async() => {
      const response = await MovieModel.getMovie(dataMovie);
      expect(response).to.be.a('object');
    });

    it('o objeto possui as propriedades do filme', async() => {
      const response = await MovieModel.getMovie(dataMovie);
      expect(response).to.have.a.property('id');
      expect(response).to.have.a.property('title');
      expect(response).to.have.a.property('directedBy');
      expect(response).to.have.a.property('releaseYear');
    });

  });

  describe('Quando não localiza com sucesso', async() => {
    it('retorna null', async() => {
      const response = await MovieModel.getMovie();
      expect(response).to.be.equal(null);
    });

  });
  
});








// Quando é encontrado um filme com o ID passado pela pessoa usuária 
// deverá retornar um objeto com todas as propriedades do filme
//  e o código http 200 - OK no status da response .
// Quando não é encontrado nenhum filme com o ID passado pela 
// pessoa usuária deverá responder com código http 404 - Not Found no status da 
// response e com a mensagem "Filme não encontrado."