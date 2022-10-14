const domManip = (() => {
   
    const resetButton = document.querySelector('#reset');
    const searchButton = document.querySelector('#searchButton');
    searchButton.addEventListener('click', fetchCurrentWeather);
    resetButton.addEventListener('click', clearSearch);

})();




async function fetchCurrentWeather(){
    
    try{
        const searchCity = document.querySelector('#city').value
        if(searchCity === ""){
            alert("Enter a city please!");
        }else{        
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=346047954f4507e32d56d138ad03a0f3`);
            console.log("respone:", response)
            const currentData = await response.json();
            console.log("Current Data", currentData);

            const currentWeather = {
                mainWeather: currentData.weather[0].main,
                place: currentData.name,
                description: currentData.weather[0].description.replace(/\b\w/g, letter => (letter.toUpperCase())),
                temperature: currentData.main.temp,
                humidity: currentData.main.humidity + "%",
                wind: currentData.wind.speed + " mph"
            };
            console.log("current Weather", currentWeather);

            if(currentWeather){
                const content = document.querySelector('.search-result');
                content.style.display = "flex";
                const cityName = document.querySelector('#cityName');
                cityName.textContent = `${currentWeather.place}`;
                const temperature = document.querySelector('#temperature');
                temperature.textContent = `Temperature: ${currentWeather.temperature} °C`; 
                const humidity = document.querySelector('#humidity');
                humidity.textContent = `Humidity: ${currentWeather.humidity}`;
                const wind = document.querySelector('#wind');
                wind.textContent = `Wind: ${currentWeather.wind}`;
                const description = document.querySelector('#description');
                description.textContent = `Description: ${currentWeather.description}`;
                const main = document.querySelector('#main');
                main.textContent = `Main: ${currentWeather.mainWeather}`;
            }
            document.querySelector('#city').value = "";
        }
    }catch(e){
        console.log("There is an error", e.Message);
    }
    
}

function clearSearch(){
    document.querySelector('#city').value = "";
}