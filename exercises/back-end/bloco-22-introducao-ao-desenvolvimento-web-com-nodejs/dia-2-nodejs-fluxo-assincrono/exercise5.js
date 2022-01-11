const fs = require('fs').promises;

fs.readFile('./simpsons.json','utf-8')
  .then((content) => {
    return JSON.parse(content);
  })
  .then((simpson) => {
    return simpson.map(({id,name}) => `${id} - ${name}`);
  })
  .then((data) => {
    data.forEach((character) => console.log(character))
  })

