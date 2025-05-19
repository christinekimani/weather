from django.shortcuts import render
import requests

def home(request):
    city = request.GET.get('city', 'Nairobi')
    api_key = "5ee8deb9a6e4df21b6c4afa539d7921a"
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=mteric'
    
    response = requests.get(url).json()

    if response.get("cod") != 200:
        context = {
            'error': response.get("message", "City not found."),
            'city': city
        }
    else:
        context = {
            'city': city,
            'temperature': response['main']['temp'],
            'description': response['weather'][0]['description'],
        }

    return render(request, 'weatherapp/home.html', context)
