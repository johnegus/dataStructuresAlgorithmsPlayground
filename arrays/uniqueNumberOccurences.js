// 1207. Unique Number of Occurrences
// Easy

// Share
// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

 

// Example 1:

// let arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

let arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true


var uniqueOccurrences = function(array) {
    let newSet = [...new Set(array)];
    let count = 0;
    let uniqueCount = []
    for (let index = 0; index < newSet.length; index++) {
        const newSetElement = newSet[index];
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if(newSetElement === element){
                count++
            }
        }
        uniqueCount.push(count)
        count = 0
        
    }
    let uniqueSet = [...new Set(uniqueCount)]
    if (uniqueCount.length !== uniqueSet.length){
        return false
    }

    return true;
};

console.log(uniqueOccurrences(arr))