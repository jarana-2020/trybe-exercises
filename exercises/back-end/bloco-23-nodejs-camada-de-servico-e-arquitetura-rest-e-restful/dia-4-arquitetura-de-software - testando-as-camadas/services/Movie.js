const MovieModel = require('../models/Movie');

const getMovie = async(id) => {
  const [movie] = await MovieModel.getMovie(id);

  if(!movie) return null;

  return movie;
}

module.exports = {
  getMovie,
}