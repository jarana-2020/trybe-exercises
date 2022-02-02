const BookService = require('../services/Book');

const getAllBooks = (async(req,res) => {
  try {
    const books = await BookService.getAllBooks();
    return res.status(200).json(books)
  } catch (error) {
    res.status(500).json(error);
  }
});

const getBookById = (async(req,res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getBookById(id);
    if(!book) return res.status(404).json({ message: 'Livro não encontrado' });
    return res.status(200).json(book)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  getAllBooks,
  getBookById,
};