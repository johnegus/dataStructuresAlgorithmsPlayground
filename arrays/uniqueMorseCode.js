// 804. Unique Morse Code Words
// Easy

// Share
// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
let words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(array) {
    let result = 0;
    if (array.length === 0) return 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.length === 0) return 0;
        result += element.length - 1
        return result
        
    }
};

console.log(uniqueMorseRepresentations(words))
console.log(uniqueMorseRepresentations(['', '']))