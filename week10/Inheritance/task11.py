# Create a Shape Class:
# Parent Class: Shape → Method: area()

class Shape:
   def area():
      pass
   
class Rectangle(Shape):
   def __init__(self,length,breadth):
      self.length= length
      self.breadth= breadth
   
   def area(self):
      return self.length * self.breadth
   
class Circle(Shape):
   def __init__(self,radius):
      self.radius = radius

   def area(self):
      return int(3.14*self.radius*self.radius)
   


print("Enter 1 to get area of rectangle")
print("Enter 2 to get area of circle")

choice = input("\nEnter the opetaion you want to perform : ")

if(choice == "1"):
   length = int(input("\nEnter length : "))
   breadth = int(input("Enter breadth : "))

   rect = Rectangle(length,breadth)

   print("Area of the Rectangle is : " , rect.area())

elif choice=="2":
   radius = int(input("\nEnter radius : "))

   cir = Circle(radius)

   print("Area of the Circle is : " , cir.area())

else:
   print("Choose a valid operation")
