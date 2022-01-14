const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRouter = require('./routers/userRouter');
const btcRouter = require('./routers/btcRouter');
const postsRouter = require('./routers/postsRouter');

app.use(bodyParser.json());
app.use('/user',userRouter);
app.use('/btc',btcRouter);
app.use('/posts',postsRouter);



app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});


app.listen(3004, () => {
  console.log('Aplication listening on port 3004');
});