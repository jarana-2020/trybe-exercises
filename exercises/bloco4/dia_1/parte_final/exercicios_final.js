let a = 5;
let b = 10;
let c = 20;
let adição = a + b;
let subtração = a - b;
let multiplicação = a * b;
let divisão = a / b;
let mod = a % b;
let maior;

if (a > b && a > c){
    maior = a;
}else if (b > a && b > c){
    maior = b;
}else{
    maior = c;
}


console.log(adição);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
console.log(mod);
console.log("Maior número é: " + maior);