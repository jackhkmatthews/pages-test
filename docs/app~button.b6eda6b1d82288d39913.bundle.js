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
/* harmony import */ var _copy_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../copy/copy */ "./src/components/copy/copy.ts");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/components/button/print.ts");


function Button() {
    var btn = document.createElement("button");
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = function () {
        Object(_print__WEBPACK_IMPORTED_MODULE_1__["default"])();
        document.body.appendChild(Object(_copy_copy__WEBPACK_IMPORTED_MODULE_0__["default"])());
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
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/components/button/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/components/button/data.json", 1);
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.xml */ "./src/components/button/data.xml");
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_1__);


function printMe() {
    var data = {
        json: _data_json__WEBPACK_IMPORTED_MODULE_0__,
        xml: _data_xml__WEBPACK_IMPORTED_MODULE_1___default.a,
    };
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
    "'";
    copy.classList.add("copy");
    return copy;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RhdGEueG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9wcmludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzP2VmODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29weS9jb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxVQUFVLG9CQUFvQiwyQkFBMkIsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0ZuRjtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUNGO0FBRWYsU0FBUyxNQUFNO0lBQzVCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztJQUNsRCxHQUFHLENBQUMsT0FBTyxHQUFHO1FBQ1osc0RBQU8sRUFBRSxDQUFDO1FBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsMERBQUksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hELGtCQUFrQixRQUFRLHVGOzs7Ozs7Ozs7Ozs7QUNBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ0Y7QUFFZCxTQUFTLE9BQU87SUFDN0IsSUFBTSxJQUFJLEdBQUc7UUFDWCxJQUFJLEVBQUUsdUNBQUk7UUFDVixHQUFHLEVBQUUsZ0RBQUc7S0FDVCxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0FDUkQsY0FBYyxtQkFBTyxDQUFDLHNJQUEyRDs7QUFFakY7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUVMLFNBQVMsSUFBSTtJQUMxQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxTQUFTO1FBQ1osOFRBQThUO0lBQUEsR0FBRztJQUNuVSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJmaWxlIjoiYXBwfmJ1dHRvbi5iNmVkYTZiMWQ4MjI4OGQzOTkxMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb3B5IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVzbG9cXFwiO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiaW1wb3J0IENvcHkgZnJvbSBcIi4uL2NvcHkvY29weVwiO1xuaW1wb3J0IHByaW50TWUgZnJvbSBcIi4vcHJpbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlubmVySFRNTCA9IFwiQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlIVwiO1xuICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICBwcmludE1lKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb3B5KCkpO1xuICB9O1xuICByZXR1cm4gYnRuO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCJpbXBvcnQgSnNvbiBmcm9tIFwiLi9kYXRhLmpzb25cIjtcbmltcG9ydCBYbWwgZnJvbSBcIi4vZGF0YS54bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBqc29uOiBKc29uLFxuICAgIHhtbDogWG1sLFxuICB9O1xufVxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvcHkuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCBcIi4vY29weS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weSgpIHtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5LmlubmVyVGV4dCA9XG4gICAgYFRoZSByZWFzb24gd2UgbmVlZCBkZWZhdWx0IGlzIHRoYXQgc2luY2Ugd2VicGFjayA0LCB3aGVuIGltcG9ydGluZyBhIENvbW1vbkpTIG1vZHVsZSwgdGhlIGltcG9ydCB3aWxsIG5vIGxvbmdlciByZXNvbHZlIHRvIHRoZSB2YWx1ZSBvZiBtb2R1bGUuZXhwb3J0cywgaXQgd2lsbCBpbnN0ZWFkIGNyZWF0ZSBhbiBhcnRpZmljaWFsIG5hbWVzcGFjZSBvYmplY3QgZm9yIHRoZSBDb21tb25KUyBtb2R1bGUuIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZSByZWFzb24gYmVoaW5kIHRoaXMsIHJlYWQgd2VicGFjayA0OiBpbXBvcnQoKSBhbmQgQ29tbW9uSnNgXCInXCJcbiAgY29weS5jbGFzc0xpc3QuYWRkKFwiY29weVwiKTtcbiAgcmV0dXJuIGNvcHk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9