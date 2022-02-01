const express = require('express');
const { route } = require('express/lib/application');
const { User } = require('../models');
const router = express.Router();

router.get('/',async(req,res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.get('/search/:id',async(req,res) => {
  try {
    const { id } = req.params;
    const { email } =req.query;
    const user = await User.findOne({ where: { id, email } });
    if(!user) return res.status(404).json({ message: 'Usuário não encontrado' })
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async(req,res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async(req,res) => {
  try {
    const { id } = req.params;
    const { fullName, email } = req.body;
    const [updateUser] = await User.update(
      { fullName, email },
      { where: { id } },
    );

    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.delete('/:id', async(req,res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.destroy(
    { where: { id } },
  )
  if(!deletedUser) return res.status(404).json({ message: 'Usuário não encontrado' });
  return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;