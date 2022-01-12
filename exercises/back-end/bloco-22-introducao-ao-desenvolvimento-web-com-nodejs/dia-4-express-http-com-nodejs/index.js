const express = require('express');

const app = express();

const content = {
  message: 'pong',
}

app.get('/ping',(req,res) => {
  res.json(content);
})

app.listen(3004,() => {
  console.log('listening on port 3004');
})