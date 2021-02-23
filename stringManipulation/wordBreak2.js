// 140. Word Break II
// Hard

// 2905

// 441

// Add to List

// Share
// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input:
let s = "catsanddog"
let wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]



/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let table = new Array(s.length + 1).fill(false);
    table[0] = true;
    
    for(let i = 0; i< table.length; i++){
        if(table[i] === false) continue;
        
        for(let j = i + 1; j <table.length; j++){
            let word = s.slice(i,j);
            if (wordDict.includes(word)){
                table[j] = true
            }
        }
    }
    let newString = '';

    for (let i = 0; i < table.length; i++) {
        console.log(table[i])
        const element = table[i];
        for (let j = i; j < s.length; j++) {
            const letter = s[j];
            console.log("letter: " + letter)
            if(element === true && table[i] !== 0){
                newString.concat(letter)
                console.log("New string: " + newString)
                return
            } else {
                newString.concat(letter)
                console.log("New string: " + newString)
                return
            }
            
        }
    }
    return newString

};

console.log(wordBreak(s, wordDict))