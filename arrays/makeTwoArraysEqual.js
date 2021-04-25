// 1460. Make Two Arrays Equal by Reversing Sub-arrays
// Easy

// Share
// Given two integer arrays of equal length target and arr.

// In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

// Return True if you can make arr equal to target, or False otherwise.

 

// Example 1:

let target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
// 3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.
// Example 2:

let target2 = [7], arr2 = [7]
// Output: true
// Explanation: arr is equal to target without any reverses.
// Example 3:

let target3 = [1,12], arr3 = [12,1]
// Output: true
// Example 4:

let target4 = [3,7,9], arr4 = [3,7,11]
// Output: false
// Explanation: arr doesn't have value 9 and it can never be converted to target.
// Example 5:

let target5 = [1,1,1,1,1], arr5 = [1,1,1,1,1]
// Output: true

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    target.sort((a,b) => a - b)
    arr.sort((a,b) => a- b)
    console.log("target " + target)
    console.log("arr " + arr)
    if(target.toString() === arr.toString()) {
        return true
    }
    return false
};

console.log(canBeEqual(target, arr))
console.log(canBeEqual(target2, arr2))
console.log(canBeEqual(target3, arr3))
console.log(canBeEqual(target4, arr4))
console.log(canBeEqual(target5, arr5))