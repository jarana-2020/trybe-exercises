const readline = require('readline-sync');


const option = readline.questionInt(`Selecione uma opção:
  1 - Calculo do IMC
  2 - Velocidade Média
  3 - Jogo de Advinhação `);

switch (option) {
  case 1:
    require('./imc')
    break;

  case 2:
    require('./velocidade')
    break;

  case 3:
    require('./sorteio')
    break;

  default:
    console.log('Número inválido. Saindo');
    break;
}