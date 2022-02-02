const BookService = require('../services/Book');

const getAllBooks = (async(req,res) => {
  try {
    const books = await BookService.getAllBooks();
    return books;
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  getAllBooks,
};