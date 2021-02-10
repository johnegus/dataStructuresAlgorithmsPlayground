# 1323. Maximum 69 Number
# Easy

# Share
# Given a positive integer num consisting only of digits 6 and 9.

# Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

num = 9669
# Output: 9969
# Explanation: 
# Changing the first digit results in 6669.
# Changing the second digit results in 9969.
# Changing the third digit results in 9699.
# Changing the fourth digit results in 9666. 
# The maximum number is 9969.

class Solution(object):
    def maximum69Number (self, num):
        string = [int(x) for x in str(num)] 
        count = 0
        newString = ''
        for number in range(len(string)):
            if string[number] == 6 and count == 0:
                string[number] = 9
                count += 1
                newString += str(string[number])
            else:
                newString += str(string[number])
        return int(newString)

                
            

example = Solution()

print(example.maximum69Number(num))

