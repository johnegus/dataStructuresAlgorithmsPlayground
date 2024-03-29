// 153. Find Minimum in Rotated Sorted Array
// Medium
// Share
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

 

// Example 1:

let nums = [3,4,5,1,2]
let nums2 = [11,13,15,17]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    for (let index = 0; index < nums.length; index++) {
        if (index > 0 && nums[index] < nums[index -1]){
            return nums[index];
        } 
    }
    return nums[0]
};

console.log(findMin(nums))
console.log(findMin(nums2))