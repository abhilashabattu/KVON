
# Classes and Objects

class myClass:
    def __init__(self, age,name):
        self.age = age
        self.name = name

    def __str__(self):
        return f"{self.name} : {self.age}"

p1 = myClass(20,"Abhi")
print(p1)

# Inheritance

class Person():
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printName(self):
        return (f"{self.firstname}, {self.lastname}")

# p1 = Person("Anamika","Battu")
# print(p1)

class Student(Person):
    def __init__(self, fname, lname,year):
        super().__init__( fname, lname)
        self.year = year
        print(f"{self.year}")

    def greet(self):
        print(f"Welcome {self.firstname}")

stu = Student("Anamika","Battu",2020)
stu.greet()

thisList =["Apple","Mango","Cherry"]
i = iter(thisList)

print(next(i))
print(next(i))
print(next(i))

class Student_2(Person,Student):
    def __init__(self, fname, lname):
        super().__init__(fname, lname)

s = Student_2()

