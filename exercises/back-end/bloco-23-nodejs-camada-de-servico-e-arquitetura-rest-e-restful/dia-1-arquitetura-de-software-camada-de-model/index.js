const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const userRouter = require('./routers/userRouter');

app.use('/user',userRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});