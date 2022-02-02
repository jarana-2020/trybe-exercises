const { Book } = require('../models');

const getAllBooks = async() => {
  const books = await Book.findAll();
  return books;
};

const getBookById = async(id) => {
  const book = await Book.findByPk(id);
  return book;
};

const createBook = async(title,author,pageQuantity) => {
  const bookCreated = await Book.create({ title,author,pageQuantity });
  return bookCreated;
};

const updateBook = async(id,title,author,pageQuantity) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );
  return updatedBook;
};

const deleteBook = async(id) => {
  const deletedBook = await Book.destroy(
    { where: { id } },
  );
  return deletedBook;
};

const getBookByAuthor = async(name) => {
  const books = await Book.findAll(
    { where: { author: name } },
  );
  return books;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBookByAuthor,
};