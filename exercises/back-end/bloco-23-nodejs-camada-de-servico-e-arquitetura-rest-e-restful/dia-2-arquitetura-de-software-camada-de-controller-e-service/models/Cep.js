const connection = require('./connection');

const CEP_REGEX = /\d{5}-?\d{3}/;

const formatCep = (cep) => {
  if(CEP_REGEX.test(cep)) return cep;

  return cep.replace(/\d{5}-?\d{3}/,'$1-$2');
};

const newCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf });

const findByCep = async(cep) => {
  const cepWithoutTrace = cep.replace('-','')
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [cepData] = await connection.execute(query,[cepWithoutTrace]);

  if(cepData.length === 0) return null

  const foundedCep = cepData[0];
  
  return newCep(foundedCep);
};

module.exports = {
  findByCep,
};