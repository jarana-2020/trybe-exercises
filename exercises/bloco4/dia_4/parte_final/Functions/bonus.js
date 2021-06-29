function verifyString(string){
    let tableNumbersRomans = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
    };

    let arrayNumbers = [];
    let result = 0;
    let resultBefore = 0;

    for(let index in string){
        arrayNumbers[index] = tableNumbersRomans[string[index]];
    }

    for(let index in arrayNumbers){
        if(arrayNumbers[index] > resultBefore){
           result = arrayNumbers[index] - resultBefore;
           resultBefore = arrayNumbers[index];
        }else{
            result += arrayNumbers[index];
            resultBefore = arrayNumbers[index];
        }
    }

    return result;
}

console.log(verifyString('IXVIII'));