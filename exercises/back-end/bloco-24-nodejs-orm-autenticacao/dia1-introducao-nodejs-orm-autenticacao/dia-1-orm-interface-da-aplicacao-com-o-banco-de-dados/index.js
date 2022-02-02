const express = require('express');
const bodyParser = require('body-parser');
const BookController = require('./controllers/Book');

const app = express();
app.use(bodyParser.json());

const {
  validateBook,
} = require('./middlewares/validations');

app.get('/books',BookController.getAllBooks);
app.get('/books/:id', BookController.getBookById);
app.post('/books', validateBook, BookController.createBook);
app.post('/books/:id',validateBook,BookController.updateBook);




const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));