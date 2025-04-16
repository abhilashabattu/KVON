#Create a number guessing game where the program randomly selects a number between 1-100, and the user has to guess it

import random

randomNumber = random.randrange(1,101)

userInput = ""
count=0



while userInput!= randomNumber:
   userInput = int(input("Enter a Number : "))
   
   if userInput<randomNumber:
    print("Your number is low.\n")
    count+=1
    
   elif userInput>randomNumber:
    print("Your number is large.\n")
    count+=1

   else:
    print("\nCongratulations! You guessed right.")
    print(f"The number was {randomNumber}")
    print(f"You took {count} attempts.")