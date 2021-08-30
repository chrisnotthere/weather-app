displayWeather = document.querySelector('#currentWeather');

async function getWeather(location){

  try {
    displayWeather.innerText = '';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=42cf3a5858c2af79af82138fa993bc01&units=metric`, {mode: 'cors'});  
    const data = await response.json();
    console.log(data);
    processWeatherData(data);
    console.log(weatherObj);
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

  return weatherObj = {
    name,
    description,
    temp, 
    feelsLike,
    humidity,
    wind,
  }
}

function displayWeatherData(){
  
}

// listen for 'Enter' keypress 
document.querySelector('#search').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    //alert('hello');
    getWeather(document.querySelector('#search').value)
  }
});