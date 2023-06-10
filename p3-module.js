function valueFromArray(arr) {
    return arr.reduce(
        (acc, val) =>
        Array.isArray(val) ? valueFromArray(val) : acc + valueFromCoinObject(val),
        0
    );
}

function validDenomination(coin) {
   const coinValues = [1, 5, 10, 25, 100];
    return coinValues.indexOf(coin) !==-1;
}

function valueFromCoinObject(obj) {
    const { denom = 0, count = 0 } = obj;
    return validDenomination(denom) ? denom * count: 0;
}

function coinCount(...coinage) {
    return valueFromArray(coinage);
}

module.exports = { coinCount };

console.log("{}", coinCount({denom: 5, count: 3}));

console.log("{}", coinCount({denom: 5, count: 3}));
const coins = [{denom: 25, count: 2}, {denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
//extra credit
console.log("[{}]", coinCount(coins));

