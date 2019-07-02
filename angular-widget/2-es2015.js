(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/widgettest/dist/esm/my-component.entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/widgettest/dist/esm/my-component.entry.js ***!
  \****************************************************************/
/*! exports provided: my_component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony import */ var _widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgettest-d3a46060.js */ "./node_modules/widgettest/dist/esm/widgettest-d3a46060.js");


function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

class MyComponent {
    constructor(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", null, "Hello, Adrian! I'm ", this.getText());
    }
    static get style() { return ""; }
}




/***/ })

}]);
//# sourceMappingURL=2-es2015.js.map