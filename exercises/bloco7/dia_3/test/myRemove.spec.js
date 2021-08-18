const myRemove = require('../exercicio2');

describe('myRemove', () => {
    test('Return an array without the number informed in parameter item', () => {
       expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    test('Return the expected array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
     })

    test('Not return the array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
     })
});

describe('Verify if the array has not been chaged', () => {
    const newArray = [8, 9, 10, 11];
    expect(newArray).toEqual([8, 9, 10, 11]);
})