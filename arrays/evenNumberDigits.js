// 1295. Find Numbers with Even Number of Digits
// Easy


// Share
// Given an array nums of integers, return how many of them contain an even number of digits.
 

// Example 1:

let nums = [12,345,2,6,7896]
// Output: 2
let nums2 = [555,901,482,1771]
// Output: 1 

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let count = 0;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        let stringElement = element.toString();
        if (stringElement.length % 2 === 0){
            count++;
        }
    }
    return count;
};

console.log(findNumbers(nums))
console.log(findNumbers(nums2))