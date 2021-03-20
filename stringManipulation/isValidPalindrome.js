// 125. Valid Palindrome
// Easy

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

// Example 1:

let s = "race a car"
// Output: false
// Explanation: "amanaplanacanalpanama" is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(string) {
    let stringAlphaNum = string.replace(/[\W_]+/g,"");
    let stringLowerCase = stringAlphaNum.toLowerCase()
    for (let index = 0; index < stringLowerCase.length/2; index++) {
        if(stringLowerCase[index] !== stringLowerCase[stringLowerCase.length -1 - index]){
            return false;
        }
        
    }
    return true;
};

console.log(isPalindrome(s))