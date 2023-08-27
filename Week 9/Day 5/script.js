const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');
const weatherDisplay = document.querySelector('#weather-display');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cityName = cityInput.value;
  const apiKey = '6bc236fa8bd5e7e03f83fd8cea3eac74';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Display weather information on page
      const cityName = data.name;
      const countryName = data.sys.country;
      const weatherDescription = data.weather[0].description;
      const weatherIconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;

      const weatherCard = document.createElement('div');
      weatherCard.innerHTML = `
        <h2>${cityName}, ${countryName}</h2>
        <p>${weatherDescription}</p>
        <img src="${weatherIconUrl}">
        <p>Temperature: ${temperature} K</p>
        <p>Humidity: ${humidity}%</p>
      `;

      weatherDisplay.appendChild(weatherCard);
    })
    .catch(error => {
      console.error(error);
      // Display error message to user
    });
});
