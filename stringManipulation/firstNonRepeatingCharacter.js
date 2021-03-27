// 387. First Unique Character in a String
// Easy


// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

let s = "leetcode"
// return 0.

let s2 = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

// my first try
// var firstUniqChar = function(string) {
//     let charObject = {}

//     for (let i = 0; i < string.length; i++) {
//         const letter = string[i];
//         charObject[letter] = {'letter': letter}
//         charObject[letter]['count'] = 0;
//         charObject[letter]['index'] = i
//     }
//     for (let i = 0; i < string.length; i++) {
//         const letter = string[i];
//         if (charObject[letter]['letter'] === letter){
//             charObject[letter]['count'] += 1
//         }
    
//     }

//     for (let element in charObject){
//         if (charObject[element]['count'] === 1){
//             return charObject[element]['index']
//         }
//     }
   

//     return -1;
// };

// using indexOf() and lastindexof()
var firstUniqChar = function(string) {

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (string.indexOf(letter) === string.lastIndexOf(letter)){
            return i
        }
    }
  
   

    return -1;
};

// some other guys hashing
// var firstUniqChar = function(s) {
//     let map = {}
    
//     for (let char of s) {
//         map[char] ? map[char]++ : map[char] = 1
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]] === 1) return i
//     }
        
//     return -1
// };
console.log(firstUniqChar(s))
console.log(firstUniqChar(s2))