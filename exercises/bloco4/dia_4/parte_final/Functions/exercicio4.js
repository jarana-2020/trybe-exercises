function verifyBiggerName(name){
    let biggerName = name[0];
    for(let index in name){
        if(biggerName.length < name[index].length){
            biggerName = name[index];
        }
    }
    return biggerName;
}
console.log(verifyBiggerName(['Ju', 'Doraci', ' Kelly']));
