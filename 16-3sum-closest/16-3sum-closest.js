/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3 || nums.length > 1000) return 0;
    
    let closest = Number.MAX_VALUE;
    let result;
    for (let i = 0; i < nums.length; i ++) {
        for (let j = i + 1; j < nums.length; j ++) {
            for (let k = j + 1; k < nums.length; k ++) {
                var currDistance = distanceFromTarget(nums[i], nums[j], nums[k], target);
                if (currDistance < closest) {
                    closest = currDistance;
                    result = nums[i] + nums[j] + nums[k];
                }
            }
        }
    }
    return result; 
};

var distanceFromTarget = function(num1, num2, num3, target) {
    const sum = num1 + num2 + num3;
    return Math.abs(sum - target); 
}