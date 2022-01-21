const fs = require('fs');

const verifyNumber = (number) => {
  if(typeof number != "number") {
    return 'o valor deve ser um número'
  } else if(number > 0) {
    return 'positivo'
  } else if(number < 0) {
    return 'negativo'
  } else {
    return 'neutro'
  }
}

const writeFile = (nameFile,content) => {
  try {
    fs.writeFileSync(nameFile, content);
    return 'ok';
  } catch (error) {
    return 'erro na escrita do arquivo';
  }
}

module.exports = {
  verifyNumber,
  writeFile,
}