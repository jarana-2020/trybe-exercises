const router = require('express').Router();
const axios = require('axios');


const {
  validateToken,
} = require('../middlewares/validations');

const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

router.get(
  '/price',
  validateToken,
  async(req,res) => {
    const result = await axios.get(URL);
    console.log(result);
    res.status(200).json(result.data);
  }
)

module.exports = router;