/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const limit = 2147483648;
    const negative = x < 0 ? -1 : 1;
    const result = Number(String(Math.abs(x)).split('').reverse().join(''));
    return result > limit ? 0 : result * negative;
};