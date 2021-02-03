// 1662. Check If Two String Arrays are Equivalent


// Share
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

let word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let joinedWord1 = word1.join('')
    let joinedWord2 = word2.join('')

    if (joinedWord1 === joinedWord2){
        return true;
    } else{
        return false;
    }
};

console.log(arrayStringsAreEqual(word1, word2))