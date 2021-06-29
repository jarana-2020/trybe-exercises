function summationNumbers(num){
    let summation = 0;
    for(let index = 1; index <= num; index += 1){
        summation += index;
    }
    return summation;
};
console.log(summationNumbers(5));

