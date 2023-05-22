// Funzioni ASYNC.
const root = document.querySelector("#root");
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const getWeatherData = async (city) => {
  const res = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
  const data = await res.json();
  console.log(data);
  root.textContent = data.description;

  // Creazione degli elementi HTML per le informazioni aggiuntive
  const temperatureParagraph = document.createElement("p");
  temperatureParagraph.textContent = "Temperature: " + data.temperature;

  const windParagraph = document.createElement("p");
  windParagraph.textContent = "Wind: " + data.wind;

  const forecastHeading = document.createElement("p");
  forecastHeading.textContent = "Forecast:";

  const forecastList = document.createElement("ul");
  data.forecast.forEach((item) => {
    const forecastItem = document.createElement("li");
    forecastItem.textContent = item.temperature;
    forecastList.appendChild(forecastItem);
  });

  // Aggiunta degli elementi al DOM
  root.appendChild(temperatureParagraph);
  root.appendChild(windParagraph);
  root.appendChild(forecastHeading);
  root.appendChild(forecastList);

  return data;
};

searchButton.addEventListener("click", (e) => {
  console.log(cityInput.value);
  getWeatherData(cityInput.value);
});
