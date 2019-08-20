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
/*! exports provided: default, ButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonElement", function() { return ButtonElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _copy_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../copy/copy */ "./src/components/copy/copy.ts");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print */ "./src/components/button/print.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function Button() {
    const btn = document.createElement("button");
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = () => {
        Object(_print__WEBPACK_IMPORTED_MODULE_2__["default"])();
        document.body.appendChild(Object(_copy_copy__WEBPACK_IMPORTED_MODULE_1__["default"])());
    };
    return btn;
}
let ButtonElement = class ButtonElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.copy = "Hi there webpack, typescript and lit-element";
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <h1 class="hello">
        ${this.copy} ${moment().format("MMMM Do YYYY, h:mm:ss a")}
      </h1>
    `;
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()
], ButtonElement.prototype, "copy", void 0);
ButtonElement = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("button-element")
], ButtonElement);



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
    const data = {
        json: _data_json__WEBPACK_IMPORTED_MODULE_0__,
        xml: _data_xml__WEBPACK_IMPORTED_MODULE_1___default.a
    };
    /* tslint:disable */
    console.log({ data });
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
    const copy = document.createElement("p");
    copy.innerText =
        `The reason we need default is that since
      webpack 4, when importing a CommonJS module,
      the import will no longer resolve to the
      value of module.exports, it will instead
      create an artificial namespace object
      for the CommonJS module. For more information
      on the reason behind this, read webpack 4: import() and CommonJs`;
    copy.classList.add("copy");
    return copy;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RhdGEueG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9wcmludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzP2VmODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29weS9jb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxVQUFVLG9CQUFvQiwyQkFBMkIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZYO0FBQ3hDO0FBQ0Y7QUFFZixTQUFTLE1BQU07SUFDNUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO0lBQ2xELEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2pCLHNEQUFPLEVBQUUsQ0FBQztRQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDBEQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUdELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWMsU0FBUSxzREFBVTtJQUQ3Qzs7UUFHUyxTQUFJLEdBQUcsOENBQThDLENBQUM7SUFRL0QsQ0FBQztJQVBRLE1BQU07UUFDWCxPQUFPLGdEQUFJOztVQUVMLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDOztLQUU1RCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBUkM7SUFEQyw0REFBUSxFQUFFOzJDQUNrRDtBQUZsRCxhQUFhO0lBRHpCLGlFQUFhLENBQUMsZ0JBQWdCLENBQUM7R0FDbkIsYUFBYSxDQVV6QjtBQVZ5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMUIsa0JBQWtCLFFBQVEsdUY7Ozs7Ozs7Ozs7OztBQ0ExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDRjtBQUVkLFNBQVMsT0FBTztJQUM3QixNQUFNLElBQUksR0FBRztRQUNYLElBQUksRUFBRSx1Q0FBSTtRQUNWLEdBQUcsRUFBRSxnREFBRztLQUNULENBQUM7SUFDRixvQkFBb0I7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQsY0FBYyxtQkFBTyxDQUFDLHNJQUEyRDs7QUFFakY7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUVMLFNBQVMsSUFBSTtJQUMxQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxTQUFTO1FBQ1o7Ozs7Ozt1RUFNbUUsQ0FBQztJQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJmaWxlIjoiYXBwfmJ1dHRvbi5hZTc4M2RkOWY0ODBiZGI5MGU0MS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb3B5IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVzbG9cXFwiO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgaHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBDb3B5IGZyb20gXCIuLi9jb3B5L2NvcHlcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcbiAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcHJpbnRNZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29weSgpKTtcbiAgfTtcbiAgcmV0dXJuIGJ0bjtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJidXR0b24tZWxlbWVudFwiKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGNvcHkgPSBcIkhpIHRoZXJlIHdlYnBhY2ssIHR5cGVzY3JpcHQgYW5kIGxpdC1lbGVtZW50XCI7XG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDEgY2xhc3M9XCJoZWxsb1wiPlxuICAgICAgICAke3RoaXMuY29weX0gJHttb21lbnQoKS5mb3JtYXQoXCJNTU1NIERvIFlZWVksIGg6bW06c3MgYVwiKX1cbiAgICAgIDwvaDE+XG4gICAgYDtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCJpbXBvcnQgSnNvbiBmcm9tIFwiLi9kYXRhLmpzb25cIjtcbmltcG9ydCBYbWwgZnJvbSBcIi4vZGF0YS54bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBqc29uOiBKc29uLFxuICAgIHhtbDogWG1sXG4gIH07XG4gIC8qIHRzbGludDpkaXNhYmxlICovXG4gIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcbn1cbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb3B5LmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJpbXBvcnQgXCIuL2NvcHkuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHkoKSB7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29weS5pbm5lclRleHQgPVxuICAgIGBUaGUgcmVhc29uIHdlIG5lZWQgZGVmYXVsdCBpcyB0aGF0IHNpbmNlXG4gICAgICB3ZWJwYWNrIDQsIHdoZW4gaW1wb3J0aW5nIGEgQ29tbW9uSlMgbW9kdWxlLFxuICAgICAgdGhlIGltcG9ydCB3aWxsIG5vIGxvbmdlciByZXNvbHZlIHRvIHRoZVxuICAgICAgdmFsdWUgb2YgbW9kdWxlLmV4cG9ydHMsIGl0IHdpbGwgaW5zdGVhZFxuICAgICAgY3JlYXRlIGFuIGFydGlmaWNpYWwgbmFtZXNwYWNlIG9iamVjdFxuICAgICAgZm9yIHRoZSBDb21tb25KUyBtb2R1bGUuIEZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAgICBvbiB0aGUgcmVhc29uIGJlaGluZCB0aGlzLCByZWFkIHdlYnBhY2sgNDogaW1wb3J0KCkgYW5kIENvbW1vbkpzYDtcbiAgY29weS5jbGFzc0xpc3QuYWRkKFwiY29weVwiKTtcbiAgcmV0dXJuIGNvcHk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9