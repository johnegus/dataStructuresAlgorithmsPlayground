// 912. Sort an Array
// Medium

// Share
// Given an array of integers nums, sort the array in ascending order.

 

// Example 1:
let nums = [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:

let nums2 = [5,1,1, 10, 2,0,0]
// Output: [0,0,1,1,2,5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return nums.sort((a, r) => (a - r))
};

console.log(sortArray(nums))
console.log(sortArray(nums2))