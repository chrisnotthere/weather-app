console.log('hellloooo');

displayWeather = document.querySelector('#currentWeather');

async function getWeather(location){

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=42cf3a5858c2af79af82138fa993bc01&units=metric`, {mode: 'cors'});  
    const data = await response.json();
    console.log(data);
    processWeatherData(data);
    displayWeather.innerText = '...';
  } catch(err) {
    displayWeather.innerText = err;
  }
}

// take weather data and only return required data
function processWeatherData(data){

  const feelsLike = data.main.feels_like;

  console.log(feelsLike);

}