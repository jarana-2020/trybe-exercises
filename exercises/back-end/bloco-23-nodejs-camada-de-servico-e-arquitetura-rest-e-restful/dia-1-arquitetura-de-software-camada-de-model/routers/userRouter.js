const router = require('express').Router();

const {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
} = require('../middlewares/validations');

const User = require('../models/User');

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

router.get(
  '/',
  async(_req,res) => {
    try {
      const users = await User.getUsers();
      const usersIsEmpty = users.length === 0;
      if (usersIsEmpty) return res.status(200).json([]);
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
)

router.get(
  '/:id',
  async(req,res) => {
    try {
      const { id } = req.params;
      const user = await User.getUserById(Number(id));
      if (!user) return res.status(400).json({"error": true,"message": "Usuário não encontrado"});
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
)

router.put(
  '/:id',
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  async(req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, password } = req.body;
      const user = await User.updateUser(id,firstName,lastName,email,password);
      if (!user) return res.status(400).json({"error": true,"message": "Usuário não encontrado"});
      return res.status(200).json({id,firstName,lastName,email,password});
    } catch (error) {
      console.log(error);
      res.send(error);
    }
   
  }
);

module.exports = router;