// 21. Merge Two Sorted Lists
// Easy

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

let l1 = [1,2,4]
let l2 = [1,3,4]
// Output: [0]


var mergeTwoLists = function(left, right) {
    const sorted = [];
    while (left.length > 0 && right.length > 0) {
      const leftItem = left[0];
      const rightItem = right[0];
  
      if (leftItem > rightItem) {
        sorted.push(rightItem);
        right.shift();
      } else {
        sorted.push(leftItem);
        left.shift();
      }
    }
  
    while (left.length !== 0) {
      const val1 = left.shift();
      sorted.push(val1);
    }
  
    while (right.length !== 0) {
      const val2 = right.shift();
      sorted.push(val2);
    }
    return sorted
  }
    

  console.log(mergeTwoLists(l1, l2))