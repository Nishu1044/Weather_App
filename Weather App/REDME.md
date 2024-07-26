
## Introduction
<h2>
You are creating a simple weather application using JavaScript. This application allows users to search for the weather in different cities and display the current weather information, such as temperature, humidity, wind speed, and weather condition icons.
<h2>


## Features
<h3>
City Search: Users can input a city name to get weather information.
Weather Display: Shows the city's temperature, humidity, wind speed, and an icon representing the current weather condition.
Error Handling: Displays an error message if the city is not found.
<h3>


## Components Used
<h3>
HTML Elements:
Search Box: An input field where users can type the city name.
Search Button: A button to initiate the search.
Weather Icon: An image element to show weather icons.
Error Message: An element to display error messages.
Weather Info: Elements to display city name, temperature, humidity, and wind speed.
<h3>


## JavaScript:
<h3>
Event Listener: Listens for a click event on the search button to trigger the weather search.
Fetch API: Makes a request to the OpenWeatherMap API to get weather data.
Async/Await: Handles asynchronous operations for fetching weather data.
DOM Manipulation: Updates HTML elements with the fetched weather data.
Error Handling: Manages errors such as invalid city names or network issues.
<h3>


## Functions

<h4>

displayWeather(city):

Purpose: Fetches and displays the weather data for the given city.

How it Works:
Fetches weather data from the OpenWeatherMap API using the provided city name.
If the city is not found (status 404), it displays an error message.
If the city is found, it updates the weather information (temperature, humidity, wind speed) and the appropriate weather icon.
<h4>




## Weather App/
│──images/
    ├── clouds.png
    ├── rain.png
    ├── clear.png
    ├── drizzle.png
    ├── mist.png
    ├── snow.png
    ├── wind.png
    └── humidity.png
├── index.html
├── index.js
├── REDME.md
└── style.css
