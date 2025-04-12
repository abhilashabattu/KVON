numberList = [2,4,5,24,13,23,51,73,14,88]
newList=[]


def evenList(myList):
    for i in myList:
        if i%2==0:
            newList.append(i)


    return newList

print(evenList(numberList))