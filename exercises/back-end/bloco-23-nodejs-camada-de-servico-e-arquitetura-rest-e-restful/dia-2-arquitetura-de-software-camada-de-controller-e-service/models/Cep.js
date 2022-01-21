const connection = require('./connection');


const findByCep = async(cep) => {
  const cepWithoutTrace = cep.replace('-','')
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [cepData] = await connection.execute(query,[cepWithoutTrace]);

  const foundedCep = cepData[0];

  if(!foundedCep) return null

  return foundedCep;
};

const createCep = async({ cep,logradouro,bairro,localidade,uf }) => {
  const query = 'INSERT INTO cep_lookup.ceps (cep,logradouro,bairro,localidade,uf) VALUES (?,?,?,?,?)';
  await connection.execute(query,[cep,logradouro,bairro,localidade,uf]);
  return {cep,logradouro,bairro,localidade,uf};
};

module.exports = {
  findByCep,
  createCep,
};