function displayTemperature(response) {
    // Get the temperature in Kelvin from the API response
    let temperatureKelvin = response.data.main.temp;

    // Convert temperature to degrees Celsius
    let temperatureCelsius = temperatureKelvin - 273.15;

    // Get the temperature element in your HTML
    let temperatureElement = document.querySelector('#temperature');
    let cityElement = document.querySelector('#city');
    let descriptionElement = document.querySelector('#description');
    let humidityElement = document.querySelector('#humidity');
    let windElement = document.querySelector('#wind');


    // Update the HTML content with the rounded temperature in degrees Celsius
    temperatureElement.innerHTML = Math.round(temperatureCelsius);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
}

let apikey = "53e6bc036b749dd4d07b0498d1e18c17";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apikey}`;

axios.get(apiUrl).then(displayTemperature);
