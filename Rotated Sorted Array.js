/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0
    var end = nums.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid; 
        }
        else if (nums[mid] < nums[end]) {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            }else {
                end = mid - 1;
            }
        } else {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid -1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
};
