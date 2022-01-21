const CepService = require('../services/Cep');

const findByCep = async(req,res) => {
  const { cep } = req.params;
  const foundedCep = await CepService.findByCep(cep);

  return res.status(200).json(foundedCep);
};

module.exports = {
  findByCep,
};