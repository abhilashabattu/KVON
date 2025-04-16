# Create a Python program that:
# Asks the user for 2 numbers.
# Performs division.
# Handle ZeroDivisionError and ValueError.

class divide:
    def __init__(self, num1, num2):
        self.num1 = num1
        self.num2 = num2

    def div(self):
        try:
            num3 = num1/num2
            print (int(num3))
        except ZeroDivisionError:
            print("Can't divide with zero. \nEnter a non zero number")


flag = True
while(flag):
    try:
        num1 =int(input("Enter first number : "))

        num2 = int(input("Enter secound number : "))
    
        flag = False

        d = divide(num1,num2)
        d.div()

    except ValueError:
        print("Enter integer value ")



# if (num2==0):
#     raise ZeroDivisionError("Can't divide with zero")
# elif (num1 and num2 is not int):
#     raise ValueError("Please enter an integer value ")
# else:
#     result = num1/num2
#     print("Result is : ")