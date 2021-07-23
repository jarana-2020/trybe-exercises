
const getButton = document.getElementById('btn-count');
const getP = document.getElementById('counter');
// Crie uma função que receba um número e retorne seu fatorial.

const factorial = (number) => {
    
    let value = 1;

    for (let index = 2; index <= number; index += 1){
        
        value *= index;
    }

    return value;
};
console.log(factorial(4));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longWord = (text) => {
    
    let arrayWord = text.split(' ');
    let maxWord = 0;
    let result = '';

    for (let index of arrayWord){
        if (index.length > maxWord){
            maxWord = index.length;
            result = index;
        }
    }

    return result;
};

console.log(longWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

const buldString = (text) => {
    let string = 'Tryber x aqui!';
    let newString = string.replace('x', text);
    let sortArray = array.sort((a, b) => a - b);
    let result = `${newString} Minhas cinco principais habilidades são: ${sortArray}`;
    
    return result
}

console.log(buildSkillsPhrase("Julio"));

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));