(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flipImage"],{

/***/ "./src/components/flip-image/flip-image.ts":
/*!*************************************************!*\
  !*** ./src/components/flip-image/flip-image.ts ***!
  \*************************************************/
/*! exports provided: default, ImageFlipElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFlipElement", function() { return ImageFlipElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _james_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./james.jpg */ "./src/components/flip-image/james.jpg");
/* harmony import */ var _james_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_james_jpg__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* harmony default export */ __webpack_exports__["default"] = (() => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
  <img src=${_james_jpg__WEBPACK_IMPORTED_MODULE_1___default.a} />
  <img src=${_james_jpg__WEBPACK_IMPORTED_MODULE_1___default.a} />
`);
let ImageFlipElement = class ImageFlipElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <img src=${_james_jpg__WEBPACK_IMPORTED_MODULE_1___default.a} />
      <img src=${_james_jpg__WEBPACK_IMPORTED_MODULE_1___default.a} />
    `;
    }
};
ImageFlipElement = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("image-flip-element")
], ImageFlipElement);



/***/ }),

/***/ "./src/components/flip-image/james.jpg":
/*!*********************************************!*\
  !*** ./src/components/flip-image/james.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b655157d15d988376d0e29bb7bc23802.jpg";

/***/ })

},[["./src/components/flip-image/flip-image.ts","runtime","npm.lit-html","npm.lit-element"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mbGlwLWltYWdlL2ZsaXAtaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmxpcC1pbWFnZS9qYW1lcy5qcGciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdFO0FBQ3hDO0FBRWpCLGtFQUFHLEVBQUUsQ0FBQyxnREFBSTthQUNaLGlEQUFLO2FBQ0wsaURBQUs7Q0FDakIsRUFBQztBQUdGLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWlCLFNBQVEsc0RBQVU7SUFDdkMsTUFBTTtRQUNYLE9BQU8sZ0RBQUk7aUJBQ0UsaURBQUs7aUJBQ0wsaURBQUs7S0FDakIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQVBZLGdCQUFnQjtJQUQ1QixpRUFBYSxDQUFDLG9CQUFvQixDQUFDO0dBQ3ZCLGdCQUFnQixDQU81QjtBQVA0Qjs7Ozs7Ozs7Ozs7O0FDVDdCLGlCQUFpQixxQkFBdUIsMEMiLCJmaWxlIjoiZmxpcEltYWdlLjEzNjYxOGNhNzgwYWE2MzI3ZWY2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGh0bWwsIExpdEVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgSmFtZXMgZnJvbSBcIi4vamFtZXMuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGh0bWxgXG4gIDxpbWcgc3JjPSR7SmFtZXN9IC8+XG4gIDxpbWcgc3JjPSR7SmFtZXN9IC8+XG5gO1xuXG5AY3VzdG9tRWxlbWVudChcImltYWdlLWZsaXAtZWxlbWVudFwiKVxuZXhwb3J0IGNsYXNzIEltYWdlRmxpcEVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxpbWcgc3JjPSR7SmFtZXN9IC8+XG4gICAgICA8aW1nIHNyYz0ke0phbWVzfSAvPlxuICAgIGA7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI2NTUxNTdkMTVkOTg4Mzc2ZDBlMjliYjdiYzIzODAyLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=