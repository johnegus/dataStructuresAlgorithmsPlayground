def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
    if not root:
        return 0
    sum = 0

    if root.val > L:
        sum += self.rangeSumBST(root.left, L, R)
    if root.val < R:
        sum += self.rangeSumBST(root.right, L, R)
    if L <= root.val <= R:
        sum += root.val
    
    return sum