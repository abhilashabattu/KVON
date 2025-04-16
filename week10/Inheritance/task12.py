# Child Classes:
# Rectangle → Area = l*b
# Circle → Area = π*r²

class Book:
    def __init__(self,x):
        self.x = x

    def __add__(self,other):
        x = self.x + other.x
        return Book(x)

price1= int(input("Enter the price of first book : ")) 
p1 = Book(price1)
price2= int(input("Enter the price of first book : "))
p2= Book(price2)

p3 = p1.__add__(p2)

print(p3.x)


