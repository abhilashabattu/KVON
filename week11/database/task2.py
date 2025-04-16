import sqlite3

connection  = sqlite3.connect('students')
print("Opened database successfully")

# connection.execute('''
#         create table contact
#                    (ID int primary key not null,
#                    name varchar(20) not null,
#                    phone int not null,
#                    email varchar(20) not null);            
# ''')
# print ("Table created successfully")


def add_data():
   user_id = input("Enter id : ")
   name = input("Enter you name : ")
   phone_No = int(input("Enter phone number : "))
   email = input("Enter email : ")

   qry =  "insert into contact values(?,?,?,?)"

   connection.execute( qry, (user_id,name,phone_No,email))

   connection.commit()
   print("Data Added ")



def delete_Data():

   del_email = input("Enter the Email of user to be deleted : ")
   delete_script= """Delete from contact where email =?"""

   connection.execute(delete_script,(del_email,))
   connection.commit()

   print("\n\n Data is deleted")

def view_Data():

   data = connection.execute("Select * from contact")

   for row in data:
      print (row[0] )
      print (row[1] )
      print (row[2] )
      print (row[3] , "\n")
      # print (row[0] , " ", row[1], " ", row[2], " ", row[3],"\n" )

   
def update_Data():
   update_email = input("Enter the email of user you want to update contact : ")
   updated_phoneNo = int(input("Enter updated contact number : "))

   data = (updated_phoneNo,update_email)
   update_script = """Update contact set phone = ? where email = ?"""

   connection.execute(update_script,data)

   print("\n\nData is updated")
   connection.commit()


print("Enter 1 to add data")
print("Enter 2 to view data")
print("Enter 3 to update data")
print("Enter 4 to update data")

opertaion = int(input("Enter the opertaion you want to perform : "))

if opertaion==1:
   add_data()
elif opertaion==2:
   view_Data()
elif opertaion==3:
   update_Data()
elif opertaion==4:
   delete_Data()
else:
   print("Enter a valid input")


