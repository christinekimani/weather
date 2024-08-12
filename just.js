const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  //defines a function that constructs the api requests url using the provided location
  //api key and units set to metric

  fetch(url)
      .then((response) => {
          if(!response.ok){
              throw new Error("weather data not available for the entered location");
          }
          return response.json();
      })

       .then((data) => {
          locationElement.textContent = data.name;
          temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
          descriptionElement.textContent = data.weather[0].description;
      })
}   



