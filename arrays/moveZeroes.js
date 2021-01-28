// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

let input = [0,1,0,3,12]
// Output: [1,3,12,0,0]



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let notZeroes = []
//     let zeroes = []

//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] !== 0){
//             notZeroes.push(nums[i])
//         } else {
//             zeroes.push(nums[i])
//         }
//     }
//     return [...notZeroes, ...zeroes]
// };


var moveZeroes = function(nums) {
    let position = 0;


    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            nums[position++] = nums[i]
        } 
    }
    for (i = position; i< nums.length; i++){
        nums[i] = 0;
    }
    return nums
};


console.log(moveZeroes(input))