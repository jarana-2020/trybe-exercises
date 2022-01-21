const calcNumbers = (num1,num2,num3) => {
  const promisse = new Promise((resolve,reject) =>{
    if(typeof num1 != "number" || typeof num2 != "number" 
      || typeof num3 != "number") {
        reject('Informe apenas números');
    }

    const result = ((num1 + num2) * num3);

    if(result < 50) reject('Valor muito baixo');

    resolve(result);
  })

  return promisse;
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const callCalcNumbers = async () => {
const randomNumbers = Array.from({length: 3}).map(getRandomNumber);

try {
  const result = await calcNumbers(...randomNumbers);
  console.log(result);
} catch (error) {
  console.error(error);
}
};

callCalcNumbers();