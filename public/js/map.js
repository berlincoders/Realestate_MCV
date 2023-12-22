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

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n(function () {\n\n  const lat = 52.5220823;\n  const lng = 13.413397;\n  const mapa = L.map('mapa').setView([lat, lng], 12);\n  let marker;\n\n  // use provider and   geocoder\n  const geocodeService = L.esri.Geocoding.geocodeService();\n\n  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n  }).addTo(mapa);\n\n  // Adding the pin\n  marker = new L.marker([lat, lng], {\n    draggable: true,\n    autoPan: true,\n  })\n    .addTo(mapa);\n\n  // pintpoint the marker, or pin\n  marker.on('moveend', function (event){\n    marker = event.target\n\n    const position = marker.getLatLng();\n    mapa.panTo(new L.LatLng(position.lat, position.lng));\n\n    // get the information of the street, when we drop the marker\n    geocodeService.reverse().latlng(position, 13).run(function(error, result) {\n      // console.log(resultado)\n\n      marker.bindPopup(result.address.LongLabel)\n\n    })\n\n  });\n})();\n\n\n//# sourceURL=webpack://realestate_mvc/./src/js/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/map.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;