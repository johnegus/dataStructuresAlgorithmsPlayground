# Palindrome Linked List
# Given the head of a singly linked list, return true if it is a palindrome.

 

# Example 1:


# Input: head = [1,2,2,1]
# Output: true
# Example 2:


# Input: head = [1,2]
# Output: false
 

# Constraints:

# The number of nodes in the list is in the range [1, 105].
# 0 <= Node.val <= 9
 

# Follow up: Could you do it in O(n) time and O(1) space?



class Node: 
  # Constructor to initialize the node object 
  def __init__(self, data): 
    self.data = data 
    self.next = None
  
class LinkedList: 
  # Function to initialize head 
  def __init__(self): 
    self.head = None

  # A utility function to check if the list
  #  is palindrome or not 
  def isPalindrome(self):
    node = self.head
    comp = []
    while node:
      comp.append(node.data)
      node = node.next
    

    # Traverse the linked list again checking
    # the elements of our stack(comp)
    node = self.head
    for item in comp[::-1]:
      if (item!= node.data):
        return False 
      node = node.next
    return True

# Driver code
llist = LinkedList() 
llist.head = Node('1') 
llist.head.next = Node('3') 
llist.head.next.next = Node("5") 
llist.head.next.next.next = Node("3") 
llist.head.next.next.next.next = Node("1") 
if (llist.isPalindrome()):
  print("Linked List is a palindrome")
else:
  print("Linked List is NOT a palindrome") 