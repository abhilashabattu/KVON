import json

class toDOList:
    

    def addTask(self,name,task,status):
        f= open("toDoList.txt","r")
        data = f.read()
        f.close()

        if data:
            data = json.loads(data)
        else:
            data = {}
            

        data[name] = {}
        data[name]["Task"] = task
        data[name]["Status"] = status

        
        
        newData = json.dumps(data,indent=4)
        f = open("toDoList.txt","w")
        f.write(newData)
        f.close()

        print("\nYour data is added successfully.")

    def viewData(self):
            f = open("toDoList.txt","r")
            print("Read operation")
            print(f.read())

    def updateData(self):
        
        updateName = input("Enter the name : ")
        
        updateKey = input("Enter Key : ")

        updateValue = input("Enter value : ")

        f= open("toDoList.txt","r")
        data = f.read()
        f.close()

        data = json.loads(data)
        data[updateName].update({updateKey:updateValue})

        data = json.dumps(data, indent=4)
        f= open("toDoList.txt","w")
        f.write(data)

        print("\nUpdate completed")

    def removeData(self):
        removeName = input("Enter the name you want to delete : ")

        f= open("toDoList.txt","r")
        data = f.read()
        data = json.loads(data)
        data.pop(removeName)
        
        f.close()   

        data = json.dumps(data, indent=4)
        f= open("toDoList.txt","w")
        f.write(data)  

        print("\nData Removed")   
        
           

        
t = toDOList()

print("Enter 1 to add data")
print("Enter 2 to view data")
print("Enter 3 to update data")
print("Enter 4 to remove data")

operation= int(input("\nEnter the operation you want to perform : "))

if operation==1:
    name=input("Enter Name :")
    task=input("Enter Task : ")
    status = input("Enter Status : ")
    t.addTask(name,task,status)
elif operation==2:
     t.viewData()
elif operation==3:
     t.updateData()
elif operation==4:
     t.removeData()
else:
     print("Enter a valid opearation")
     