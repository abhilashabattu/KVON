import requests


city = input("Enter the city : ")

LatURL = f"http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid=411ee0a03513118dea40797c022da439"
Latresponse = requests.get(LatURL)



if(Latresponse.status_code == 200):
    Latitudedata = Latresponse.json()
    latitude = Latitudedata[0]["lat"]
    print(latitude)

    longitude = Latitudedata[0]["lon"] 
    print(longitude)

    weatherURL = f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid=411ee0a03513118dea40797c022da439&units=metric"

    weather = requests.get(weatherURL)

    weatherData = weather.json()
    print("Weather : " ,weatherData["weather"][0]["description"])
    temp = weatherData["main"]["temp"] - 273.15
    tempK = weatherData["main"]["temp"]

    print("Temp : " ,temp)
    print("Temp : " ,tempK)


    
else:
    print("Error")