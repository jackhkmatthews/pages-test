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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button/button.js */ "./src/components/button/button.js");
/* harmony import */ var _components_image_image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/image/image.js */ "./src/components/image/image.js");
/* harmony import */ var _components_title_title_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/title/title.js */ "./src/components/title/title.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);





function app() {
  const element = document.createElement("div");
  const title = Object(_components_title_title_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const image = Object(_components_image_image_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const button = Object(_components_button_button_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  element.appendChild(title);
  element.appendChild(image);
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

},[["./src/app.js","runtime","npm.css-loader","npm.style-loader","npm.moment","npm.webpack","npm.lodash","app~title","app~button","app~image"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xleGVuZC1leGEudHRmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OTgxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxhQUFhLG1CQUFPLENBQUMsMkdBQW1EO0FBQ3hFLHNDQUFzQyxtQkFBTyxDQUFDLDhDQUFrQjtBQUNoRTtBQUNBLGNBQWMsUUFBUyxlQUFlLDRCQUE0QiwrQ0FBK0MscUJBQXFCLHVCQUF1QixHQUFHOzs7Ozs7Ozs7Ozs7O0FDTGhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRDtBQUNIO0FBQ0E7QUFDM0I7O0FBRXJCO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQUs7QUFDckIsZ0JBQWdCLDBFQUFLO0FBQ3JCLGlCQUFpQiw0RUFBTTs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2xCQSxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxjQUFjLG1CQUFPLENBQUMsa0hBQXNEOztBQUU1RTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuOGNkYTJjZmJiYjdkYWM2Nzk2MjQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9sZXhlbmQtZXhhLnR0ZlwiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMZXhlbmRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uanNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmpzXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vY29tcG9uZW50cy90aXRsZS90aXRsZS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gYXBwKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBUaXRsZSgpO1xuICBjb25zdCBpbWFnZSA9IEltYWdlKCk7XG4gIGNvbnN0IGJ1dHRvbiA9IEJ1dHRvbigpO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFkZGVjMGY1MTYxYTUyNjlhM2IwZWFkYTAyZjQ0MWMxLnR0ZlwiOyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==