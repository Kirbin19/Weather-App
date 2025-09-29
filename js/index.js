const apiKey = "cc723af2decb64a729cd1147c926944a";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  getWeather(searchInput.value);
  searchInput.value = "";
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    getWeather(searchInput.value);
    searchInput.value = "";
  }
});

async function getWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const info = await response.json();
  document.querySelector(".weather-city").innerHTML = info.name;
  document.querySelector(".weather-temp").innerHTML =
    Math.round(info.main.temp) + "&deg;C";
  document.querySelector(".humidity-value").innerHTML =
    info.main.humidity + "%";
  document.querySelector(".wind-value").innerHTML =
    Math.round(info.wind.speed) + " Км/ч";

  console.log(info);
}

const str = 'hello world'