const express = require('express');
const bodyParser = require('body-parser');
const { getMovie } = require('./controllers/Movie');

const app = express();
app.use(bodyParser.json());

app.get('/movies/:id', getMovie);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})