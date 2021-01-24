def isValid(self, string):

    while '[]' in string or '()' in string or '{}' in string:
        string = string.replace('[]', '').replace('()', '').replace('{}', '')
    return not len(string)