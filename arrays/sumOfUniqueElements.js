// 1748. Sum of Unique Elements
// Easy

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

let nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

let nums2 = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
let nums3 = [1,2,3,4,5]
//15
let nums4 = [10,6,9,6,9,6,8,7]
//25

var sumOfUnique = function(nums) {
    let sum = 0;
    let object = {};
    for (let i = 0; i < nums.length; i++){
        object[nums[i]] = 0;
        
    }
    
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        object[num]++
    }

    for (key in object){
        if (object[key] === 1){
            sum += parseInt(key)
        }
    }
    console.log(object)
    return sum
};

console.log(sumOfUnique(nums))
console.log(sumOfUnique(nums2))
console.log(sumOfUnique(nums3))
console.log(sumOfUnique(nums4))