(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./lexend-exa.ttf */ "./src/lexend-exa.ttf"));
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Lexend\";\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n", ""]);


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button/button */ "./src/components/button/button.ts");
/* harmony import */ var _components_title_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/title/title */ "./src/components/title/title.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);

// import flipImage from "./components/flip-image/flip-image";


function app() {
    const element = document.createElement("div");
    const title = document.createElement("title-element");
    // const image = flipImage();
    const button = Object(_components_button_button__WEBPACK_IMPORTED_MODULE_0__["default"])();
    element.appendChild(title);
    // element.appendChild(image);
    element.appendChild(button);
    return element;
}
document.body.appendChild(app());


/***/ }),

/***/ "./src/lexend-exa.ttf":
/*!****************************!*\
  !*** ./src/lexend-exa.ttf ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "addec0f5161a5269a3b0eada02f441c1.ttf";

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

},[["./src/app.ts","runtime","npm.lit-html","npm.lit-element","npm.css-loader","npm.style-loader","npm.moment","npm.webpack","app~button","app~title"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xleGVuZC1leGEudHRmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OTgxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxhQUFhLG1CQUFPLENBQUMsMkdBQW1EO0FBQ3hFLHNDQUFzQyxtQkFBTyxDQUFDLDhDQUFrQjtBQUNoRTtBQUNBLGNBQWMsUUFBUyxlQUFlLDRCQUE0QiwrQ0FBK0MscUJBQXFCLHVCQUF1QixHQUFHOzs7Ozs7Ozs7Ozs7O0FDTGhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDaEQsOERBQThEO0FBQzVCO0FBQ2I7QUFFckIsU0FBUyxHQUFHO0lBQ1YsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELDZCQUE2QjtJQUM3QixNQUFNLE1BQU0sR0FBRyx5RUFBTSxFQUFFLENBQUM7SUFFeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQiw4QkFBOEI7SUFDOUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU1QixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEJqQyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxjQUFjLG1CQUFPLENBQUMsa0hBQXNEOztBQUU1RTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuOWMwN2E3NzIxODIzM2EzOGFhYzcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9sZXhlbmQtZXhhLnR0ZlwiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMZXhlbmRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b25cIjtcbi8vIGltcG9ydCBmbGlwSW1hZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9mbGlwLWltYWdlL2ZsaXAtaW1hZ2VcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy90aXRsZS90aXRsZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gYXBwKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGl0bGUtZWxlbWVudFwiKTtcbiAgLy8gY29uc3QgaW1hZ2UgPSBmbGlwSW1hZ2UoKTtcbiAgY29uc3QgYnV0dG9uID0gQnV0dG9uKCk7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIC8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwKCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWRkZWMwZjUxNjFhNTI2OWEzYjBlYWRhMDJmNDQxYzEudHRmXCI7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9