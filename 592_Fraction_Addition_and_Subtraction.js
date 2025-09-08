/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function reduce(numerator, denominator) {
        let gcdValue = gcd(Math.abs(numerator), Math.abs(denominator));
        return [numerator / gcdValue, denominator / gcdValue];
    }

    let numerator = 0, denominator = 1;
    const regex = /[+-]?\d+\/\d+/g;
    const matches = expression.match(regex);

    for (let match of matches) {
        let [num, denom] = match.split('/').map(Number);
        numerator = numerator * denom + num * denominator;
        denominator = denominator * denom;
        [numerator, denominator] = reduce(numerator, denominator);
    }

    if (denominator < 0) {
        numerator = -numerator;
        denominator = -denominator;
    }

    return `${numerator}/${denominator}`;
};