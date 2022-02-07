/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   if (s === null || s.length < 1) {
       return '';
   } 
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i ++) {
        let length1 = expandAroundCenter(s, i, i)
        let length2 = expandAroundCenter(s, i, i + 1);
        let length = Math.max(length1, length2);
        if (length > end - start) {
            start = i - (length - 1) / 2;
            end = i + length / 2;
        }
    }
    return s.substring(Math.ceil(start), end + 1);
}

var expandAroundCenter = function (s, L, R) {
    while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}