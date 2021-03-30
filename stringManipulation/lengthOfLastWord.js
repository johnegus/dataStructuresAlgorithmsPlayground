// 58. Length of Last Word
// Easy


// Share
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

let s = "Hello World"
// Output: 5
// Example 2:

let s2 = " "
// Output: 0
let s3 = "a "
//1
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(string) {
    let stringArray = string.split(' ')
    let newArray = stringArray.filter(word => word.length > 0);
    if (newArray.length === 0) return 0
    return newArray[newArray.length-1].split('').length
};

// var lengthOfLastWord = function(string) {
//     let length = string.length
//     let count = 0
//    for (let index = length-1; index > 0; index--) {
//        const character = string[index];
//        if (string[index] === ' '){
//            continue
//        } else{
//         count++;
//        }
       

       
//    }
// };

console.log(lengthOfLastWord(s))
console.log(lengthOfLastWord(s2))
console.log(lengthOfLastWord(s3))