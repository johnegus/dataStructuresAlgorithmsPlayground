// 1832. Check if the Sentence Is Pangram
// Easy

// Share
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:

let sentence = "thequickbrownfoxjumpsoverthelazydog";
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

let sentence2 = "leetcode";
// Output: false

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let object = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let index = 0; index < sentence.length; index++) {
    const element = sentence[index];
    if (typeof object[element] !== "undefined") {
      object[element]++;
    }
  }

  for (element in object) {
    if (object[element] === 0) {
      return false;
    }
  }
  return true;
};

console.log(checkIfPangram(sentence));
console.log(checkIfPangram(sentence2));
