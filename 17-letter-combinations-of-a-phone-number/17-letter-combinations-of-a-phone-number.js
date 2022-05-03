/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return []
    
    const split = [...digits]
    const queue = numberDictionary[split[0]].map(x => [x, 0])
    
    
    const res = []
    
    while(queue.length){
        const [curr, idx] = queue.shift()
        if (curr.length === digits.length){
            res.push(curr)
        } else {
            for (const nextChar of numberDictionary[digits.charAt(idx + 1)])
            queue.push([curr+nextChar, idx + 1])
        }
    }
    
    return res;
};

var numberDictionary = {
    2: ['a', 'b', 'c'], 
    3: ['d', 'e', 'f'], 
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'], 
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}