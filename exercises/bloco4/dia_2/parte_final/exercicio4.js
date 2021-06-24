let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let average = 0;

for (let index = 0; index < numbers.length; index += 1){
    sumNumbers += numbers[index];
    average = sumNumbers / numbers.length;
}
if (average > 20){
    console.log('valor maior que 20');
}else{
    console.log('valor menor que 20');
}
