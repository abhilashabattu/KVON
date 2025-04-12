str = "Education"
length = len(str)



def reverseStr(string):
    newStr=""
    for i in range(0,length):
        newStr +=str[length-i-1]
    
    return newStr


print(reverseStr(str))