(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~button"],{

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

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/components/button/print.ts");
/* harmony import */ var _copy_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../copy/copy */ "./src/components/copy/copy.ts");


function Button() {
    var btn = document.createElement("button");
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = function () {
        Object(_print__WEBPACK_IMPORTED_MODULE_0__["default"])();
        document.body.appendChild(Object(_copy_copy__WEBPACK_IMPORTED_MODULE_1__["default"])());
    };
    return btn;
}


/***/ }),

/***/ "./src/components/button/data.json":
/*!*****************************************!*\
  !*** ./src/components/button/data.json ***!
  \*****************************************/
/*! exports provided: userId, id, title, completed, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"userId\":1,\"id\":1,\"title\":\"delectus aut autem\",\"completed\":false}");

/***/ }),

/***/ "./src/components/button/data.xml":
/*!****************************************!*\
  !*** ./src/components/button/data.xml ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"note":{"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]}}

/***/ }),

/***/ "./src/components/button/print.ts":
/*!****************************************!*\
  !*** ./src/components/button/print.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.xml */ "./src/components/button/data.xml");
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ "./src/components/button/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/components/button/data.json", 1);


function printMe() {
    var data = {
        xml: _data_xml__WEBPACK_IMPORTED_MODULE_0___default.a,
        json: _data_json__WEBPACK_IMPORTED_MODULE_1__
    };
    console.log("I get called from print.js!");
    console.log({ data: data });
}


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

/***/ "./src/components/copy/copy.ts":
/*!*************************************!*\
  !*** ./src/components/copy/copy.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Copy; });
/* harmony import */ var _copy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy.css */ "./src/components/copy/copy.css");
/* harmony import */ var _copy_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_copy_css__WEBPACK_IMPORTED_MODULE_0__);

function Copy() {
    var copy = document.createElement("p");
    copy.innerText =
        "The reason we need default is that since webpack 4, when importing a CommonJS module, the import will no longer resolve to the value of module.exports, it will instead create an artificial namespace object for the CommonJS module. For more information on the reason behind this, read webpack 4: import() and CommonJs";
    copy.classList.add("copy");
    return copy;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RhdGEueG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9wcmludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzP2VmODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29weS9jb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxVQUFVLG9CQUFvQiwyQkFBMkIsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0ZuRjtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNFO0FBRWpCLFNBQVMsTUFBTTtJQUM1QixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsaUNBQWlDLENBQUM7SUFDbEQsR0FBRyxDQUFDLE9BQU8sR0FBRztRQUNaLHNEQUFPLEVBQUUsQ0FBQztRQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDBEQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRCxrQkFBa0IsUUFBUSx1Rjs7Ozs7Ozs7Ozs7O0FDQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUNFO0FBRWhCLFNBQVMsT0FBTztJQUM3QixJQUFNLElBQUksR0FBRztRQUNYLEdBQUcsRUFBRSxnREFBRztRQUNSLElBQUksRUFBRSx1Q0FBSTtLQUNYLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksUUFBRSxDQUFDLENBQUM7QUFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQsY0FBYyxtQkFBTyxDQUFDLHNJQUEyRDs7QUFFakY7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUVMLFNBQVMsSUFBSTtJQUMxQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxTQUFTO1FBQ1osOFRBQThULENBQUM7SUFDalUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwiZmlsZSI6ImFwcH5idXR0b24uN2VkOWM5ZmZiNGYwNzlhZTJmNTguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29weSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk1lc2xvXFxcIjtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50XCI7XG5pbXBvcnQgQ29weSBmcm9tIFwiLi4vY29weS9jb3B5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlubmVySFRNTCA9IFwiQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlIVwiO1xuICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICBwcmludE1lKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb3B5KCkpO1xuICB9O1xuICByZXR1cm4gYnRuO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCJpbXBvcnQgWG1sIGZyb20gXCIuL2RhdGEueG1sXCI7XG5pbXBvcnQgSnNvbiBmcm9tIFwiLi9kYXRhLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB4bWw6IFhtbCxcbiAgICBqc29uOiBKc29uXG4gIH07XG4gIGNvbnNvbGUubG9nKFwiSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhXCIpO1xuICBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG59XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29weS5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IFwiLi9jb3B5LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3B5KCkge1xuICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHkuaW5uZXJUZXh0ID1cbiAgICBcIlRoZSByZWFzb24gd2UgbmVlZCBkZWZhdWx0IGlzIHRoYXQgc2luY2Ugd2VicGFjayA0LCB3aGVuIGltcG9ydGluZyBhIENvbW1vbkpTIG1vZHVsZSwgdGhlIGltcG9ydCB3aWxsIG5vIGxvbmdlciByZXNvbHZlIHRvIHRoZSB2YWx1ZSBvZiBtb2R1bGUuZXhwb3J0cywgaXQgd2lsbCBpbnN0ZWFkIGNyZWF0ZSBhbiBhcnRpZmljaWFsIG5hbWVzcGFjZSBvYmplY3QgZm9yIHRoZSBDb21tb25KUyBtb2R1bGUuIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZSByZWFzb24gYmVoaW5kIHRoaXMsIHJlYWQgd2VicGFjayA0OiBpbXBvcnQoKSBhbmQgQ29tbW9uSnNcIjtcbiAgY29weS5jbGFzc0xpc3QuYWRkKFwiY29weVwiKTtcbiAgcmV0dXJuIGNvcHk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9