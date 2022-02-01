const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/user', userController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));