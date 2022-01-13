const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const content = {
  message: 'pong',
}

app.get('/ping',(req,res) => {
  res.json(content);
})

app.post('/hello',(req,res) => {
  const { name } = req.body;
  res.status(200).json({message: `Hello, ${name}`});
})

app.post('/greetings',(req,res) => {
  const { name, age } = req.body;

  if(age > 17) {
    res.status(200).json({message: `Hello, ${name}`});
  } else {
    res.status(401).json({message: 'Unauthorized'})
  }
})  

app.listen(3004,() => {
  console.log('listening on port 3004');
})

