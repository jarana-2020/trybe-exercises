const readline = require('readline-sync');


const height = readline.questionFloat('Qual é a sua altura ?');
const weight = readline.questionFloat('Qual é o seu peso ?');

const resultImc = (imc) => {
  if(imc < 18.5) {
    return ('Abaixo do peso (magreza)');
  } else if (imc >= 18.5 && imc <= 24.9) {
    return ('Peso normal');
  } else if (imc >= 25 && imc <= 29.9) {
    return ('Acima do peso (sobrepeso) ');
  } else if (imc >= 30 && imc <= 34.9) {
    return ('Obesidade grau I');
  } else if (imc >= 35 && imc <= 39.9) {
    return ('Obesidade grau II');
} else {
  return ('Obesidade graus III e IV ');
}
}

const calcImc = () => {
  const calcHeight = Math.pow(height,2);
  const imc = (weight/calcHeight).toFixed(2);
  const result = resultImc(imc);
  console.log(`Imc: ${imc}, ${result}`);
};

calcImc();



