const apiKey = '8b7c3d91f4bd4867a94124010231010' ; // Replace with your WeatherAPI.com API key
const stateDropdown = document.getElementById('state');
const getWeatherButton = document.getElementById('getWeather');
const weatherInfo = document.getElementById('weatherInfo');

// Event listener for Get Weather button
getWeatherButton.addEventListener('click', () => {
    const selectedState = stateDropdown.value;
    fetchWeatherData(selectedState);
});




async function fetchWeatherData(stateCode) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${stateCode},India`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error(error);
        weatherInfo.innerHTML = 'Weather data not available';
    }
}




function displayWeather(data) {
    const { location, current } = data;
    const temperature = current.temp_c;
    const condition = current.condition.text;

    weatherInfo.innerHTML = `
        <h2>${location.name}, ${location.country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${condition}</p>
    `;
}


