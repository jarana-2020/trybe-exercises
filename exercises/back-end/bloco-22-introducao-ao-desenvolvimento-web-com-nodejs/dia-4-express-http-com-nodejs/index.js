const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

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

app.put('/users/:name/:age',(req,res) => {
  const { name,age } = req.params;
  res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`});
})

const readFile = () => {
  const simpsons = fs.readFileSync('./simpsons.json','utf-8');
  return JSON.parse(simpsons);
}

app.get('/simpsons',(req,res) => {
  const result = readFile();
  res.status(200).json(result);
})

app.get('/simpsons/:id',(req,res) => {
  const { id } = req.params;
  const result = readFile();
  const simpson =  result.find(character => character.id === id);
  if(!simpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }
  return res.status(202).json(simpson);
})

app.listen(3004,() => {
  console.log('listening on port 3004');
})

