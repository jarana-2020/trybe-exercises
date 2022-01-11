const rl = require('readline-sync');
const fs = require('fs').promises;

const getQuestion = () => {
  const answer = rl.question('Digite o caminho: ');
  return answer
}

const writeFile = async() => {
  const file = getQuestion();
  try {
    const fileContent = await fs.readFile(file,'utf-8');
    console.log(fileContent);
  } catch (error) {
    console.log('Arquivo Inexistente');
  }
}

writeFile();