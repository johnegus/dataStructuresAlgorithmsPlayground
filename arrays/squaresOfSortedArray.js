// 977. Squares of a Sorted Array
// Easy


// Share
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

let nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

let nums2 = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let newArray = []
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        newArray.push(element ** 2)
        
    }
    return newArray.sort((a, b) => a -b)
};

console.log(sortedSquares(nums))
console.log(sortedSquares(nums2))