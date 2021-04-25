// 1816. Truncate Sentence
// Easy

// Add to List

// Share
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// Example 1:
let s = "Hello how are you Contestant",
  k = 4;
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".
// Example 2:

let s2 = "What is the solution to this problem",
  k2 = 4;
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".
// Example 3:

let s3 = "chopper is not a tanuki",
  k3 = 5;
// Output: "chopper is not a tanuki"

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (string, k) {
  let newString = "";
  let counter = k;

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (counter === 0) {
      return newString.trim();
    }
    newString += element;
    if (element === " ") {
      counter--;
    }
  }
  return newString.trim();
};

console.log(truncateSentence(s, k));
console.log(truncateSentence(s2, k2));
console.log(truncateSentence(s3, k3));
