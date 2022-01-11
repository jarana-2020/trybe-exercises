const fs = require('fs').promises;

// fs.readFile('./simpsons.json','utf-8')
//   .then((content) => {
//     return JSON.parse(content);
//   })
//   .then((simpson) => {
//     return simpson.map(({id,name}) => `${id} - ${name}`);
//   })
//   .then((data) => {
//     data.forEach((character) => console.log(character))
//   })

// const getCharacterById = (id) => {
//   return new Promise((resolve,reject) => {
//     fs.readFile('./simpsons.json', 'utf-8')
//       .then((content) => {
//         const data = JSON.parse(content)
//         const result = data.find((simpson) => simpson.id === id)
//         if(!result) reject('id não encontrado')
//         resolve(result);
//       })
//   })
// }

// getCharacterById(20)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

// const removeCharacters = async() => {
//   const data = await fs.readFile('./simpsons.json', 'utf-8')
//     .then((content) => JSON.parse(content));
//   const result = data.filter(simpson => simpson.id != '10' && simpson.id != '6')
//   await fs.writeFile('./simpsons.json',JSON.stringify(result));
// }

// removeCharacters();

// const createFileFamily = async() => {
//   const data = await fs.readFile('./simpsons.json', 'utf-8')
//     .then((content) => JSON.parse(content));
//   const result = data.filter(simpson => 
//     parseInt(simpson.id) >= 1 && parseInt(simpson.id) <= 4)

//   await fs.writeFile('./simpsonFamily.json',JSON.stringify(result));
// }

// createFileFamily();

// const addCharacter = async() => {
//   const data = await fs.readFile('./simpsonFamily.json', 'utf-8')
//     .then((content) => JSON.parse(content));
//   const result = [...data,{id:"5",name:"Nelson Muntz"}]
//   await fs.writeFile('./simpsonFamily.json',JSON.stringify(result));
// }

// addCharacter();

const replaceCharacter = async() => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((content) => JSON.parse(content));
  data.splice(-1,1,{id:"5",name:"Maggie Simpson"})
  await fs.writeFile('./simpsonFamily.json',JSON.stringify(data));
}

replaceCharacter();

