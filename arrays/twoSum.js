// Given an array of integers nums and an integer target, return indices of the
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

let nums = [2, 7, 11, 15],
  target = 9;

let nums2 = [3, 3],
  target2 = 6;
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//O(n^2) because of the nested loop
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumN2 = function (nums, target) {
  let calculator = {};
  let answer = [];
  let index = 0;
  nums.forEach((num) => {
    console.log(num);
    if (calculator[target - num]) {
      answer.push(calculator[target - num].index);
      answer.push(index);
      return answer;
    }
    calculator[num] = { index: index, difference: target - num };
    index++;
  });
  return answer;
};

var twoSum = function (nums, target) {
  var ans = [];
  var exist = {};

  for (var i = 0; i < nums.length; i++) {
    if (typeof exist[target - nums[i]] !== "undefined") {
      ans.push(exist[target - nums[i]]);
      ans.push(i);
      break;
    }
    exist[nums[i]] = i;
  }

  return ans;
};

// console.log(twoSumN2(nums, target))
// console.log(twoSum(nums, target));
console.log(twoSumN2(nums, target));
console.log(twoSumN2(nums2, target2));
