const apiKey ="c46eb0081c9ad75da256ad8aaf500eeb";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".container input");
const searchBtn = document.querySelector(".container button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".humidity").style.display = "none";
      document.querySelector(".wind").style.display = "none";
  }else{
    let data = await response.json();
    console.log(data);
    document.querySelector(".error").style.display = "none";
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".humidity").style.display = "block";
      document.querySelector(".wind").style.display = "block";



     document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
      document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
      
  }
  document.querySelector(".container input").value = "";
  document.querySelector(".container input").placeholder = "Search for a city";


  
  }
  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keyup", (event) => {
  if(event.key == "Enter"){
    checkWeather(searchBox.value);
  }
})
