// 1684. Count the Number of Consistent Strings
// You are given a string allowed consisting of distinct characters and an array of strings words. 
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = [];

    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            if (!allowed.includes(char)) break;
            else if (j === word.length -1) result.push(word)
        }
    }
    return result.length;
};