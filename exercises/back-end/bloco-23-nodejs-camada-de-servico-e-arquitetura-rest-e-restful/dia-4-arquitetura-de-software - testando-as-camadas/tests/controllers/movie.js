const { expect } = require('chai');
const sinon = require('sinon');
const MovieService = require('../../services/Movie');

const MovieControler = {
  getMovie: () => {},
}



describe('Ao chamar o controler de getMovie', () => {

  describe('quando não existe o filme no DB', async() => {
    const res = {};
    const req = {};

    before(() => {
      req.params ={
        id: 1
      }
    });

    res.status = sinon.stub()
      .returns(res);
    res.send = sinon.stub()
      .returns();

    sinon.stub(MovieService,'getMovie')
      .resolves(null);

      after(() => {
        MovieService.getMovie.restore();
      })
    
      it('é chamado o status com código 400',async() => {
        await MovieControler.getMovie(req, res);
        expect(res.status.calledWith(400)).to.be.equal(true);
      })
    
      it('é chamado o send com a mensagem Filme não encontrado',async() => {
        await MovieControler.getMovie(req, res);
        expect(res.send.calledWith('Filme não encontrado')).to.be.equal(true);
      })

  })
  
})

describe('quando existe o filme no DB', async() => {
  const res = {};
  const req = {};

    before(() => {
      req.params ={
        id: 1
      }
    });

    res.status = sinon.stub()
      .returns(res);
    res.json = sinon.stub()
      .returns();

    sinon.stub(MovieService,'getMovie')
      .resolves({
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });

  after(() => {
    MovieService.getMovie.restore();
  })

  it('é chamado o status com código 200',async() => {
    await MovieControler.getMovie(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  })
  
  it('é chamado o método json com o objeto',async() => {
    await MovieControler.getMovie(req, res);
    expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
  })
})

