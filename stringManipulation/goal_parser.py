class Solution(object):
    def interpret(self, command):
        command = command.replace("()", "o")
        command = command.replace("(al)", "al")
        return command


result = Solution()
print(result.interpret("G()(al)"))