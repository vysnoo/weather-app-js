const apiKey = "543fea77fac294acb9689cfe8ac613c7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "&deg;c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main) {
    weatherIcon.src = "";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
