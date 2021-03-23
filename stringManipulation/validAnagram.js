// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

let s = "anagram", t = "nagaram"
// Output: true
// Example 2:

let s1 = "rat", t1 = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  var isAnagram = function(oneString, twoString) {
//     let choppedString = oneString
//     while (choppedString.length > 0){
//         for (let j = 0; j < twoString.length; j++) {
//             if (choppedString[0] === twoString[j]){
//                 // twoString.splice(j, 0, '#')
//                 // twoString = twoString.slice(j, j+1)
//                 console.log('chopped: ' + choppedString)
//                 twoString =  twoString.substring(0,j - 1) + twoString.substring(j, twoString.length);
//                 console.log(twoString)
//                 break;
//             }
//         }
//         choppedString = choppedString.substring(1)
        
//     }
//     if (twoString.length > 0){
//         return false;
//     }
//     return true
// };

var isAnagram = function(oneString, twoString) {
    let sortedOne = oneString.split('').sort().join('');
    let sortedTwo = twoString.split('').sort().join('');

    if (sortedOne !== sortedTwo){
        return false;
    }
    return true;
};

console.log(isAnagram(s, t))
console.log(isAnagram(s1, t1))