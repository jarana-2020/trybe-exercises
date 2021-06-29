function BiggerRepeat(numbers) {
    let contNumber = 0;
    let numberRepeat = 0;
    let indexNumberRepeat = 0;
    for (let index in numbers) {
        let verifyNumber = numbers[index];
        for (let secondIndex in numbers) {
            if (verifyNumber === numbers[secondIndex]) {
                contNumber += 1;
            }
        }
        if (contNumber > numberRepeat) {
            numberRepeat = contNumber;
            indexNumberRepeat = index;
        }
        contNumber = 0;
    }
    return numbers[indexNumberRepeat];
}
console.log(BiggerRepeat([2, 2, 3, 4, 3, 3]));
