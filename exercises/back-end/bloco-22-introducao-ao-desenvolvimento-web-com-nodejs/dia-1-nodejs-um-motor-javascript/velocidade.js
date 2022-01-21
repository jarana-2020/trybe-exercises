const readline = require('readline-sync');

const distance = readline.questionInt('Informe a distância em metros:');
const time = readline.questionInt('Informe o tempo em segundos');

const calcAvgSpeed = () => {
  const speed = (distance/time).toFixed(2);
  console.log(`Velocidade média: ${speed} m/s`);
};

calcAvgSpeed();