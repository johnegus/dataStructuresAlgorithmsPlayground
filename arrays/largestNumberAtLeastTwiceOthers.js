// 747. Largest Number At Least Twice of Others
// Easy

// Share
// In a given integer array nums, there is always exactly one largest element.

// Find whether the largest element in the array is at least twice as much as every other number in the array.

// If it is, return the index of the largest element, otherwise return -1.

// Example 1:

let nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 

// Example 2:

let nums2 = [1, 2, 3, 4]
let nums3 = [0,0,2,3]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
//  var dominantIndex = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const num1 = nums[i];
//         for (let j = 0; j < nums.length; j++) {
//             let num2 = nums[j];
//             if (num1 >= num2 *2 && i !== j){
//                 return i;
//             }
            
//         }
//     }
//     return -1
// };

var dominantIndex = function(nums) {
    let max = Math.max(...nums)
    let maxIndex = nums.indexOf(max)
    nums.splice(nums.indexOf(max), 1)
    console.log(nums)
    let max2 = Math.max(...nums)
    if(max >= max2 * 2){
        return maxIndex
    }

    return -1
};

console.log(dominantIndex(nums))
console.log(dominantIndex(nums2))
console.log(dominantIndex(nums3))