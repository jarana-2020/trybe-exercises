function verifyPalimdrome(word){
    for(key in word){
        if(word[key] != word[(word.length - 1) - key]){
            return false;
        }
    }
        return true;
};

console.log('É palindro? ' + verifyPalimdrome('arara'));