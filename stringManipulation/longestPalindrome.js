// 5. Longest Palindromic Substring
// Medium


// Share
// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

let s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(string) {
    
    var subStrings=[];
    function count(left,right){
        while(left>-1 && right<string.length && string[left]==string[right]){
        left--
        right++
        subStrings.push(string.slice(left, right + 1))

        }

    }
    
    for(var i=0;i<string.length;i++){
        count(i,i);
        count(i,i+1)
    }
    return subStrings
};

console.log(longestPalindrome(s))
