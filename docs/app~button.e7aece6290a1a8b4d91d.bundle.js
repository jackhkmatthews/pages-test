(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~button"],{

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/*! exports provided: ButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonElement", function() { return ButtonElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/components/button/print.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ButtonElement = class ButtonElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.copy = "Click me and check the console!";
    }
    handleClick() {
        Object(_print__WEBPACK_IMPORTED_MODULE_1__["default"])();
        document.body.appendChild(document.createElement("copy-element"));
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9kYXRhLnhtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vcHJpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0U7QUFDMUM7QUFHOUIsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYyxTQUFRLHNEQUFVO0lBRDdDOztRQUdTLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQztJQVlsRCxDQUFDO0lBWFEsV0FBVztRQUNoQixzREFBTyxFQUFFLENBQUM7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNNLE1BQU07UUFDWCxPQUFPLGdEQUFJO3dCQUNTLElBQUksQ0FBQyxXQUFXO1VBQzlCLElBQUksQ0FBQyxJQUFJOztLQUVkLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFaQztJQURDLDREQUFRLEVBQUU7MkNBQ3FDO0FBRnJDLGFBQWE7SUFEekIsaUVBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztHQUNuQixhQUFhLENBY3pCO0FBZHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0oxQixrQkFBa0IsUUFBUSx1Rjs7Ozs7Ozs7Ozs7O0FDQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNGO0FBRWQsU0FBUyxPQUFPO0lBQzdCLE1BQU0sSUFBSSxHQUFHO1FBQ1gsSUFBSSxFQUFFLHVDQUFJO1FBQ1YsR0FBRyxFQUFFLGdEQUFHO0tBQ1QsQ0FBQztJQUNGLG9CQUFvQjtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixDQUFDIiwiZmlsZSI6ImFwcH5idXR0b24uZTdhZWNlNjI5MGExYThiNGQ5MWQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgaHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiYnV0dG9uLWVsZW1lbnRcIilcbmV4cG9ydCBjbGFzcyBCdXR0b25FbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBjb3B5ID0gXCJDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhXCI7XG4gIHB1YmxpYyBoYW5kbGVDbGljaygpIHtcbiAgICBwcmludE1lKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29weS1lbGVtZW50XCIpKTtcbiAgfVxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCI+XG4gICAgICAgICR7dGhpcy5jb3B5fVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCJpbXBvcnQgSnNvbiBmcm9tIFwiLi9kYXRhLmpzb25cIjtcbmltcG9ydCBYbWwgZnJvbSBcIi4vZGF0YS54bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBqc29uOiBKc29uLFxuICAgIHhtbDogWG1sXG4gIH07XG4gIC8qIHRzbGludDpkaXNhYmxlICovXG4gIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=