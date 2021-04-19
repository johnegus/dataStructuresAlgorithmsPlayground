// 1773. Count Items Matching a Rule
// Easy

// Share
// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:

let items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  ruleKey = "color",
  ruleValue = "silver";
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
// Example 2:

let items2 = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "phone"],
    ["phone", "gold", "iphone"],
  ],
  ruleKey2 = "type",
  ruleValue2 = "phone";
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

// Constraints:

// 1 <= items.length <= 104
// 1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
// ruleKey is equal to either "type", "color", or "name".
// All strings consist only of lowercase letters.

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  if (ruleKey === "type") {
    ruleKey = 0;
  }
  if (ruleKey === "color") {
    ruleKey = 1;
  }
  if (ruleKey === "name") {
    ruleKey = 2;
  }

  let count = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item[ruleKey] === ruleValue) {
      count++;
    }
  }
  return count;
};

console.log(countMatches(items, ruleKey, ruleValue));
console.log(countMatches(items2, ruleKey2, ruleValue2));
