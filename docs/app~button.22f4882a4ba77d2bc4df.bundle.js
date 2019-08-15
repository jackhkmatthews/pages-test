(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~button"],{

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.js */ "./src/components/button/print.js");


function Button() {
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    Object(_print_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Promise.all(/*! import() | copy */[__webpack_require__.e("npm.css-loader"), __webpack_require__.e("npm.style-loader"), __webpack_require__.e("copy")]).then(__webpack_require__.bind(null, /*! ../copy/copy.js */ "./src/components/copy/copy.js")).then(
      ({ default: Copy }) => {
        document.body.appendChild(Copy());
      }
    );
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

/***/ "./src/components/button/print.js":
/*!****************************************!*\
  !*** ./src/components/button/print.js ***!
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
  const data = {
    xml: _data_xml__WEBPACK_IMPORTED_MODULE_0___default.a,
    json: _data_json__WEBPACK_IMPORTED_MODULE_1__
  };
  console.log("I get called from print.js!");
  console.log({ data });
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9kYXRhLnhtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vcHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFpQzs7QUFFbEI7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFPO0FBQ1gsSUFBSSxtUEFBd0Q7QUFDNUQsUUFBUSxnQkFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLGtCQUFrQixRQUFRLHVGOzs7Ozs7Ozs7Ozs7QUNBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ0U7O0FBRWhCO0FBQ2Y7QUFDQSxTQUFTLGdEQUFHO0FBQ1osVUFBVSx1Q0FBSTtBQUNkO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIiLCJmaWxlIjoiYXBwfmJ1dHRvbi4yMmY0ODgyYTRiYTc3ZDJiYzRkZi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcbiAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcHJpbnRNZSgpO1xuICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvcHlcIiAqLyBcIi4uL2NvcHkvY29weS5qc1wiKS50aGVuKFxuICAgICAgKHsgZGVmYXVsdDogQ29weSB9KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29weSgpKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuICByZXR1cm4gYnRuO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCJpbXBvcnQgWG1sIGZyb20gXCIuL2RhdGEueG1sXCI7XG5pbXBvcnQgSnNvbiBmcm9tIFwiLi9kYXRhLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB4bWw6IFhtbCxcbiAgICBqc29uOiBKc29uXG4gIH07XG4gIGNvbnNvbGUubG9nKFwiSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhXCIpO1xuICBjb25zb2xlLmxvZyh7IGRhdGEgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9