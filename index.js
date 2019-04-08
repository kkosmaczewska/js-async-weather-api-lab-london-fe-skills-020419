const API_KEY = "0476b47f6aeae595db04e21044006807"

function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event);
    let cityName = document.getElementById("city").value;
    console.log(cityName);
    fetchCurrentWeather(cityName);
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  console.log(city);
  document.getElementById('city').value.replace(/ /g, "+");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=` + API_KEY;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(json => displayCurrentWeather(json));
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  console.log(json);
  let temperature = json.main.temp;
  document.getElementById("temp").innerHTML = temperature;
  let lowTemperature = json.main.temp_min;
  document.getElementById("low").innerHTML = lowTemperature;
  let highTemperature = json.main.temp_max;
  document.getElementById("high").innerHTML = highTemperature;
  let humidity = json.main.humidity;
  document.getElementById("humidity").innerHTML = humidity;
  let clouds = json.clouds.all;
  document.getElementById("cloudCover").innerHTML = clouds;
  }

function fetchFiveDayForecast(city) {
    //fetch five day forecast data based on city
    console.log(city);
    document.getElementById('city').value.replace(/ /g, "+");
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=` + API_KEY;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(json => displayFiveDayForecast(json));
  }

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log(json);
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('submit', handleFormSubmit);
  })
