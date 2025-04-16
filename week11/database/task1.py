import sqlite3

conn = sqlite3.connect('Student_info')

# conn.execute('''
#         create table Students
#                    (ID int primary key not null,
#                    name varchar(20) not null,
#                    age int not null,
#                    marks int not null);            
# ''')
print ("Table created successfully")

# INSERT DATA

conn.execute("INSERT INTO Students VALUES (1, 'Abhilasha',20,80 )")
conn.execute("INSERT INTO Students VALUES (2, 'Anamika',30,80 )")
conn.execute("INSERT INTO Students VALUES (3, 'Avika',20,80 )")
conn.execute("INSERT INTO Students VALUES (4, 'Anurag',25,80 )")
conn.execute("INSERT INTO Students VALUES (5, 'Ankita',20,80 )")
print ("Data inserted successfully\n\n")

data = conn.execute("SELECT ID, name, age, marks from Students")
for row in data:
   print ("ID = ", row[0])
   print( "NAME = ", row[1])
   print ("ADDRESS = ", row[2])
   print ("SALARY = ", row[3], "\n")


# UPDATE


conn.execute("UPDATE Students set marks = 90 where ID = 2")

print ("\n\nUpdated Table")

data = conn.execute("SELECT ID, name, age, marks from Students")
for row in data:
   print ("ID = ", row[0])
   print( "NAME = ", row[1])
   print ("ADDRESS = ", row[2])
   print ("SALARY = ", row[3], "\n")


# DELETE

print("Deleted data successfully")

conn.execute("DELETE from Students where ID = 4;")
conn.commit()

data = conn.execute("SELECT ID, name, age, marks from Students")
for row in data:
   print ("ID = ", row[0])
   print( "NAME = ", row[1])
   print ("ADDRESS = ", row[2])
   print ("SALARY = ", row[3], "\n")


print ("Operation done successfully")
conn.close()
