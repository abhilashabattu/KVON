#Write a program that asks the user for a number and checks if it's even or odd.

Number = int(input("Enter a number : "))

if Number%2==0:
    print(f"{Number} is even.")
else:
    print(f"{Number} is odd.")