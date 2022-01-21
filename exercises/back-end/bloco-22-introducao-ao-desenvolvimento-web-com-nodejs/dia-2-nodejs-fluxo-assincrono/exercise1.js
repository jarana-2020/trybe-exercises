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

// calcNumbers(10,10,2)
//   .then( result => console.log(result))
//   .catch(error => console.log(error))

  //exercise 2

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

const callCalcNumbers = () => {
  const randomNumbers = Array.from({length: 3}).map(getRandomNumber);

  calcNumbers(...randomNumbers)
  .then( result => console.log(result))
  .catch(error => console.log(error))
  
};

callCalcNumbers();

