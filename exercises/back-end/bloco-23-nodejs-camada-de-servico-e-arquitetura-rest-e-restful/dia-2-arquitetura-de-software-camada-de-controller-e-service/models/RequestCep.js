
const fetch = require('node-fetch');


const getCep = async(cep) => {

  const fetchCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if(!fetchCep.ok) return null;

  const result = await fetchCep.json();

  if(result.erro) return null;

  return result;

};

module.exports = {
  getCep,
};