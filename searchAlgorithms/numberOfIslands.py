
# 200 Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

# I/O
# Input: grid = [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]
# Output: 1


class Solution(object):
    def numIslands(self, grid):
        if not grid:
            return 0

        count = 0

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    self.depth_first_search(grid, i, j)
                    count += 1
        return count

    def depth_first_search(self, grid, i, j):
        if i< 0 or j < 0 or i >=len(grid) or j >= len(grid[0]) or grid[i][j] != '1':
            return
        grid[i][j] = '#'
        self.depth_first_search(grid, i+1, j)
        self.depth_first_search(grid, i -1, j)
        self.depth_first_search(grid, i, j+1)
        self.depth_first_search(grid, i, j-1)