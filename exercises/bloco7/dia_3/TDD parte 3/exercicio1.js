// Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados
//  a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, 
//  depois, altere-a para que passe nos testes. Use os casos de teste acima como inspiração, se tiver dúvidas!
// Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.
// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, 
// caso não esteja, altere o código para que ele passe nos testes.
// Copiar

const assert = require('assert');

const greetPeople = (people) => {

  let greeting = [];
  
  for (const person in people) {
    
    greeting.push(`Hello ${people[person]}`)
  }
  return greeting;
};
greetPeople(['Irina', 'Ashleigh', 'Elsa']);


const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.deepStrictEqual(output, result);



