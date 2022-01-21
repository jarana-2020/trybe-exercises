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

  const validate = (cep) => {
    const REGEX = /\d{5}-?\d{3}/;
    if(!REGEX.test(cep)) return { code: 400 , 
      message: { error: {code: "invalidData", message: "Cep inválido"}} };

    return {}
  }


const findByCep = async(cep) => {
  const cepWithoutTrace = cep.replace('-','')
  const foundedCep = await CepModel.findByCep(cepWithoutTrace);
  const validations = validate(cep);

  if(validations.message) return validations;

  if(!foundedCep) return { code: 404, 
    message: {error: {code: "notFound", message: "CEP não encontrado"}} };
  
  return newCep(foundedCep);
};

const createCep = async({ cep,logradouro,bairro,localidade,uf }) => {
  const cepWithoutTrace = cep.replace('-','')
  const foundedCep = await CepModel.findByCep(cepWithoutTrace);

  if(foundedCep) return { code: 409, 
    message: {error: {code: "alreadyExists", message: "CEP já existente"}} };
  
  return await CepModel.createCep({cep: cepWithoutTrace, logradouro,bairro,localidade,uf })
};

module.exports = {
  findByCep,
  createCep,
};


