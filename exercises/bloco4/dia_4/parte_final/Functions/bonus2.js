const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector){
    let newarray = [];
    for(let index = 0; index < vector.length; index += 1){
        if(vector[index] % 2 === 0){
            newarray.push(vector[index]);
        }
    }
    return newarray;
};

console.log(arrayOfNumbers(vector));;
