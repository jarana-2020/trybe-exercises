function verifySmaller(ar) {
    let smaller = 0;
    for (index in ar) {
        if (ar[smaller] > ar[index]) {
            smaller = index;
        }
    }

    return smaller;
}
console.log(verifySmaller([2, 8, 1, 4]));