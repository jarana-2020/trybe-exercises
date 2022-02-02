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

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};