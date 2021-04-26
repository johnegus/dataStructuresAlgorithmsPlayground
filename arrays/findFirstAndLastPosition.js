// 34. Find First and Last Position of Element in Sorted Array
// Medium

// Share
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

// Example 1:

let nums = [5,7,7,8,8,8], target = 8
// Output: [3,4]
// Example 2:

let nums2 = [5,7,7,8,8,10], target2 = 6
// Output: [-1,-1]
// Example 3:

let nums3 = [], target3 = 0
// Output: [-1,-1]

let nums4 = [1], target4 = 1
// [0,0]

let nums5 = [1,4], target5 = 4
// [1,1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var searchRange = function(nums, target) {
//     let first = nums.indexOf(target)
//     let last = nums.lastIndexOf(target)
//     return [first, last]
// };

var searchRange = function(nums, target) {
    let first = -1
    let last = -1
    if(nums.length === 1 && target === nums[0]){
        return [0,0]
    }
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element === target && index === nums.length -1){
            return [index, index]
        }
        if (element === target){
            first = index
            for (let j = index+ 1; j < nums.length; j++) {
                const element2 = nums[j];
                if(element2 === element && j === nums.length - 1){
                    last = j
                    return [first, last]
                }
                if (element2 !== element){
                    last = j - 1
                    return [first, last]
                } 
                
            }
        }
        
    }
    return [first, last]
};
console.log(searchRange(nums, target))
console.log(searchRange(nums2, target2))
console.log(searchRange(nums3, target3))
console.log(searchRange(nums4, target4))
console.log(searchRange(nums5, target5))