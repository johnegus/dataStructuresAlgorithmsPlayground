// 206. Reverse Linked List
// Easy

// Share
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]






var reverseList = function(head) {
    let prev = null;
    while(head) {
        let temp = head;
        head = head.next;
        temp.next = prev;
        prev = temp;
    }
    return prev
}