(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/widgettest/dist/esm/legacy/location-address_4.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/widgettest/dist/esm/legacy/location-address_4.entry.js ***!
  \*****************************************************************************/
/*! exports provided: location_address, location_header, location_phone, map_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location_address", function() { return LocationAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location_header", function() { return LocationHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location_phone", function() { return LocationPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map_card", function() { return MapCard; });
/* harmony import */ var _widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgettest-d3a46060.js */ "./node_modules/widgettest/dist/esm/legacy/widgettest-d3a46060.js");

var LocationAddress = /** @class */ (function () {
    function LocationAddress(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
    }
    LocationAddress.prototype.render = function () {
        if (!this.locationAddress) {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("h1", { class: "mf-location-name loading" }, "Loading...");
        }
        else {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", { class: "mf-address" }, Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("p", { itemprop: "streetAddress", class: "mf-address-1" }, this.locationAddress), Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("span", { itemprop: "addressLocality", class: "mf-address-locality" }, this.locationLocality), ",", Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("span", { itemprop: "addressRegion", class: "mf-address-region" }, this.locationRegion), Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("span", { itemprop: "postalCode", class: "mf-address-zip" }, this.locationZip), Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("br", null));
        }
    };
    Object.defineProperty(LocationAddress, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return LocationAddress;
}());
var LocationHeader = /** @class */ (function () {
    function LocationHeader(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
    }
    LocationHeader.prototype.getText = function () {
        return this.locationName;
    };
    LocationHeader.prototype.render = function () {
        if (!this.getText()) {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("h1", { class: "mf-location-name loading" }, "Loading...");
        }
        else {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("h1", { class: "mf-location-name" }, this.getText());
        }
    };
    Object.defineProperty(LocationHeader, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return LocationHeader;
}());
var LocationPhone = /** @class */ (function () {
    function LocationPhone(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.mfPhoneClicked = Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this, "mfPhoneClicked", 7);
    }
    LocationPhone.prototype.phoneClickedHandler = function () {
        var eventParams = {
            url: this.locationUrl,
            phone: this.locationPhone,
            location_id: this.locationId
        };
        var gaOptions = {
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
    };
    LocationPhone.prototype.getPhone = function () {
        return this.locationPhone;
    };
    LocationPhone.prototype.render = function () {
        var _this = this;
        if (!this.getPhone()) {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", { class: "mf-phonenumber mf-loading" }, "Loading...");
        }
        else {
            return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", { class: "mf-phonenumber" }, Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", { class: "visible-xs" }, Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("a", { href: "tel:" + this.getPhone(), onClick: function () { return _this.phoneClickedHandler(); }, title: "Call" }, this.getPhone())));
        }
    };
    Object.defineProperty(LocationPhone, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return LocationPhone;
}());
var MapCard = /** @class */ (function () {
    function MapCard(hostRef) {
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
    MapCard.prototype.getMapUrl = function () {
        return "https://api.mapbox.com/" + this.mapboxVersion + "/mapbox.streets/" + this.mapPins + "(" + this.longitude + "," + this.latitude + ")/" + this.longitude + "," + this.latitude + "," + this.zoom + "/" + this.width + "x" + this.height + ".png?access_token=" + this.apiKey;
    };
    MapCard.prototype.render = function () {
        return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("img", { src: this.getMapUrl(), alt: this.altText, property: "og:image" });
    };
    Object.defineProperty(MapCard, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MapCard;
}());



/***/ }),

/***/ "./node_modules/widgettest/dist/esm/legacy/my-component.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/widgettest/dist/esm/legacy/my-component.entry.js ***!
  \***********************************************************************/
/*! exports provided: my_component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony import */ var _widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgettest-d3a46060.js */ "./node_modules/widgettest/dist/esm/legacy/widgettest-d3a46060.js");

function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return Object(_widgettest_d3a46060_js__WEBPACK_IMPORTED_MODULE_0__["e"])("div", null, "Hello, Adrian! I'm ", this.getText());
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map