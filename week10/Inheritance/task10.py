# Create an Animal Class:
# Animal Class: Attributes: Name, Sound
# Dog Class: Inherits Animal, Add Bark sound
# Cat Class: Inherits Animal, Add Meow sound

class Animal:
    def __init__(self,name,sound):
        self.name = name
        self.sound = sound

class Dog(Animal):
    def __init__(self, name, sound):
        super().__init__(name, sound)
       
class Cat(Animal):
    def __init__(self, name, sound):
        super().__init__(name, sound)

dog = Dog("Stuffy","Bark")
print(dog.sound)

cat = Cat("hbj","Meow")
print(cat.sound)