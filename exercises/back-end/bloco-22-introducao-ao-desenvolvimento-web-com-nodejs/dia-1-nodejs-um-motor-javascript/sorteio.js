const readline = require('readline-sync');


const resultGame = (number, answer) => {
  if (number === answer) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${number}`);
  }
}

const verifyOption = () => {
  const question = readline.question('Deseja tentar novamente? "s para sim" "n para não"');
  if (question === 's') {
    runGame();
  } else {
    console.log('Até logo');
  }
;}


const runGame = () => {
  const randomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  console.log('Tente adivinhar o numero !!!');
  const getNumber = readline.questionInt('Escolha um numero de 0 a 10 ');
  resultGame(randomNumber,getNumber);
  verifyOption();
};

runGame();
