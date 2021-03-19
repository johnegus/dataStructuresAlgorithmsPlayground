// 21. Merge Two Sorted Lists
// Easy

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.


// Example 1:


let l1 = [1,2,4]
let l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]



// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode
var mergeTwoLists = function(l1, l2) {
    var res = new ListNode();
    var curr = res;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            // Set current node to l1 if less than or equal
            curr.next = l1;
            // Move l1's head to next
            l1 = l1.next
        } else {
            // Else same case for l2
            curr.next = l2;
            l2 = l2.next;
        }
        // Move current to next
        curr = curr.next
    }

    if (l1 !== null) {
        curr.next = l1;
    } else if (l2 !== null) {
        curr.next = l2;
    }

    return res.next;
};

console.log(mergeTwoLists(l1, l2))