class Solution:
    def sortString(self, s: str) -> str:
        l=sorted(set(s))
        out=''
        ls=list(s)
        while ls:
            for i in l:
                if i in ls:
                    out+=i
                    ls.remove(i)
            for i in l[::-1]:
                if i in ls:
                    out+=i
                    ls.remove(i)
        return out