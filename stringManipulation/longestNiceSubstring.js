// 1763. Longest Nice Substring
// Easy

// Share
// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

 

// Example 1:

let s = "YazaAay"
let test = "AaBbCcZz"
// Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.
// Example 2:

// Input: s = "Bb"
// Output: "Bb"
// Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
// Example 3:

let s3 = "c"
// Output: ""
// Explanation: There are no nice substrings.
// Example 4:

let s4 = "dDzeE"
// Output: "dD"
// Explanation: Both "dD" and "eE" are the longest nice substrings.
// As there are multiple longest nice substrings, return "dD" since it occurs earlier.
let s5 = 'Bb'
let s6 = "jcJ"
// Constraints:

// 1 <= s.length <= 100
// s consists of uppercase and lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(string) {
     let newerString = ''
     let longestString = ''
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if(string.charCodeAt(index) + 32 === string.charCodeAt(index-1) || string.charCodeAt(index) - 32 === string.charCodeAt(index-1) ){
            newerString += element
            if (newerString.length === string.length){
                return newerString;
            }
        } else {
            if (newerString.length > longestString.length){
                longestString = newerString
            }
            newerString = element
        }
        
    }
    return longestString;
};

console.log(longestNiceSubstring(s))
console.log(longestNiceSubstring(s3))
console.log(longestNiceSubstring(s4))
console.log(longestNiceSubstring(s5))
console.log(longestNiceSubstring(s6))