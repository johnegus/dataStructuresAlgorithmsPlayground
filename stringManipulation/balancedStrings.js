// 1221. Split a String in Balanced Strings
// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.
let string = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

/**
 * @param {string} s
 * @return {number}
 */
let balancedStringSplit = function(string) {
    let numberLs = 0;
    let numberRs = 0;
    let result = 0
    for (let index = 0; index < string.length; index++) {
        const letter = string[index];
        if (letter === 'L'){
            numberLs ++;
        }
        if (letter === 'R'){
            numberRs ++;
        }
        if (numberRs === numberLs){
            result ++;
            numberLs = 0;
            numberRs = 0;
        }
        
    }
    return result
};

console.log(balancedStringSplit(string))