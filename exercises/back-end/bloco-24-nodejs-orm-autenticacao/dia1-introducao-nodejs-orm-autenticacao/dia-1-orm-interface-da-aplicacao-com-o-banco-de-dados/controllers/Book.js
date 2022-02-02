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

const createBook = (async(req,res) => {
  try {
    const { title,author,pageQuantity } = req.body;
    const bookCreated = await BookService.createBook(title,author,pageQuantity);
    return res.status(200).json(bookCreated)
  } catch (error) {
    res.status(500).json(error);
  }
});

const updateBook = (async(req,res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await BookService.updateBook(id, title, author, pageQuantity);
    if(!updatedBook) return res.status(404).json({ message: 'Livro não encontrado' });
    return res.status(200).json('Livro atualizado com sucesso')
  } catch (error) {
    res.status(500).json(error);
  }
});

const deleteBook = (async(req,res) => {
  try {
    const { id } = req.params;
    const deletedBook = await BookService.deleteBook(id);
    if(!deletedBook) return res.status(404).json({ message: 'Livro não encontrado' });
    return res.status(200).json('Livro deletado com sucesso')
  } catch (error) {
    res.status(500).json(error);
  }
});

const getBooksByAuthor = (async(req,res) => {
  try {
    const { name} = req.query;
    const books = await BookService.getBookByAuthor(name);
    if(!books.length) return res.status(404).json({ message: 'Author não encontrado' });
    return res.status(200).json(books)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksByAuthor,
};