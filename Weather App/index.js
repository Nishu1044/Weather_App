const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


const apiKey = "aa2338a405271c2dbb7943eb7c748def";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="


async function displayWeather(city){
    try { 
    const resp = await fetch(apiUrl + city + `&appid=${apiKey}`);

     
    if(resp.status == 404){
        console.log("City not found, showing error message");
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{

        
        let  data = await resp.json()
        console.log(data);
    
    
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp ) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"


        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
         }
         else if(data.weather[0].main == "Rain"){
              weatherIcon.src = "images/rain.png"
         }
         else if(data.weather[0].main == "Clear"){
             weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Drizzle"){
         weatherIcon.src = "images/drizzle.png"
       }
       else if(data.weather[0].main == "Mist"){
         weatherIcon.src = "images/mist.png"
       }
       else if(data.weather[0].main == "Snow"){
         weatherIcon.src = "images/snow.png"
       }
     
       else if(data.weather[0].main == "Wind"){
         weatherIcon.src = "images/wind.png"
       }
     
       else if(data.weather[0].main == "Humidity"){
         weatherIcon.src = "images/humidity.png"
       }


             document.querySelector(".weather").style.display = "block";

       document.querySelector(".error").style.display = "none";

    }

} catch (error) { // Added catch block
    console.error("An error occurred:", error);
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}


}

searchbtn.addEventListener("click",()=>{
    displayWeather(searchBox.value)
})

