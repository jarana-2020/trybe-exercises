const MovieService = require('../services/Movie');

const getMovie = async(req,res) => {
  try {
    const { id } = req.params;
    const response = await MovieService.getMovie(id);

    if(!response) return res.status(400).send('Filme não encontrado');

    return res.status(200).json(response);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getMovie,
}