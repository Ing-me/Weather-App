/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const domManip = (() => {\n   \n    const resetButton = document.querySelector('#reset');\n    const searchButton = document.querySelector('#searchButton');\n    searchButton.addEventListener('click', fetchCurrentWeather);\n    resetButton.addEventListener('click', clearSearch);\n\n})();\n\nasync function fetchCurrentWeather(){\n    \n    try{\n        const searchCity = document.querySelector('#city').value\n        if(searchCity === \"\"){\n            alert(\"Enter a city please!\");\n        }else{        \n            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=346047954f4507e32d56d138ad03a0f3`);\n            const currentData = await response.json();\n            \n            const currentWeather = {\n                mainWeather: currentData.weather[0].main,\n                place: currentData.name,\n                description: currentData.weather[0].description.replace(/\\b\\w/g, letter => (letter.toUpperCase())),\n                temperature: currentData.main.temp,\n                humidity: currentData.main.humidity + \"%\",\n                wind: currentData.wind.speed + \" mph\"\n            };\n           \n            if(currentWeather){\n                const content = document.querySelector('.search-result');\n                content.style.display = \"flex\";\n                const cityName = document.querySelector('#cityName');\n                cityName.textContent = `${currentWeather.place}`;\n                const temperature = document.querySelector('#temperature');\n                temperature.textContent = `Temperature: ${currentWeather.temperature} °C`; \n                const humidity = document.querySelector('#humidity');\n                humidity.textContent = `Humidity: ${currentWeather.humidity}`;\n                const wind = document.querySelector('#wind');\n                wind.textContent = `Wind: ${currentWeather.wind}`;\n                const description = document.querySelector('#description');\n                description.textContent = `Description: ${currentWeather.description}`;\n                const main = document.querySelector('#main');\n                main.textContent = `Main: ${currentWeather.mainWeather}`;\n            }\n            document.querySelector('#city').value = \"\";\n        }\n    }catch(e){\n        console.log(\"There is an error\", e.Message);\n    }\n    \n}\n\nfunction clearSearch(){\n    document.querySelector('#city').value = \"\";\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;