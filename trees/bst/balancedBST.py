class TreeNode:
    def __init__(self, value=None):
        self.value=value
        self.left=None
        self.right=None

class Binary_Search_Tree:
    def __init__(self):
        self.root=None
    
    def balanceBST(self, root: TreeNode) -> TreeNode:
        values = []
        def inorder(node):
            if node:
                inorder(node.left)
                values.append(node.value)
                inorder(node.right)
        def balance(left, right):
            if left <= right:
                middle = (left + right) // 2
                current = TreeNode(values[middle])
                current.left = balance(left, middle-1)
                current.right = balance(middle+1, right)
                return current
        inorder(root)
        n = len(values)
        return balance(0, n-1)



