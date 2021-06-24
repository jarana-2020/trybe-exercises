let aliquotInss;
let aliquotIr;
let grossSalary = 3000.00;

if (grossSalary < 1556.94){
    aliquotInss = grossSalary * 0.08;
}else if (grossSalary > 1556.94 && grossSalary <= 2594.92){
    aliquotInss = grossSalary * 0.09;
}else if (grossSalary > 2594.92 && grossSalary <= 5189.82){
    aliquotInss = grossSalary * 0.11;
}else if (grossSalary > 5189.82){
    aliquotInss = 570.88;
}

let salaryBase = grossSalary - aliquotInss;

if (salaryBase <= 1903.98){
    aliquotIr = 0;
}else if (salaryBase > 1903.98 && salaryBase <= 2826.65){
    aliquotIr = (salaryBase * 0.075) - 142.80;
}else if (salaryBase > 2826.65 && salaryBase <= 3751.05){
    aliquotIr = (salaryBase * 0.15) - 354.80;
}else if (salaryBase > 3751.05 && salaryBase <= 4664.68){
    aliquotIr = (salaryBase * 0.225) - 636.13;
}else if (salaryBase > 4664.68){
    aliquotIr = (salaryBase * 0.275) - 869.36;
}
let salaryLiquid = salaryBase - aliquotIr;
console.log("O salário liquido é de: " + salaryLiquid);