import datetime

date = datetime.datetime.now()

print(date.day)
print(date.month)
print(date.year)

print(date.strftime("%b"))
print(date.strftime("%m"))
print(date.strftime("%d"))