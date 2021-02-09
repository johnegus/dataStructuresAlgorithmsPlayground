from random import randint
class node:
    def __init__(self, value=None):
        self.value=value
        self.left=None
        self.right=None

class binary_search_tree:
    def __init__(self):
        self.root=None
    
    def insert(self, value):
        if self.root==None:
            self.root=node(value)
        else:
            self._insert(value, self.root)

    def _insert(self, value, current_node):
        if value < current_node.value:
            if current_node.left == None:
                current_node.left=node(value)
            else:
                self._insert(value, current_node.left)
        elif value > current_node.value:
            if current_node.right == None:
                current_node.right = node(value)
            else:
                self._insert(value, current_node.right)
        else:
            print("Value already in tree!")
    
    def print_tree(self):
        if self.root != None:
            self._print_tree(self.root)
    
    def _print_tree(self, current_node):
        if current_node != None:
            self._print_tree(current_node.left)
            print(str(current_node.value))
            self._print_tree(current_node.right)

    def height(self):
        if self.root != None:
            return self._height(self.root, 0)
        else:
            return 0

    def _height(self, current_node, current_height):
        if current_node == None: return current_height
        left_height = self._height(current_node.left, current_height + 1)
        right_height = self._height(current_node.right, current_height + 1)
        return max(left_height, right_height)

    def search(self, value):
        if self.root != None:
            return self._search(value, self.root)
        else:
            return False
    
    def _search(self, value, current_node):
        if value == current_node.value:
            return True
        elif value < current_node.value and current_node.left != None:
            return self._search(value, current_node.left)
        elif value > current_node.value and current_node.right != None:
            return self._search(value, current_node.right)
        return False


# class node:
# 	def __init__(self,value=None):
# 		self.value=value
# 		self.left_child=None
# 		self.right_child=None
# 		self.parent=None # pointer to parent node in tree

# class binary_search_tree:
# 	def __init__(self):
# 		self.root=None

# 	def insert(self, value):
# 		if self.root==None:
# 			self.root=node(value)
# 		else:
# 			self._insert(value, self.root)

# 	def _insert(self, value, cur_node):
# 		if value<cur_node.value:
# 			if cur_node.left_child==None:
# 				cur_node.left_child=node(value)
# 				cur_node.left_child.parent=cur_node # set parent
# 			else:
# 				self._insert(value,cur_node.left_child)
# 		elif value>cur_node.value:
# 			if cur_node.right_child==None:
# 				cur_node.right_child=node(value)
# 				cur_node.right_child.parent=cur_node # set parent
# 			else:
# 				self._insert(value,cur_node.right_child)
# 		else:
# 			print("Value already in tree!")

# 	def print_tree(self):
# 		if self.root!=None:
# 			self._print_tree(self.root)

# 	def _print_tree(self,cur_node):
# 		if cur_node!=None:
# 			self._print_tree(cur_node.left_child)
# 			print(cur_node.value)
# 			self._print_tree(cur_node.right_child)







## END OF BINARY TREE CLASS DEFINITION
def fill_tree(tree, num_elements=100, max_int=1000):
    
    for _ in range(num_elements):
        current_element = randint(0, max_int)
        # print(str(current_element))
        tree.insert(current_element)
    return tree


tree = binary_search_tree()
# tree = fill_tree(tree)
tree.insert(5)
tree.insert(1)
tree.insert(3)
tree.insert(2)
tree.insert(7)
tree.insert(10)
tree.insert(0)
tree.insert(20)

tree.print_tree()
print("Tree height: " + str(tree.height()))
print(tree.height())
print(tree.search(10))
print(tree.search(30))