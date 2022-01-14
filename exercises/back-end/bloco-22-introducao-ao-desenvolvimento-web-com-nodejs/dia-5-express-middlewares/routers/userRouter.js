const router = require('express').Router();

const {
  validateEmail,
  validateName,
  validatePassword,
} = require('../middlewares/validations');


router.post(
  '/register',
  validateName,
  validateEmail,
  validatePassword,
    (_req, res) => {
      res.status(201).json({ message: 'user created' });
    }
);

router.post(
  '/login',
  validateEmail,
  validatePassword,
    (_req, res) => {
      res.status(200).json({ token: '86567349784e' });
    }
);

module.exports = router;