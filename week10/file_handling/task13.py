# Create a text file called students.txt
# Allow user to enter Name, Age, Marks and save in file.
# Read and display file contents.


print("Enter 1 to add data")
print("Enter 2 to display data")

operation = int(input("\nEnter the operation you want to perform : "))

if operation == 1:
    
    name = input("\nEnter your name : ")
    age = int(input("Enter your age : "))   
    marks=int(input("Enter your marks : "))

    f=open("Student.txt","a")
    f.write(f"\n\n Student name : {name} \n Age : {age} \n Marks : {marks}")
    f.close()

    print("\nYour data is successfully added.")

elif operation ==2:
    f=open("Student.txt","r")
    print(f.read())
else:
    print("Enter a valid operation")


