const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const generateToken = require('./generateToken');

const app = express();
app.use(bodyParser.json());

const content = {
  message: 'pong',
}

app.get('/ping',(req,res) => {
  const { authorization } = req.headers;
  if(!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  res.json(content);
})

app.post('/hello',(req,res) => {
  const { name } = req.body;
  const { authorization } = req.headers;
  if(!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
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

const readFile = async() => {
  const simpsons = await fs.readFile('./simpsons.json','utf-8')
  return JSON.parse(simpsons);
}

const writeFile = (content) => {
  return fs.writeFile('simpsons.json', JSON.stringify(content));
};

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

app.post('/simpsons', async(req,res) => {
  const { id, name } = req.body;
  const result = await readFile();
  const simpson = result.find(character => character.id === id);
  if(simpson) {
    return res.status(409).json({ message: 'id already exists' });
  }
  result.push({id, name })
  await writeFile(result);

  return res.status(204).end();
})

app.post('/signup',(req,res) => {
  const { email, firstName, password, phone } = req.body;
  if(!email || !firstName || !password || !phone) {
    return res.status(401).json({ message: 'missing fields'});
  }

  const randomToken = generateToken();

  res.status(200).json({ token: `${randomToken}`});
})

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3004,() => {
  console.log('listening on port 3004');
})

