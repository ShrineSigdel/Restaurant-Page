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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContacts)\n/* harmony export */ });\nfunction loadContacts() {\n\n    const contactLink = document.querySelector('#contact');\n    contactLink.classList.add('focus');\n\n    const content = document.getElementById(\"content\");\n    const contact = document.createElement(\"div\");\n    contact.classList.add('contact');\n    content.appendChild(contact);\n\n    contact.innerHTML = `\n    <ul>\n          <li>Phone: 081-102323</li>\n          <li>Insta</li>\n          <li>FB</li>\n          <li>X</li>\n        </ul>\n    `\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_food_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food.png */ \"./src/images/food.png\");\n\n\nfunction loadHome() {\n  const home = document.querySelector(\"#home\");\n  home.classList.add(\"focus\");\n\n  const content = document.getElementById(\"content\");\n  const section = document.createElement(\"section\");\n  content.appendChild(section);\n\n  section.innerHTML = `\n    <div class=\"details-card\">\n    <h3>\n      ENJOY YOUR <br />\n      DELICOUS MEAL\n    </h3>\n    <p>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam\n      pariatur possimus aut ab! Laborum sed porro ad deleniti libero\n      magnam perspiciatis rem odio inventore blanditiis dolorem ab,\n      deserunt impedit voluptas.\n    </p>\n    <button>Order Now</button>\n  </div>`;\n\n  const img = document.createElement(\"div\");\n  img.classList.add(\"image\");\n  section.appendChild(img);\n\n  const imageToBeAdded = new Image();\n  imageToBeAdded.src = _images_food_png__WEBPACK_IMPORTED_MODULE_0__;\n  img.appendChild(imageToBeAdded);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n//create nav bar\nconsole.log(\"new change\");\n\n\n\n\n\nconst content = document.getElementById(\"content\");\n\n(function loadDefaultWebpage() {\n  createNavBar();\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  checkForEventListeners();\n})();\n\nfunction createNavBar() {\n  const navbar = document.createElement(\"div\");\n  navbar.classList.add(\"nav-bar\");\n  content.appendChild(navbar);\n\n  const logo = document.createElement(\"div\");\n  logo.classList.add(\"logo\");\n  navbar.appendChild(logo);\n\n  const logoImg = new Image();\n  logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n  logo.appendChild(logoImg);\n\n  const links = document.createElement(\"div\");\n  links.classList.add(\"links\");\n  navbar.appendChild(links);\n\n  createLinks(\"home\", \"#\");\n  createLinks(\"menu\", \"#\");\n  createLinks(\"contact\", \"#\");\n}\n\nfunction createLinks(id, url) {\n  let parent = document.querySelector(\".links\");\n  let link = document.createElement(\"a\");\n  link.textContent = id.toUpperCase();\n  link.id = id;\n  link.href = url;\n  parent.appendChild(link);\n}\n\nfunction checkForEventListeners() {\n  const parentlink = document.querySelector(\".links\");\n  const links = parentlink.querySelectorAll(\"*\");\n  links.forEach(function (link) {\n    link.addEventListener(\"click\", (event) => {\n      clearDefault();\n      if(event.target.id === \"menu\"){\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        checkForEventListeners();\n      }\n      else if(event.target.id === \"contact\") {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        checkForEventListeners();\n      }\n      else {\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        checkForEventListeners();\n      }\n    });\n  });\n}\n\nfunction clearDefault () {\n  content.innerHTML = \"\";\n  createNavBar();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _images_cheeseburger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cheeseburger.png */ \"./src/images/cheeseburger.png\");\n/* harmony import */ var _images_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza.png */ \"./src/images/pizza.png\");\n/* harmony import */ var _images_cake_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cake.png */ \"./src/images/cake.png\");\n/* harmony import */ var _images_cold_drinks_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cold-drinks.png */ \"./src/images/cold-drinks.png\");\n/* harmony import */ var _images_nuggets_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/nuggets.png */ \"./src/images/nuggets.png\");\n/* harmony import */ var _images_hot_dog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/hot-dog.png */ \"./src/images/hot-dog.png\");\n\n\n\n\n\n\n\n\nfunction loadMenu() {\n  const menulink = document.querySelector(\"#menu\");\n  menulink.classList.add(\"focus\");\n\n  const content = document.getElementById(\"content\");\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n  content.appendChild(menu);\n  createMenuCard(_images_cheeseburger_png__WEBPACK_IMPORTED_MODULE_0__, \"Cheese Burger\", \"400\");\n  createMenuCard(_images_pizza_png__WEBPACK_IMPORTED_MODULE_1__, \"Pizza\", \"600\");\n  createMenuCard(_images_cake_png__WEBPACK_IMPORTED_MODULE_2__, \"Cake\", \"120\");\n  createMenuCard(_images_cold_drinks_png__WEBPACK_IMPORTED_MODULE_3__, \"Cold Drinks\", \"80\");\n  createMenuCard(_images_nuggets_png__WEBPACK_IMPORTED_MODULE_4__, \"Chicken Nuggets\", \"550\");\n  createMenuCard(_images_hot_dog_png__WEBPACK_IMPORTED_MODULE_5__, \"Hot Dog\", \"180\");\n}\n\nfunction createMenuCard(url, name, price) {\n  const menu = document.querySelector(\".menu\");\n\n  const menuCard = document.createElement(\"div\");\n  menuCard.classList.add(\"menu-card\");\n\n  let menuImage = new Image();\n  menuImage.src = url;\n  menuCard.appendChild(menuImage);\n\n  menuCard.innerHTML += `\n  <h3>\n  ${name}\n  </h3>\n  <h4>Price: Rs.${price}</h4>\n  <button>Order Now</button>\n    `;\n\n  menu.appendChild(menuCard);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/cake.png":
/*!*****************************!*\
  !*** ./src/images/cake.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"309a66b8cd144f3648d7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cake.png?");

/***/ }),

/***/ "./src/images/cheeseburger.png":
/*!*************************************!*\
  !*** ./src/images/cheeseburger.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f693981b00b9571c75e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cheeseburger.png?");

/***/ }),

/***/ "./src/images/cold-drinks.png":
/*!************************************!*\
  !*** ./src/images/cold-drinks.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f8cecae5ec722fba6df.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cold-drinks.png?");

/***/ }),

/***/ "./src/images/food.png":
/*!*****************************!*\
  !*** ./src/images/food.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba9a9d11ba4049f4131d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food.png?");

/***/ }),

/***/ "./src/images/hot-dog.png":
/*!********************************!*\
  !*** ./src/images/hot-dog.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbb473f8ee51ba23f373.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hot-dog.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b825ac6c9be5474d02e0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/nuggets.png":
/*!********************************!*\
  !*** ./src/images/nuggets.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"791ce8caa76e17fad434.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/nuggets.png?");

/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6b23af26ec08d50756e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pizza.png?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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