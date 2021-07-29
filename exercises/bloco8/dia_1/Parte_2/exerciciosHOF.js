// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
//  Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id .
//   A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente
//    um email no formato nome_da_pessoa@trybe.com .
// Copiar


const person = (fullName) => {
   const email = fullName.toLowerCase().split(' ').join('_');
   return {fullName, email: `${email}@trybe.com`};
};


const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(person));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
//  O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const prizeDraw = (num, callback) => {
    const drawnNumber = Math.floor(Math.random() * 6);
    return callback(num, drawnNumber) ? "Parabéns você ganhou" : "Tente novamente";
    
}

const verifyNumbers = (myNumber, number) => myNumber === number;

console.log(prizeDraw(4, verifyNumbers));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas 
// a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem 
// da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
// Copiar

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultAnswers = (rightAnswers, studentAnswers, callback) => {
  let result = 0;
  for (let index in rightAnswers) {
    const valueReturn = callback(rightAnswers[index],studentAnswers[index]);
    result += valueReturn;
  }
  return `Resultado: ${result} respostas corretas`;
}

console.log(resultAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, sAnswer) => {
  if (rAnswer === sAnswer) {
    return 1;
  } if (sAnswer === 'N.A') {
    return 0;
  }
  return -0.5;

}))


const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
    const minDmg = 15;
    const { strength } = dragon;
    const dragonDmg = Math.floor((Math.random() * (strength - minDmg + 1) + minDmg));
    return dragonDmg;
  };