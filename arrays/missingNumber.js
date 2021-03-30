// 268. Missing Number
// Easy


// Share
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

 

// Example 1:

let nums = [3,0,1]
let nums2 = [1]
let nums3 = [9,6,4,2,3,5,7,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
    let range = nums.length
    if (nums.length === 1 && nums[0] === 1) return 0;
    if (nums.length === 1 && nums[0] === 0) return 1;
    nums.sort()
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if (index > 0 && nums[index] - nums[index-1] !== 1){
            return nums[index] - 1
        } 
    }
    return nums.length
};

console.log(missingNumber(nums))
console.log(missingNumber(nums2))
console.log(missingNumber(nums3))