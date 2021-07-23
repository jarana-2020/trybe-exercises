// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.


// function testingScope(escopo) {
//     if (escopo === true) {
//       const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }


  const testingScope = (escopo) => {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    escopo === true ? console.log(`${ifScope} ótimo, fui utilizada no escopo ! `) : console.log(`${elseScope}`);
  }

 testingScope(false);

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}
const sortArray = sortAndEvens();
console.log(`Segue array ordenado ${sortArray}`); // será necessário alterar essa linha 😉

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// function compareNumbers(a, b) {
//     return a - b;
// }
const sortAndEvens = () => {
    oddsAndEvens.sort((a, b) =>{
        return a - b
    });
    return oddsAndEvens;
}
const sortArray = sortAndEvens();
console.log(`Segue array ordenado ${sortArray}`); // será necessário alterar essa linha 😉
