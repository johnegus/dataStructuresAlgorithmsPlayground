// 83. Remove Duplicates from Sorted List
// Easy 

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


let head = [1,1,2,3,3]
// Output: [1,2,3]



 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let current = head;
    while(current){
        if(current.next !== null && current.val === current.next.val){
            current.next = current.next.next
        } else {
            current = current.next
        }

    }
    return head
};

console.log(deleteDuplicates(head))