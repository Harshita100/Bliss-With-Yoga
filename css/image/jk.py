str = input("words = ")
li = str.split()
s=[]
for i in li:
    i.lower()
    for j in i:
        if j >chr(96) and j<chr(123):
            s.append(j)
for i in range(len(s)):
    counter= 0
    a = s[c]
    if a == 0:
        continue
    else:
        for j in range(len(s)):
            if s[j]==a:
                s[j] = 0
                counter +=1
        if counter%3 == 0:
            s1 =s1 + a
        else:
            nad = 1
    c+=1
if nad == 1:
    print("false")
else:
    print("true")

class Solution(self )c = 0
nad = 0
s1 = ""
