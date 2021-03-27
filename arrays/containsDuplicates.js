// 217. Contains Duplicate
// Easy


// Share
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

let nums = [1,2,3,1]
// Output: true
// Example 2:

let nums2 = [1,2,3,4]
// Output: false
// Example 3:

let  nums3 = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    let set = [... new Set(nums)]

    if (set.length !== nums.length){
        return true;
    }
    return false;
};

console.log(containsDuplicate(nums))
console.log(containsDuplicate(nums2))
console.log(containsDuplicate(nums3))