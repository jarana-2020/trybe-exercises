function bigger (a, b) {
    let maior = 0;
    if(a > b){
        maior = a;
    }else{
        maior = b;
    }
    return maior;    
};

console.log('O maior é ' + bigger(10, 5));

