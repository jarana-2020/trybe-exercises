// index.js
const express = require('express');
const { Adress, Employee } = require('./models');
const { Book, User } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Adress, as: 'adresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.query.includeAdresses);
    const employee = await Employee.findOne({ where: { id } });

    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }
    
    if (req.query.includeAdresses === 'true') {
      const adresses = await Adress.findAll({ where: { employeeId: id } });
      console.log( 'check', adresses);
      return res.status(200).json({ employee, adresses });
    }


    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;