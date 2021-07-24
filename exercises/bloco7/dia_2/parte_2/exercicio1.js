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
