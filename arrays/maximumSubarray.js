// 53. Maximum Subarray
// Easy


// Share
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

// Example 1:

let nums = [-2,1]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(array) {
    let max = -99999
    let allTimeMax = array[0];

    for (let i = 0; i < array.length; i++) {
        const element1 = array[i];
        max = element1
        if (max > allTimeMax){
            allTimeMax = max
        }
        for (let j = i + 1; j < array.length; j++) {
            const element2 = array[j];
            max += element2 
            if (max >= allTimeMax){
                allTimeMax = max
            }
            // console.log("current max: " + max)
        }
        
    }
    return allTimeMax
};

console.log(maxSubArray(nums))