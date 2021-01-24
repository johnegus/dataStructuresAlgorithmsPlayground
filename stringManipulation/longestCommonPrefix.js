
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// loop trhough each string in the array
//loop through each character in each string

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strings) {
    if (!strings.length) return '';

    for (let i = 0; i < strings[0].length; i++){
        for (let string of strings) {
            if (string[i] !== strings[0][i]){
                return string.slice(0, i);
            }
        }
    }
    return strings[0]
};