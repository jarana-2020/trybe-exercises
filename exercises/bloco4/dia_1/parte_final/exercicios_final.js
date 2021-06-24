let a = 5;
let b = 10;
let c = 20;
let adição = a + b;
let subtração = a - b;
let multiplicação = a * b;
let divisão = a / b;
let mod = a % b;
let maior;
let verificaPositivo = 80;
let angulo1 = 40;
let angulo2 = 60;
let angulo3 = 80;
let somaAngulos = angulo1 + angulo2 + angulo3;
let pecaXadrez = "Bishop";
let grade = 69;


if (a > b && a > c){
    maior = a;
}else if (b > a && b > c){
    maior = b;
}else{
    maior = c;
}

if (verificaPositivo < 0){
    console.log("negativo");
}else if (verificaPositivo > 0){
    console.log("positivo");
}else{
    console.log("zero");
}
if(somaAngulos == 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
    console.log("true")
}else if (somaAngulos != 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
    console.log("false")
}else{
    console.log("Um dos angulos do triangulo é negativo, favor verificar");
}

switch(pecaXadrez.toLowerCase()){
    case "bishop":
        console.log("Movimento da peça é diagonal");
        break;
    case "king":
        console.log("Movivento da peça é (horizontal, vertical e diagonal)");
        break;
    case "queen":
        console.log("Movimento da peça é ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    default:
        console.log("A peça informada não valida !!!");            
}
 
let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}  



console.log(adição);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
console.log(mod);
console.log("Maior número é: " + maior);