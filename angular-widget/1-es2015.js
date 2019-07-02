(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/widgettest/dist/esm/location-address_4.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/widgettest/dist/esm/location-address_4.entry.js ***!
  \**********************************************************************/
/*! exports provided: location_address, location_header, location_phone, map_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location_address", function() { return LocationAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location_header", function() { return LocationHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location_phone", function() { return LocationPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map_card", function() { return MapCard; });
/* harmony import */ var _widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgettest-d3a46060.js */ "./node_modules/widgettest/dist/esm/widgettest-d3a46060.js");


class LocationAddress {
    constructor(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
    }
    render() {
        if (!this.locationAddress) {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("h1", { class: "mf-location-name loading" }, "Loading...");
        }
        else {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", { class: "mf-address" }, Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("p", { itemprop: "streetAddress", class: "mf-address-1" }, this.locationAddress), Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("span", { itemprop: "addressLocality", class: "mf-address-locality" }, this.locationLocality), ",", Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("span", { itemprop: "addressRegion", class: "mf-address-region" }, this.locationRegion), Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("span", { itemprop: "postalCode", class: "mf-address-zip" }, this.locationZip), Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("br", null));
        }
    }
    static get style() { return ""; }
}

class LocationHeader {
    constructor(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
    }
    getText() {
        return this.locationName;
    }
    render() {
        if (!this.getText()) {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("h1", { class: "mf-location-name loading" }, "Loading...");
        }
        else {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("h1", { class: "mf-location-name" }, this.getText());
        }
    }
    static get style() { return ""; }
}

class LocationPhone {
    constructor(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.mfPhoneClicked = Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this, "mfPhoneClicked", 7);
    }
    phoneClickedHandler() {
        const eventParams = {
            url: this.locationUrl,
            phone: this.locationPhone,
            location_id: this.locationId
        };
        const gaOptions = {
            hitType: 'click',
            eventCategory: 'LLP',
            eventAction: 'Call Phone',
            eventLabel: eventParams,
            eventValue: 1
        };
        if (typeof ga === "function" && this.useGa) {
            console.log('Web Component: LocationPhone: Phone clicked. Internally sending data to GA', gaOptions, ga);
            ga('send', gaOptions);
        }
        else {
            console.log('Web Component: LocationPhone: Phone clicked. GA disabled', eventParams, ga);
        }
        this.mfPhoneClicked.emit(gaOptions);
    }
    getPhone() {
        return this.locationPhone;
    }
    render() {
        if (!this.getPhone()) {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", { class: "mf-phonenumber mf-loading" }, "Loading...");
        }
        else {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", { class: "mf-phonenumber" }, Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", { class: "visible-xs" }, Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("a", { href: `tel:${this.getPhone()}`, onClick: () => this.phoneClickedHandler(), title: "Call" }, this.getPhone())));
        }
    }
    static get style() { return ""; }
}

class MapCard {
    constructor(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        /**
         * Map zoom level
         */
        this.zoom = 15;
        /**
         * Map height
         */
        this.height = 250;
        /**
         * Map width
         */
        this.width = 400;
        /**
         * Mapbox Version
         */
        this.mapboxVersion = "v4";
    }
    getMapUrl() {
        return `https://api.mapbox.com/${this.mapboxVersion}/mapbox.streets/${this.mapPins}(${this.longitude},${this.latitude})/${this.longitude},${this.latitude},${this.zoom}/${this.width}x${this.height}.png?access_token=${this.apiKey}`;
    }
    render() {
        return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("img", { src: this.getMapUrl(), alt: this.altText, property: "og:image" });
    }
    static get style() { return ""; }
}




/***/ })

}]);
//# sourceMappingURL=1-es2015.js.map