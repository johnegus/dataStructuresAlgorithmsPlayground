// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Input:
input = [4,3,2,7,8,2,3,1]

// Output:
// [5,6]



/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     let disappeared = [];
//     let numbersToLength = [];
//     for (let i = 0; i < nums.length; i++){
//         numbersToLength.push(i+1)
        
//     }
//     for (let j = 0; j < nums.length; j++){
//         let index = numbersToLength.indexOf(nums[j]);
//         console.log(index)
//             if(index){
//                 numbersToLength.splice(index, 1)
//             }
        
        
//     }


//     return numbersToLength
// };

var findDisappearedNumbers = function(nums) {
    let allNumbersToLength = [];
    let length = nums.length
    for (let i = 0; i < length; i++){
        allNumbersToLength[i] = i+1
    }
    for (value of nums){
        allNumbersToLength[value -1] =-1
    }

   


    return allNumbersToLength.filter(i => i > 0)
};


console.log(findDisappearedNumbers(input))