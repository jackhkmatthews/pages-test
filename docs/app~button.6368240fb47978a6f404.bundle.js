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
        this.copy = "Click me and check the console!";
    }
    handleClick(e) {
        console.log(this.copy);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <button @click="${this.handleClick}">
        ${this.copy}
      </button>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RhdGEueG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9wcmludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzP2VmODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29weS9jb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxVQUFVLG9CQUFvQiwyQkFBMkIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZYO0FBQ3hDO0FBQ0Y7QUFFZixTQUFTLE1BQU07SUFDNUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO0lBQ2xELEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2pCLHNEQUFPLEVBQUUsQ0FBQztRQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDBEQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUdELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWMsU0FBUSxzREFBVTtJQUQ3Qzs7UUFHUyxTQUFJLEdBQUcsaUNBQWlDLENBQUM7SUFXbEQsQ0FBQztJQVZRLFdBQVcsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTSxNQUFNO1FBQ1gsT0FBTyxnREFBSTt3QkFDUyxJQUFJLENBQUMsV0FBVztVQUM5QixJQUFJLENBQUMsSUFBSTs7S0FFZCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBWEM7SUFEQyw0REFBUSxFQUFFOzJDQUNxQztBQUZyQyxhQUFhO0lBRHpCLGlFQUFhLENBQUMsZ0JBQWdCLENBQUM7R0FDbkIsYUFBYSxDQWF6QjtBQWJ5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMUIsa0JBQWtCLFFBQVEsdUY7Ozs7Ozs7Ozs7OztBQ0ExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDRjtBQUVkLFNBQVMsT0FBTztJQUM3QixNQUFNLElBQUksR0FBRztRQUNYLElBQUksRUFBRSx1Q0FBSTtRQUNWLEdBQUcsRUFBRSxnREFBRztLQUNULENBQUM7SUFDRixvQkFBb0I7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQsY0FBYyxtQkFBTyxDQUFDLHNJQUEyRDs7QUFFakY7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUVMLFNBQVMsSUFBSTtJQUMxQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxTQUFTO1FBQ1o7Ozs7Ozt1RUFNbUUsQ0FBQztJQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJmaWxlIjoiYXBwfmJ1dHRvbi42MzY4MjQwZmI0Nzk3OGE2ZjQwNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb3B5IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVzbG9cXFwiO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgaHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBDb3B5IGZyb20gXCIuLi9jb3B5L2NvcHlcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcbiAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcHJpbnRNZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29weSgpKTtcbiAgfTtcbiAgcmV0dXJuIGJ0bjtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJidXR0b24tZWxlbWVudFwiKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGNvcHkgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcbiAgcHVibGljIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvcHkpO1xuICB9XG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIj5cbiAgICAgICAgJHt0aGlzLmNvcHl9XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5vdGVcIjp7XCJ0b1wiOltcIk1hcnlcIl0sXCJmcm9tXCI6W1wiSm9oblwiXSxcImhlYWRpbmdcIjpbXCJSZW1pbmRlclwiXSxcImJvZHlcIjpbXCJDYWxsIENpbmR5IG9uIFR1ZXNkYXlcIl19fSIsImltcG9ydCBKc29uIGZyb20gXCIuL2RhdGEuanNvblwiO1xuaW1wb3J0IFhtbCBmcm9tIFwiLi9kYXRhLnhtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGpzb246IEpzb24sXG4gICAgeG1sOiBYbWxcbiAgfTtcbiAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xufVxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvcHkuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCBcIi4vY29weS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weSgpIHtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5LmlubmVyVGV4dCA9XG4gICAgYFRoZSByZWFzb24gd2UgbmVlZCBkZWZhdWx0IGlzIHRoYXQgc2luY2VcbiAgICAgIHdlYnBhY2sgNCwgd2hlbiBpbXBvcnRpbmcgYSBDb21tb25KUyBtb2R1bGUsXG4gICAgICB0aGUgaW1wb3J0IHdpbGwgbm8gbG9uZ2VyIHJlc29sdmUgdG8gdGhlXG4gICAgICB2YWx1ZSBvZiBtb2R1bGUuZXhwb3J0cywgaXQgd2lsbCBpbnN0ZWFkXG4gICAgICBjcmVhdGUgYW4gYXJ0aWZpY2lhbCBuYW1lc3BhY2Ugb2JqZWN0XG4gICAgICBmb3IgdGhlIENvbW1vbkpTIG1vZHVsZS4gRm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgIG9uIHRoZSByZWFzb24gYmVoaW5kIHRoaXMsIHJlYWQgd2VicGFjayA0OiBpbXBvcnQoKSBhbmQgQ29tbW9uSnNgO1xuICBjb3B5LmNsYXNzTGlzdC5hZGQoXCJjb3B5XCIpO1xuICByZXR1cm4gY29weTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=