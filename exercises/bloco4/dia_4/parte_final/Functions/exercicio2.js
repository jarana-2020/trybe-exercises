function verifyBigger(ar){
    let bigger = 0;
    for( index in ar){
        if(ar[bigger] < ar[index]){
            bigger = index
        }

    }

    return bigger;
}
console.log(verifyBigger([2, 8, 1, 4]));