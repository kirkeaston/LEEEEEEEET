/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i ++) {
        let start = nums[i];
        let count = 0;
        do {
            start = nums[start];
            count ++;
        }
        while (start !== nums[i]);
        result = Math.max(result, count);
    }
    return result;
};