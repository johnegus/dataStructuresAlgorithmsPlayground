// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.


/**
 * @param {number[]} nums
 * @return {number}
 */

 // set up a counter
 //make a for loop through the nums
 // make a nested for loop that decrements from the end of nums to the i iterator through nums
 // if nums at index i = nums at index j we will add to the counter
 // O(N^2)
let numIdenticalPairs = function(nums) {
    let goodPairs = 0
    for (let i = 0; i < nums.length; i++){
        for (let j = nums.length-1; j>i; j--){
            if (nums[i] === nums[j]) goodPairs++
        }
    }
    return goodPairs;
};

//if we want to optimize time
// O(NlogN) time + O(1) space
let numIdenticalPairsOptimized = function(nums) {
    nums.sort()
    let goodPairs = 0;
    let currentCount = 1
    for (let i = 0; i < nums.length; i++){
        
            if (nums[i] === nums[i - 1]) {
                goodPairs += currentCount;
                currentCount++

            } else{
                currentCount = 1
            }

        
    }
    return goodPairs;
};