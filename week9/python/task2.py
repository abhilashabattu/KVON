number1 = int(input("Enter first number : "))
number2 = int(input("Enter secound number : "))

listOfOperation = """
                  Enter + for addition
                  Enter - for substraction
                  Enter * for multiplication
                  Enter / for divide
                  """
print(listOfOperation)

operation = input("Enter the operation you want to perform :")

if operation == "+":
    print(f"Addition is : {number1+number2}")
elif operation == "-":
    print(f"Substraction is : {number1-number2}")
elif operation == "*":
    print(f"Multiplication is : {number1 * number2}")
else:
    print(f"Division is : {number1/number2}")