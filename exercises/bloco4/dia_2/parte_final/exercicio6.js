let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countOdd = 0;


for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        countOdd += 1;
    }
    
}
if (countOdd > 0){
    console.log('Quandidade de impares: ' + countOdd);
}else{
    console.log('Nenhum valor ímpar encontrado');
}
