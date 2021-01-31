// 1528. Shuffle String

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.


let string = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.




/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
let restoreString = function(string, indices) {
    let newString = [];

    for (let i = 0; i < indices.length; i++) {
        newString[indices[i]] = string[i]
        
    }

    return newString.join('');
};

console.log(restoreString(string, indices))