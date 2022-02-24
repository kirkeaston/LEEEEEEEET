/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanNumerals = {
        1: {
            0: "",
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI", 
            7: "VII",
            8: "VIII",
            9: "IX"
        },
        2: {
            0: "",
            1: "X",
            2: "XX",
            3: "XXX",
            4: "XL",
            5: "L",
            6: "LX",
            7: "LXX",
            8: "LXXX",
            9: "XC"
        },
        3: {
            0: "",
            1: "C",
            2: "CC",
            3: "CCC",
            4: "CD",
            5: "D",
            6: "DC",
            7: "DCC",
            8: "DCCC",
            9: "CM"
        },
        4: {
            1: "M",
            2: "MM",
            3: "MMM"
        }
    }
    
    let result = '';
    let x = 0;
    
    const numToStringArray = Array.from(num.toString(), Number);
    for (let i = numToStringArray.length; i > 0; i--) {
        result += romanNumerals[i][numToStringArray[x++]];
    }
    return result;
};