// 1619. Mean of Array After Removing Some Elements
// Easy

// 128

// 27

// Add to List

// Share
// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.

 

// Example 1:

let arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
// Output: 2.00000
// Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.
// Example 2:

// Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
// Output: 4.00000
// Example 3:

// Input: arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
// Output: 4.77778
// Example 4:

// Input: arr = [9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]
// Output: 5.27778
// Example 5:

let array = [4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]
// Output: 5.29167

let empy = [0, 2]
/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {

    
     let length = arr.length
     let fiver = length/20
     arr.sort((a, b) => a - b)
    let arr2 = arr.slice(fiver)
    let arr3 = arr2.slice(0, arr2.length - fiver)
    const sum = arr3.reduce((acc, cur) => acc + cur);
  const average = sum/arr3.length;
  return average;
};

console.log(trimMean(arr))
console.log(trimMean(array))
console.log(trimMean(empy))