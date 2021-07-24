const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//   Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado,
//   a chave que deverá ser adicionada e o valor dela.

const addShift = (obj, key, value) => {
    obj[key] = value;
};

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const showkeys = (obj) => {
    return Object.keys(obj);

}
console.log(showkeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.

const sizeObject = (obj) => {

    return Object.keys(obj).length;
}

console.log(sizeObject(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showValues = (obj) => Object.values(obj);
console.log(showValues(lesson3));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 
// Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
console.log(sumStudents());

const sumStudents2 = (obj) => {
    const keys = Object.keys(obj);
    let total = 0;
    for (let index = 0; index < keys.length; index += 1) {
        const currentValue = keys[index];
        total += (obj[currentValue].numeroEstudantes);
    }
    return total
};
console.log(sumStudents2(allLessons)); 

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// Copiar
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueKey = (obj, index) => Object.values(obj)[index];
console.log(getValueKey(lesson1,0));

