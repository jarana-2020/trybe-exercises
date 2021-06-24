let cost = 100.00;
let valueSale = 150.00;
let costTotal = cost * 1.20;
let profit = valueSale - costTotal;

if (cost < 0 || valueSale < 0){
    console.log("Nenhum dos valores de entrada pode ser menor que 0");
}else{
    profit = profit * 1000;
    console.log("O valor de lucro ao vender 1000 produtos é de US " + profit);
}

