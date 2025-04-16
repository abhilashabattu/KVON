# Create a Student Class:
# Attributes: Name, Roll Number, Marks
# Methods:
# get_details() → Print name, roll number, marks
# is_passed() → Check if marks > 33 then passed else failed


class Student:
    passed = False

    def __init__(self, name,rollNo,marks):
        self.name =name
        self.rollNo=rollNo
        self.marks = marks
    
    def get_details(self):
        print("\nName : " , self.name)
        print("Roll No : " , self.rollNo)
        print("Marks : " , self.marks)

    def is_passed(self):
        if self.marks > 33:
            return f"{self.name} is passed."
        else:
            return f"{self.name} is failed." 

name = input("\nEnter your name : ")
rollNo = input("Enter your Roll Number : ")    
marks = int(input("Enter your marks : "))

stu = Student(name,rollNo,marks)
stu.get_details() 
print(stu.is_passed())      

