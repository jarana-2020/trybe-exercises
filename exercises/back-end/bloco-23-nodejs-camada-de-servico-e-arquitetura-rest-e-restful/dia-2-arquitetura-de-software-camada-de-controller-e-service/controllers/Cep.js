const CepService = require('../services/Cep');
const Joi = require('joi');

const findByCep = async(req,res) => {
  const { cep } = req.params;
  const foundedCep = await CepService.findByCep(cep);

  if(foundedCep.message) return res.status(foundedCep.code).json(foundedCep.message);

  return res.status(200).json(foundedCep);
};

const createCep = async(req, res, _next) => {

  const { error } = Joi.object({
    cep: Joi.string().regex(/^[0-9]{5}-[0-9]{3}$/).required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(req.body);
  
  if(error) {
    return res.status(400)
      .json({"error": { "code": "invalidData", "message": error.details[0].message }})
  }

  const newCep = await CepService.createCep(req.body);

  res.status(201).json(newCep);
};


module.exports = {
  findByCep,
  createCep,
};
