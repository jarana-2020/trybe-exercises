const express = require('express');
const bodyParser = require('body-parser');
const BookController = require('./controllers/Book');

const app = express();
app.use(bodyParser.json());

app.get('/books',BookController.getAllBooks);




const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));