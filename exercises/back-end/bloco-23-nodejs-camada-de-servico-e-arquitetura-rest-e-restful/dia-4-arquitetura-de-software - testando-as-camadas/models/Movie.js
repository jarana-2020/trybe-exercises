const connection = require('../models/connection');

const getMovie = async(id) => {
  const query = `SELECT id, title, directed_by as directedBy,
   release_year as releaseYear FROM movies.movie WHERE id = ?`;
  const [movie] = await connection.execute(query,[id]);

  if(movie.length === 0) return null

  const { title, directedBy, releaseYear } = movie[0];

  return {
    id,
    title,
    directedBy,
    releaseYear,
  }
};

module.exports = {
  getMovie,
};