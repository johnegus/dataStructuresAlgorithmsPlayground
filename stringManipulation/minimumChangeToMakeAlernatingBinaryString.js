// 1758. Minimum Changes To Make Alternating Binary String
// Easy

// Share
// You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

// The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

// Return the minimum number of operations needed to make s alternating.

// Example 1:

let s = "0100"
// Output: 1
// Explanation: If you change the last character to '1', s will be "0101", which is alternating.
// Example 2:

let s2 = "10"
// Output: 0
// Explanation: s is already alternating.
// Example 3:

let s3 = "1111"
// Output: 2
// Explanation: You need two operations to reach "0101" or "1010".
 
let s4 = "10010100"
//3
// Constraints:

// 1 <= s.length <= 104
// s[i] is either '0' or '1'.

// var minOperations = function(string) {
//     let count = 0
//     let stringArray = string.split('')
//     if (string.length <= 1){
//         return 0
//     }

//     for (let index = 1; index < stringArray.length; index+=2) {
//         const element = stringArray[index];
//         if ((stringArray[index] === '0' && stringArray[index-1] === '0')) {
//             stringArray[index] = '1'
//             count++;
//         }
//         if ( (stringArray[index] === '1' && stringArray[index-1] === '1')) {
//             stringArray[index] = '0'
//             count++;
//         }
//     }
//     console.log(stringArray)

//     return count
// };

var minOperations = function(string) {
    let count1 = 0
    let count2 = 0

    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if (element !== (index % 2 ? '0' : '1')) count1++
        if (element !== (index % 2 ? '1' : '0')) count2++

        
    }

    return Math.min(count1, count2)
};

console.log(minOperations(s))
console.log(minOperations(s2))
console.log(minOperations(s3))
console.log(minOperations(s4))