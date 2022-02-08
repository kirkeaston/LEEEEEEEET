/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const iteration = numRows * 2 - 2;
    let result = [];
    
    
    for (let i = 0; i < numRows; i ++) {
        for (let j = 0; j + i < s.length; j = j + iteration) {
            result.push(s.charAt(j + i));
            if (i !== 0 && i !== numRows - 1 && j + iteration - i < s.length) {
                result.push(s.charAt(j + iteration - i));
            }
        }
    }
    return result.join('');
};