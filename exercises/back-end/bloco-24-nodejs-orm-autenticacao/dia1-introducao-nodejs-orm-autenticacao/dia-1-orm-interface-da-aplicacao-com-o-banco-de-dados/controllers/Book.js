const BookService = require('../services/Book');

const getAllBooks = (async(req,res) => {
  try {
    const books = await BookService.getAllBooks();
    return res.status(200).json(books)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  getAllBooks,
};