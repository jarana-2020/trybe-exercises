// Finalize a implementação da função getChange(payable, paid) .
// payable é o valor a ser pago, ou o valor total
// paid é o valor que a pessoa pagou
// Copiar


function getChange(payable, paid) {

    const coins = [200, 100, 50, 20, 10, 5, 2, 1];
    const change = [];
    const { length } = coins;
    let remaining = paid - payable;

    if (paid < payable) throw new Error('paid value is not enough');


    for (let index in coins) {

        if (coins[index] <= remaining) {

            change.push(coins[index]);
            remaining -= coins[index];

            if (remaining === coins[index]) {

                change.push(coins[index]);
                remaining -= coins[index];
            }
        }
    }



    return change;
}

getChange(486, 600);

// Como dito anteriormente, os testes unitários já estão prontos, e sua implementação deve passar por todos eles.
// Copiar


const assert = require('assert');
const { randomBytes } = require('crypto');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);