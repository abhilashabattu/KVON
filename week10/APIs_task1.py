import requests
# import json

url = "https://api.chucknorris.io/jokes/random"


response = requests.get(url )

if response.status_code==200:
    data = response.json()
    print(data["value"])
else:
    print(f"Error {response.status_code} occured")