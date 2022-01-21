const express = require('express');
const bodyParser = require('body-parser');
const CepController = require('./controllers/Cep');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/ping',(_req, res) => res.status(200).json({ "message": "pong!" }));
app.get('/cep/:cep',CepController.findByCep);




const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});