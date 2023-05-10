const error = document.querySelector('.error');
const bg = document.querySelector('.imageBg')
const container = document.querySelector('.container')

const domManip = (() => {
    const searchButton = document.querySelector('#searchButton');
    searchButton.addEventListener('click', fetchCurrentWeather);
})();

async function fetchCurrentWeather(){
    
    try{
        const searchCity = document.querySelector('#city').value
        if(searchCity === ""){           
           error.textContent = "Enter a city please!"
        }else{        
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=346047954f4507e32d56d138ad03a0f3`);
          
            const currentData = await response.json();
             console.log(currentData)
            const currentWeather = {
                mainWeather: currentData.weather[0].main,
                place: currentData.name,
                description: currentData.weather[0].description.replace(/\b\w/g, letter => (letter.toUpperCase())),
                temperature: currentData.main.temp,
                humidity: currentData.main.humidity + "%",
                wind: currentData.wind.speed + " mph"
            };
           
            if(currentWeather){

                const giphy = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=x49YqDkb6lUJZ6zMzNjnCr8iIvqz1Ase&s=${currentWeather.mainWeather}`)
                const currentImage = await giphy.json();
                console.log(currentImage) 

                container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${currentImage.data.images.original.url})`

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
            error.textContent = ""
            document.querySelector('#city').value = "";
        }
    }catch(e){
        console.log("There is an error", e.Message);
    }
    
}
