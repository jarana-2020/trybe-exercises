const validateBook = (req,res,next) => {
  const { title, author, pageQuantity } = req.body;
  if(!title || typeof title !== 'string') {
    return res.status(400).json({ message: 'o campo title é requerido e deve ser texto' })
  }
  if(!author || typeof author !== 'string') {
    return res.status(400).json({ message: 'o campo author é requerido e deve ser texto' })
  }
  if(!pageQuantity || typeof pageQuantity !== 'number') {
    return res.status(400).json({ message: 'o campo pageQuantity é requerido e deve ser numérico' })
  }
  next();
}

module.exports = {
  validateBook,
}