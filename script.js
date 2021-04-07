const form = document.getElementById('my-form');
const submit = document.getElementById('submit');
const display = document.querySelector('.weather-display');
const city = document.getElementById('city');
const body = document.querySelector('body');

async function receiveData(event) {
    const value = city.value;
    let weatherRequest = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid=83d5e28a3400194c7eba542d005c8a14`;
    event.preventDefault();
    try {
    const weatherData = await fetch(weatherRequest, {mode: 'cors'});
    const newData = processData(await weatherData.json());
    showData(newData);
    form.reset();
    }
    catch(error) {
        alert('The city you entered is invalid. Please fix any typos and try again!');
    }
}
// async function receiveBackground(event) {
    
// }

// function fetchCall(event) {
//     receiveData;
//     receiveBackground;
// }

form.addEventListener('submit', receiveData);

function processData(weatherData) {
    const myData = {
        cityName: weatherData.name,
        condition: weatherData.weather['0'].main,
        temperature: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        humidity: weatherData.main.humidity
    };


    return myData;
}

function showData(newData) {
    const name = document.getElementById('city-name')
    const condition = document.getElementById('condition')
    const temp = document.getElementById('temp');
    const feel = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity')
    
    name.textContent = `${newData.cityName}`;
    condition.textContent = `Weather Condition: ${newData.condition}`;
    temp.textContent =  `Temperature: ${newData.temperature} \u00B0F`;
    feel.textContent = `Feels Like: ${newData.feelsLike} \u00B0F`;
    humidity.textContent = `Humidity: ${newData.humidity}%`;

    // const weatherCondition = newData.condition;

    
}

    

