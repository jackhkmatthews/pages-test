(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button/button */ "./src/components/button/button.ts");
/* harmony import */ var _components_copy_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/copy/copy */ "./src/components/copy/copy.ts");
/* harmony import */ var _components_flip_image_flip_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/flip-image/flip-image */ "./src/components/flip-image/flip-image.ts");
/* harmony import */ var _components_title_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/title/title */ "./src/components/title/title.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);





function app() {
    const element = document.createElement("div");
    const title = document.createElement("title-element");
    const button = document.createElement("button-element");
    const imageFlip = document.createElement("image-flip-element");
    element.appendChild(imageFlip);
    element.appendChild(title);
    element.appendChild(button);
    return element;
}
document.body.appendChild(app());


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
/*! exports provided: CopyElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyElement", function() { return CopyElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _copy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy.css */ "./src/components/copy/copy.css");
/* harmony import */ var _copy_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_copy_css__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CopyElement = class CopyElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.copy = `The reason we need default is that since
      webpack 4, when importing a CommonJS module,
      the import will no longer resolve to the
      value of module.exports, it will instead
      create an artificial namespace object
      for the CommonJS module. For more information
      on the reason behind this, read webpack 4: import() and CommonJs`;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <p class="copy">
        ${this.copy}
      </p>
    `;
    }
};
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()
], CopyElement.prototype, "copy", void 0);
CopyElement = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("copy-element")
], CopyElement);



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

},[["./src/app.ts","runtime","npm.lit-html","npm.lit-element","npm.moment","npm.css-loader","npm.style-loader","npm.webpack","app~title","app~button","app~flipImage"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3B5L2NvcHkuY3NzP2VmODciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29weS9jb3B5LnRzIiwid2VicGFjazovLy8uL3NyYy9sZXhlbmQtZXhhLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzk4MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsMkdBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLFVBQVUsb0JBQW9CLDJCQUEyQixHQUFHOzs7Ozs7Ozs7Ozs7QUNGbkYsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDJHQUFtRDtBQUN4RSxzQ0FBc0MsbUJBQU8sQ0FBQyw4Q0FBa0I7QUFDaEU7QUFDQSxjQUFjLFFBQVMsZUFBZSw0QkFBNEIsK0NBQStDLHFCQUFxQix1QkFBdUIsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0xoSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNKO0FBQ1k7QUFDVjtBQUNiO0FBRXJCLFNBQVMsR0FBRztJQUNWLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRS9ELE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTVCLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNuQmpDLGNBQWMsbUJBQU8sQ0FBQyxzSUFBMkQ7O0FBRWpGO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlKQUE4RTs7QUFFbkc7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0U7QUFDcEQ7QUFHcEIsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLHNEQUFVO0lBRDNDOztRQUdTLFNBQUksR0FBRzs7Ozs7O3VFQU11RCxDQUFDO0lBUXhFLENBQUM7SUFQUSxNQUFNO1FBQ1gsT0FBTyxnREFBSTs7VUFFTCxJQUFJLENBQUMsSUFBSTs7S0FFZCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBZEM7SUFEQyw0REFBUSxFQUFFO3lDQU8yRDtBQVIzRCxXQUFXO0lBRHZCLGlFQUFhLENBQUMsY0FBYyxDQUFDO0dBQ2pCLFdBQVcsQ0FnQnZCO0FBaEJ1Qjs7Ozs7Ozs7Ozs7O0FDSnhCLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGNBQWMsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRTVFO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1KQUF3RTs7QUFFN0Y7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5mOWJhMWIxODZkZGRhNzliMWJjMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb3B5IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVzbG9cXFwiO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9sZXhlbmQtZXhhLnR0ZlwiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMZXhlbmRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jb3B5L2NvcHlcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9mbGlwLWltYWdlL2ZsaXAtaW1hZ2VcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy90aXRsZS90aXRsZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gYXBwKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGl0bGUtZWxlbWVudFwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvbi1lbGVtZW50XCIpO1xuICBjb25zdCBpbWFnZUZsaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1hZ2UtZmxpcC1lbGVtZW50XCIpO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VGbGlwKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAoKSk7XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29weS5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgaHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4vY29weS5jc3NcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJjb3B5LWVsZW1lbnRcIilcbmV4cG9ydCBjbGFzcyBDb3B5RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgY29weSA9IGBUaGUgcmVhc29uIHdlIG5lZWQgZGVmYXVsdCBpcyB0aGF0IHNpbmNlXG4gICAgICB3ZWJwYWNrIDQsIHdoZW4gaW1wb3J0aW5nIGEgQ29tbW9uSlMgbW9kdWxlLFxuICAgICAgdGhlIGltcG9ydCB3aWxsIG5vIGxvbmdlciByZXNvbHZlIHRvIHRoZVxuICAgICAgdmFsdWUgb2YgbW9kdWxlLmV4cG9ydHMsIGl0IHdpbGwgaW5zdGVhZFxuICAgICAgY3JlYXRlIGFuIGFydGlmaWNpYWwgbmFtZXNwYWNlIG9iamVjdFxuICAgICAgZm9yIHRoZSBDb21tb25KUyBtb2R1bGUuIEZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAgICBvbiB0aGUgcmVhc29uIGJlaGluZCB0aGlzLCByZWFkIHdlYnBhY2sgNDogaW1wb3J0KCkgYW5kIENvbW1vbkpzYDtcbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwIGNsYXNzPVwiY29weVwiPlxuICAgICAgICAke3RoaXMuY29weX1cbiAgICAgIDwvcD5cbiAgICBgO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhZGRlYzBmNTE2MWE1MjY5YTNiMGVhZGEwMmY0NDFjMS50dGZcIjsiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=