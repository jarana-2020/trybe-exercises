const readline = require('readline-sync');


const height = readline.questionFloat('Qual é a sua altura ?');
const weight = readline.questionFloat('Qual é o seu peso ?');
const imc = (weight/(height * height)).toFixed(2);

console.log(`Imc: ${imc}`);