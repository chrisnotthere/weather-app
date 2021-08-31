const displayWeather = document.querySelector('#currentWeather');
const loader = document.querySelector('.loader');

async function getWeather(location){

  try {
    displayWeather.innerText = '';
    loader.style.display = 'block'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99bfcbf79aca44d17f823b9b67120b7d&units=metric`, {mode: 'cors'});  
    const data = await response.json();
    loader.style.display = 'none'
    // console.log(data);
    processWeatherData(data);
    // console.log(weatherObj);
    displayWeatherData(weatherObj);
  } 
  catch(err) {
    displayWeather.innerText = 'City not found';
    console.log(err);
  }
}

// take weather data and only return required data
function processWeatherData(data){

  const name = data.name
  const description = data.weather[0].description;
  const temp = `${data.main.temp}°C`;
  const feelsLike = `${data.main.feels_like}°C`;
  const humidity = `${data.main.humidity}%`;
  const wind = `${data.wind.speed}/kph`;
  const icon = data.weather[0].icon;

  return weatherObj = {
    name,
    description,
    temp, 
    feelsLike,
    humidity,
    wind,
    icon
  }
}

function displayWeatherData(weatherObj){
  const name = document.createElement('h1');
  name.innerText = weatherObj.name;
  const description = document.createElement('p');
  description.innerText = weatherObj.description;
  description.classList.add('capitalize');
  const icon = document.createElement('img');
  icon.src = `http://openweathermap.org/img/w/${weatherObj.icon}.png`;
  const temp = document.createElement('p');
  temp.innerText = 'Current temp: ' + weatherObj.temp;
  const feelsLike = document.createElement('p');
  feelsLike.innerText = 'Feels like: ' + weatherObj.feelsLike;
  const humidity = document.createElement('p');
  humidity.innerText = 'Humidity: ' + weatherObj.humidity;
  const wind = document.createElement('p');
  wind.innerText = 'Wind speed: ' + weatherObj.wind;

  displayWeather.appendChild(name);
  displayWeather.appendChild(description);
  displayWeather.appendChild(icon);
  displayWeather.appendChild(temp);
  displayWeather.appendChild(feelsLike);
  displayWeather.appendChild(humidity);
  displayWeather.appendChild(wind);
}

// listen for 'Enter' keypress 
document.querySelector('#search').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(document.querySelector('#search').value)
  }
});
