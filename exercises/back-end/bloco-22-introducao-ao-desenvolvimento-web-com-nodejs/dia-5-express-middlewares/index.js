const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRouter = require('./routers/userRouter');
const btcRouter = require('./routers/btcRouter');

app.use(bodyParser.json());
app.use('/user',userRouter);
app.use('/btc',btcRouter);



app.listen(3004, () => {
  console.log('Aplication listening on port 3004');
});