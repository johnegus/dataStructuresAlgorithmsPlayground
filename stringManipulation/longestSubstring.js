// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(string) {
    
    let answer = 0;
    let index = new Array(26);

    for (let i = 0, j=0; j < string.length; j++){
        if(index[string.charAt(j)]){
            i = Math.max(index[string.charAt(j)], i);
        }
        answer = Math.max(answer, j-i+1);
        index[string.charAt(j)] = j + 1;

    }

    return answer
};