// 442. Find All Duplicates in an Array
// Medium

// 3433

// 182

// Add to List

// Share
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
let array = [4,3,2,7,8,2,3,1]

// Output:
// [2,3]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let object = {};
    let newArray = []
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (typeof(object[element]) !== 'undefined'){
            newArray.push(element)
        }
        object[element] = element
        
    }
    return newArray
};

console.log(findDuplicates(array))