studentDict = {
    "Abhilasha":{
        "task":"Learning HTML",
        "status":"Completed"
    },
    "Anamika":{
        "task":"Learning CSS",
        "status":"Completed"
    },
    "Avika":{
        "task":"Learning JS",
        "status":"Completed"
    }
}


def add():
    name = input("Enter the name of the student : ")
    Task = input("Enter the task : ")
    status = input("Enter the status : ")

    studentDict.update({name:{'task':Task, 'status':status}})

    print(studentDict)

def updateStatus():
    name = input("Enter the name of the student : ")
    status = input("Update the status : ")

    studentDict[name]["status"]=status

    print(studentDict)

def updateTask():
    name = input("Enter the name of the student : ")
    task = input("Enter the updated task : ")

    studentDict[name]["task"]=task

    print(studentDict)

print("Enter add to add the task")
print("Enter Task update to update the status")
print("Enter status update to update the status")
operation = input("Enter the operation you want to perform : ")

while(operation!="exit"):

    if operation=="add":
        add()
    elif operation=="task update":
        updateTask()
    elif operation=="status update":
        updateStatus()

    operation = input("Enter the operation you want to perform : ")