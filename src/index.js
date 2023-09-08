function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
        if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}: ${minutes}`
   
}
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
    let dateElement = document.querySelector('#date');
    let iconElement = document.querySelector('#icon');



    // Update the HTML content with the rounded temperature in degrees Celsius
    temperatureElement.innerHTML = Math.round(temperatureCelsius);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apikey = "53e6bc036b749dd4d07b0498d1e18c17";
let city = "New York";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

axios.get(apiUrl).then(displayTemperature);
