const CepModel = require('../models/Cep');

const CEP_REGEX = /^[0-9]{5}-[0-9]{3}$/;

const formatCep = (cep) => {
  if(CEP_REGEX.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/,'$1-$2');
};

const newCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf });


const findByCep = async(cep) => {
  const cepWithoutTrace = cep.replace('-','')
  const foundedCep = await CepModel.findByCep(cepWithoutTrace);
  console.log(newCep(foundedCep));
  return newCep(foundedCep);
};

module.exports = {
  findByCep,
};


