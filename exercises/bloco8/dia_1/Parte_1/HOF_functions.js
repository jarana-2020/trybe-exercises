// Vamos praticar com os seguintes exercícios:

// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const wakingUp = () => 'Acordando';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const haveCoffe = () => 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleep = () => 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado
//  da execução das funções que você criou nos exemplos anteriores. Exemplo:
// Ao chamar a função doingThings:
// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const doingThings = (func) => {
    const thing = func();
    console.log(thing);
}

doingThings(wakingUp);

