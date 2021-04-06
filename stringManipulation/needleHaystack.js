// 28. Implement strStr()
// Easy

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

let haystack = "hello", needle = "ll"
// Output: 2

// Example 2:

let haystack2 = "aaaaa", needle2 = "bba"
// Output: -1

// Example 3:

let haystack3 = "", needle3 = ""
// Output: 0


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

console.log(strStr(haystack, needle))
console.log(strStr(haystack2, needle2))
console.log(strStr(haystack3, needle3))