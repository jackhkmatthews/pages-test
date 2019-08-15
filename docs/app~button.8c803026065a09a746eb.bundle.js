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
        "The reason we need default is that since\n      webpack 4, when importing a CommonJS module,\n      the import will no longer resolve to the\n      value of module.exports, it will instead\n      create an artificial namespace object\n      for the CommonJS module. For more information\n      on the reason behind this, read webpack 4: import() and CommonJs";
    copy.classList.add("copy");
    return copy;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RhdGEueG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9wcmludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzP2VmODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29weS9jb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxVQUFVLG9CQUFvQiwyQkFBMkIsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0ZuRjtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUNGO0FBRWYsU0FBUyxNQUFNO0lBQzVCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztJQUNsRCxHQUFHLENBQUMsT0FBTyxHQUFHO1FBQ1osc0RBQU8sRUFBRSxDQUFDO1FBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsMERBQUksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hELGtCQUFrQixRQUFRLHVGOzs7Ozs7Ozs7Ozs7QUNBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ0Y7QUFFZCxTQUFTLE9BQU87SUFDN0IsSUFBTSxJQUFJLEdBQUc7UUFDWCxJQUFJLEVBQUUsdUNBQUk7UUFDVixHQUFHLEVBQUUsZ0RBQUc7S0FDVCxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0FDUkQsY0FBYyxtQkFBTyxDQUFDLHNJQUEyRDs7QUFFakY7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUVMLFNBQVMsSUFBSTtJQUMxQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxTQUFTO1FBQ1osd1dBTW1FLENBQUM7SUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwiZmlsZSI6ImFwcH5idXR0b24uOGM4MDMwMjYwNjVhMDlhNzQ2ZWIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29weSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk1lc2xvXFxcIjtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImltcG9ydCBDb3B5IGZyb20gXCIuLi9jb3B5L2NvcHlcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcbiAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcHJpbnRNZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29weSgpKTtcbiAgfTtcbiAgcmV0dXJuIGJ0bjtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1wibm90ZVwiOntcInRvXCI6W1wiTWFyeVwiXSxcImZyb21cIjpbXCJKb2huXCJdLFwiaGVhZGluZ1wiOltcIlJlbWluZGVyXCJdLFwiYm9keVwiOltcIkNhbGwgQ2luZHkgb24gVHVlc2RheVwiXX19IiwiaW1wb3J0IEpzb24gZnJvbSBcIi4vZGF0YS5qc29uXCI7XG5pbXBvcnQgWG1sIGZyb20gXCIuL2RhdGEueG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAganNvbjogSnNvbixcbiAgICB4bWw6IFhtbCxcbiAgfTtcbn1cbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb3B5LmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJpbXBvcnQgXCIuL2NvcHkuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHkoKSB7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29weS5pbm5lclRleHQgPVxuICAgIGBUaGUgcmVhc29uIHdlIG5lZWQgZGVmYXVsdCBpcyB0aGF0IHNpbmNlXG4gICAgICB3ZWJwYWNrIDQsIHdoZW4gaW1wb3J0aW5nIGEgQ29tbW9uSlMgbW9kdWxlLFxuICAgICAgdGhlIGltcG9ydCB3aWxsIG5vIGxvbmdlciByZXNvbHZlIHRvIHRoZVxuICAgICAgdmFsdWUgb2YgbW9kdWxlLmV4cG9ydHMsIGl0IHdpbGwgaW5zdGVhZFxuICAgICAgY3JlYXRlIGFuIGFydGlmaWNpYWwgbmFtZXNwYWNlIG9iamVjdFxuICAgICAgZm9yIHRoZSBDb21tb25KUyBtb2R1bGUuIEZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAgICBvbiB0aGUgcmVhc29uIGJlaGluZCB0aGlzLCByZWFkIHdlYnBhY2sgNDogaW1wb3J0KCkgYW5kIENvbW1vbkpzYDtcbiAgY29weS5jbGFzc0xpc3QuYWRkKFwiY29weVwiKTtcbiAgcmV0dXJuIGNvcHk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9