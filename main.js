/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _asserts_rain_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asserts/rain.gif */ \"./src/asserts/rain.gif\");\n\n\nconst domManip = (() => {\n   \n    const resetButton = document.querySelector('#reset');\n    const searchButton = document.querySelector('#searchButton');\n    searchButton.addEventListener('click', fetchCurrentWeather);\n    resetButton.addEventListener('click', clearSearch);\n\n})();\n\n\n\n\nasync function fetchCurrentWeather(){\n    \n    try{\n        const searchCity = document.querySelector('#city').value\n        if(searchCity === \"\"){\n            alert(\"Enter a city please!\");\n        }else{        \n            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=346047954f4507e32d56d138ad03a0f3`);\n            console.log(\"respone:\", response)\n            const currentData = await response.json();\n            console.log(\"Current Data\", currentData);\n\n            const currentWeather = {\n                mainWeather: currentData.weather[0].main,\n                place: currentData.name,\n                description: currentData.weather[0].description.replace(/\\b\\w/g, letter => (letter.toUpperCase())),\n                temperature: currentData.main.temp,\n                humidity: currentData.main.humidity + \"%\",\n                wind: currentData.wind.speed + \" mph\"\n            };\n            console.log(\"current Weather\", currentWeather);\n\n            if(currentWeather){\n                const content = document.querySelector('.search-result');\n                content.style.display = \"flex\";\n                const cityName = document.querySelector('#cityName');\n                cityName.textContent = `${currentWeather.place}`;\n                const temperature = document.querySelector('#temperature');\n                temperature.textContent = `Temperature: ${currentWeather.temperature} °C`; \n                const humidity = document.querySelector('#humidity');\n                humidity.textContent = `Humidity: ${currentWeather.humidity}`;\n                const wind = document.querySelector('#wind');\n                wind.textContent = `Wind: ${currentWeather.wind}`;\n                const description = document.querySelector('#description');\n                description.textContent = `Description: ${currentWeather.description}`;\n                const main = document.querySelector('#main');\n                main.textContent = `Main: ${currentWeather.mainWeather}`;\n            }\n            document.querySelector('#city').value = \"\";\n        }\n    }catch(e){\n        console.log(\"There is an error\", e.Message);\n    }\n    \n}\n\nfunction clearSearch(){\n    document.querySelector('#city').value = \"\";\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/asserts/rain.gif":
/*!******************************!*\
  !*** ./src/asserts/rain.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0a9f3edd479a02f0d90e.gif\";\n\n//# sourceURL=webpack://weather-app/./src/asserts/rain.gif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;