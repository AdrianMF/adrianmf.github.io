(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"toolbar\"></div>\n<div class=\"gridster-wrap\">\n  <gridster [options]=\"options\">\n    <gridster-item [item]=\"{cols: 2, rows: 1, y: 0, x: 0}\">\n      <location-header [attr.location-name]=\"mfLocation.store_info.name\"></location-header>\n    </gridster-item>\n    <gridster-item [item]=\"{cols: 2, rows: 1, y: 0, x: 2}\">\n      <location-address [attr.location-address]=\"mfLocation.store_info.address\"\n                        [attr.location-locality]=\"mfLocation.store_info.locality\"\n                        [attr.location-region]=\"mfLocation.store_info.region\"\n                        [attr.location-zip]=\"mfLocation.store_info.postcode\"\n                        [attr.location-url]=\"mfLocation.llp_url\"\n                        [attr.use-ga]=true></location-address>\n    </gridster-item>\n    <gridster-item [item]=\"{cols: 2, rows: 1, y: 1, x: 0}\">\n      <location-phone [attr.location-id]=\"mfLocation.momentfeed_venue_id\"\n                      [attr.location-phone]=\"mfLocation.store_info.phone\"\n                      [attr.location-url]=\"mfLocation.llp_url\"\n                      [attr.use-ga]=true\n                      (mfPhoneClicked)=\"onPhoneClicked($event)\"></location-phone>\n    </gridster-item>\n    <gridster-item [item]=\"{cols: 2, rows: 1, y: 1, x: 2}\">\n      <map-card [attr.longitude]=\"mfLocation.store_info.longitude\"\n                [attr.latitude]=\"mfLocation.store_info.latitude\"\n                [attr.map-pins]=\"'pin-l-1+bc1448'\"\n                [attr.api-key]=\"'pk.eyJ1IjoibW9tZW50ZmVlZCIsImEiOiJPS21SYV80In0.rZ-uswLQiEx1hkfcj5fVhw'\"\n                [attr.alt-text]=\"mfLocation.store_info.name\"></map-card>\n    </gridster-item>\n  </gridster>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/widgettest/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/widgettest/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.(system|cjs)\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./legacy/location-address_4.entry.js": [
		"./node_modules/widgettest/dist/esm/legacy/location-address_4.entry.js",
		0,
		"common"
	],
	"./legacy/my-component.entry.js": [
		"./node_modules/widgettest/dist/esm/legacy/my-component.entry.js",
		0,
		"common"
	],
	"./location-address_4.entry.js": [
		"./node_modules/widgettest/dist/esm/location-address_4.entry.js",
		1
	],
	"./my-component.entry.js": [
		"./node_modules/widgettest/dist/esm/my-component.entry.js",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/widgettest/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ "./src/app/location.service.ts");



let AppComponent = class AppComponent {
    constructor(locationService) {
        this.locationService = locationService;
        this.mfLocation = new _location_service__WEBPACK_IMPORTED_MODULE_2__["MfLocation"]();
        this.title = 'angular-widget';
        this.options = {
            draggable: {
                enabled: true
            },
            pushItems: true,
            resizable: {
                enabled: true
            }
        };
    }
    ngOnInit() {
        this.getLocations();
    }
    getLocations() {
        this.locationService.getLocation().subscribe((data) => { this.mfLocation = data[0]; }, err => console.error(err), () => console.log('done loading locations', this.mfLocation));
    }
    onPhoneClicked(e) {
        console.log('Angular: We heard a click outside', e);
    }
};
AppComponent.ctorParameters = () => [
    { type: _location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location.service */ "./src/app/location.service.ts");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm2015/angular-gridster2.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_gridster2__WEBPACK_IMPORTED_MODULE_6__["GridsterModule"]
        ],
        providers: [_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/location.service.ts":
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/*! exports provided: StoreInfo, MfLocation, LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreInfo", function() { return StoreInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfLocation", function() { return MfLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class StoreInfo {
}
class MfLocation {
    constructor() {
        this.store_info = new StoreInfo();
    }
}
let LocationService = class LocationService {
    constructor(http) {
        this.http = http;
    }
    // Uses http.get() to load data from a single API endpoint
    getLocation() {
        return this.http.get('https://momentfeed-prod.apigee.net/api/llp.json?address=4960+Telephone+Rd.,+&auth_token=PQUBOCBNLKOUIYUP&locality=Ventura&multi_account=false&pageSize=30&region=CA');
    }
};
LocationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LocationService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var widgettest_dist_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgettest/dist/loader */ "./node_modules/widgettest/dist/loader/index.es2017.mjs");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));
console.log(widgettest_dist_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"]);
Object(widgettest_dist_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amummey/Documents/MomentFeed/mfeed_stencil/angular-widget/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map