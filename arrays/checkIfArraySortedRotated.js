// 1752. Check if Array Is Sorted and Rotated
// Easy


// Share
// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.
// Example 1:

let nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
// Example 2:

let nums2 = [2,1,3,4]
// Output: false
let nums3 = [6,10,6]
//O true
let nums4 = [6,4,7,1,3]
//false
let nums5 = [1,2,3]
//true
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var check = function(nums) {
    let rotations = 0;
    if (nums.length === 1) return true;
    if (nums[0] < nums[nums.length-1]){
        rotations++;
    }
    for (let index = 1; index < nums.length; index++) {
        console.log(index)
        
        let num = nums[index];
        if (num < nums[index-1]){
            rotations++;
        }
  
        if (rotations > 1){
            return false;
        }
        
    }
    return true;
};

console.log(check(nums))
console.log(check(nums2))
console.log(check(nums3))
console.log(check(nums4))
console.log(check(nums5))