# Create a class called Employee
# Allow user to enter employee details (name, age, salary)
# Save all details in employee.txt file
# On running the program, show all saved employee details.

class Employee:
    # def __init__(self,name,age,salary):
    #     self.name = name
    #     self.age = age
    #     self.salary = salary
    
    def showDetails(self):
        f=open("employee.txt","r")
        print(f.read())
        f.close()

    def updateDetails(self):
        name = input("\nEnter your name : ")
        age = int(input("Enter your age : "))
        salary = int(input("Enter your salary : "))

        f= open("employee.txt","a")
        f.write(f"\n\n Employee name : {name} \n Employee Age : {age} \n Employee Salary : {salary}")
        f.close()

        print("\nYour data is successfully added")
        

emp1 = Employee()



print("Enter 1 to display data.")
print('Enter 2 to add details')

operation = input("Enter the operation you want to perform : ")

if operation== "1":
    emp1.showDetails()
    
elif operation== "2":
    emp1.updateDetails()
else:
    print("Enter a valid operation.")


