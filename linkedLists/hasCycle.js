

function ListNode(val) {
    this.val = val;
    this.next = null;



/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    
};


var hasCycle = function(head) {
    let tortoise = hare = head
    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next
      hare = hare.next.next
      if (tortoise === hare) {
        return true
      }
    }
    return false
  };