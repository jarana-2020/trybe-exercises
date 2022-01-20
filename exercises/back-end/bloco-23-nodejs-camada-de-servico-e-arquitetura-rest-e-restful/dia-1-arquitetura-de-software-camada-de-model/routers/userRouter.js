const router = require('express').Router();

const {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
} = require('../middlewares/validations');

const User = require('../models/user');

router.post(
  '/',
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  async(req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const userId = await User.insertUser(firstName,lastName,email,password);
      res.status(201).json({id: userId, firstName, lastName, email, password});
    } catch (error) {
      console.log(error);
      res.send(error);
    }
   
  }
);

module.exports = router;