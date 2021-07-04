function arrayOfNumbers(vector){
    let result = [];
    for(let index = 0; index < vector.length; index += 1){
        let numbers = vector[index];
        for(let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1){
            let current = numbers[secondIndex];
            if((current % 2) === 0){
                result.push(current);
            }

        }
    }
    return result;
}
arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]);