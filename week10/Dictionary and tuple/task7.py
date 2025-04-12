studentDict= {
   "Abhilasha": 78
}

def add():
    StudentName =input("Enter the name of the student : ")

    marks=int(input("Enter the marks : "))
    
    studentDict.update({StudentName:marks})

    print(studentDict)



def search():
    StudentName =input("Enter the name of the student : ")

    print(studentDict[StudentName])




def update():
    StudentName =input("Enter the name of the student : ")

    marks=int(input("Enter the updated marks : "))

    studentDict.update({StudentName: marks})
    print(studentDict)


print("Enter add if you want to add data")
print("Enter search if you want to add data")
print("Enter update if you want to add data")

task = input("Enter the task you want to perform : ")

while task!="exit":

    if task== "add":
        add()
    elif task=="search":
        search()
    elif task=="update":
        update()

    task = input("Enter the task you want to perform : ")