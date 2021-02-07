# 205. Isomorphic Strings
# Easy


# Share
# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

s = "egg" 
t = "add"
# Output: true




class Solution(object):
    def isIsomorphic(self, s, t):
        return len(set(zip(s, t))) == len(set(s)) == len(set(t))


# class Solution(object):
#     def isIsomorphic(self, s, t):
#         for letter in s:
#         s.replace()

sol = Solution()

print(sol.isIsomorphic(s, t))