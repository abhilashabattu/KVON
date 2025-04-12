class bankAccount:

    def __init__(self,name,balance, account_number):
        self.name = name
        self.balance = balance
        self.account_number = account_number

    def show_balance(self):
        print( f"Balance in {self.name} account is {self.balance}")

    def withdraw(self):
        withdraw_amount = int(input("Enter the amount you want to withdraw : "))

        if withdraw_amount> self.balance:
            print("No sufficient balance.")
        else:
            self.balance -= withdraw_amount
            print(f"\n{withdraw_amount} is withdrawed.")
            print("Your available balance is : ", self.balance)

    def deposite(self):
        deposite_amount = int(input("Enter the amount you want to deposite : "))
        self.balance += deposite_amount

        print("\nYour amount is added.")
        print(f"Your balance is {self.balance}")
       


userName = input("Enter the name : ")
userBalance = int(input("Enter the account balance : "))
userAccount_No = int(input("Enter account number : "))
a = bankAccount(userName,userBalance,userAccount_No)


print("\nPress 1 to deposite amount")
print("Press 2 to withdraw amount")
print("Press 3 to check balance")
print("Press 4 to exit")

operation = input("\nEnter the Operation you want to perform : ")

while operation!="4":

    if operation=="1":
        a.deposite()
    elif operation == "2":
        a.withdraw()
    elif operation=="3":
        a.show_balance()
    
    operation = input("\nEnter the operation you want to perform : ")