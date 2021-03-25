// 647. Palindromic Substrings
// Medium

// Share
// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

let string = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

let string2 = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
let string3 ="fdsklf" //6
/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function(string) {
//     let count = string.length

//     for (let i = 0; i < string.length; i++) {
//         const startLetter = string[i];
//         for (let j = i+1; j < string.length; j++) {
//             const endLetter = string[j];
//             if (startLetter !== endLetter){
//                 continue;
//             } else{
//                 for (let ii = i; ii < j / 2; ii++) {
//                     if (string.charAt(ii) !== string.charAt(j - ii)){
//                         break;
//                     } 
//                     count++
//                 }
                
                
//             }
            
//         }
        
//     }
//     return count;
// };


var countSubstrings = function(string) {
    var countSubs=0
    function count(left,right){
        while(left>-1 && right<string.length && string[left]==string[right]){
        countSubs++
        left--
        right++
        }
    }
    
    for(var i=0;i<string.length;i++){
        count(i,i);
        count(i,i+1)
    }
    return countSubs
    };

console.log(countSubstrings(string))
console.log(countSubstrings(string2))
console.log(countSubstrings(string3))