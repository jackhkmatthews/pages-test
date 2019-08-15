(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["copy"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/copy/copy.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/copy/copy.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".copy {\n  font-size: 20px;\n  font-family: \"Meslo\";\n}\n", ""]);


/***/ }),

/***/ "./src/components/copy/copy.css":
/*!**************************************!*\
  !*** ./src/components/copy/copy.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./copy.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/copy/copy.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/copy/copy.js":
/*!*************************************!*\
  !*** ./src/components/copy/copy.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Copy; });
/* harmony import */ var _copy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy.css */ "./src/components/copy/copy.css");
/* harmony import */ var _copy_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_copy_css__WEBPACK_IMPORTED_MODULE_0__);


function Copy() {
  const copy = document.createElement("p");
  copy.innerText =
    "The reason we need default is that since webpack 4, when importing a CommonJS module, the import will no longer resolve to the value of module.exports, it will instead create an artificial namespace object for the CommonJS module. For more information on the reason behind this, read webpack 4: import() and CommonJs";
  copy.classList.add("copy");
  return copy;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvcHkvY29weS5jc3M/ZWY4NyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsMkdBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLFVBQVUsb0JBQW9CLDJCQUEyQixHQUFHOzs7Ozs7Ozs7Ozs7QUNGbkYsY0FBYyxtQkFBTyxDQUFDLHNJQUEyRDs7QUFFakY7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjs7QUFFTDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb3B5LmIwNzI0NGM0N2NhMjY1MDAyNjNiLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvcHkge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXNsb1xcXCI7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29weS5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IFwiLi9jb3B5LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3B5KCkge1xuICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHkuaW5uZXJUZXh0ID1cbiAgICBcIlRoZSByZWFzb24gd2UgbmVlZCBkZWZhdWx0IGlzIHRoYXQgc2luY2Ugd2VicGFjayA0LCB3aGVuIGltcG9ydGluZyBhIENvbW1vbkpTIG1vZHVsZSwgdGhlIGltcG9ydCB3aWxsIG5vIGxvbmdlciByZXNvbHZlIHRvIHRoZSB2YWx1ZSBvZiBtb2R1bGUuZXhwb3J0cywgaXQgd2lsbCBpbnN0ZWFkIGNyZWF0ZSBhbiBhcnRpZmljaWFsIG5hbWVzcGFjZSBvYmplY3QgZm9yIHRoZSBDb21tb25KUyBtb2R1bGUuIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZSByZWFzb24gYmVoaW5kIHRoaXMsIHJlYWQgd2VicGFjayA0OiBpbXBvcnQoKSBhbmQgQ29tbW9uSnNcIjtcbiAgY29weS5jbGFzc0xpc3QuYWRkKFwiY29weVwiKTtcbiAgcmV0dXJuIGNvcHk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9