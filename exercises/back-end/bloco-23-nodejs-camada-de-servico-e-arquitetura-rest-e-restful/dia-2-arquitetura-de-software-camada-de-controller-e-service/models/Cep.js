const connection = require('./connection');


const findByCep = async(cep) => {
  const cepWithoutTrace = cep.replace('-','')
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [cepData] = await connection.execute(query,[cepWithoutTrace]);

  const foundedCep = cepData[0];

  return foundedCep;
};

module.exports = {
  findByCep,
};