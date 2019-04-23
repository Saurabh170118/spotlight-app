(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upcomingcampaigns_upcomingcampaigns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcomingcampaigns/upcomingcampaigns.component */ "./src/app/upcomingcampaigns/upcomingcampaigns.component.ts");
/* harmony import */ var _livecampaigns_livecampaigns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./livecampaigns/livecampaigns.component */ "./src/app/livecampaigns/livecampaigns.component.ts");
/* harmony import */ var _pastcampaigns_pastcampaigns_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pastcampaigns/pastcampaigns.component */ "./src/app/pastcampaigns/pastcampaigns.component.ts");






var routes = [
    {
        path: 'upcomingcampaigns',
        component: _upcomingcampaigns_upcomingcampaigns_component__WEBPACK_IMPORTED_MODULE_3__["UPCOMINGCAMPAIGNSComponent"]
    },
    {
        path: 'livecampaigns',
        component: _livecampaigns_livecampaigns_component__WEBPACK_IMPORTED_MODULE_4__["LIVECAMPAIGNSComponent"]
    },
    {
        path: 'pastcampaigns',
        component: _pastcampaigns_pastcampaigns_component__WEBPACK_IMPORTED_MODULE_5__["PASTCAMPAIGNSComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_upcomingcampaigns_upcomingcampaigns_component__WEBPACK_IMPORTED_MODULE_3__["UPCOMINGCAMPAIGNSComponent"], _livecampaigns_livecampaigns_component__WEBPACK_IMPORTED_MODULE_4__["LIVECAMPAIGNSComponent"], _pastcampaigns_pastcampaigns_component__WEBPACK_IMPORTED_MODULE_5__["PASTCAMPAIGNSComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n    color: blue;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 1.8rem;\r\n}\r\n.breadcrumb-item {\r\n    color: blue;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 1.8rem;\r\n}\r\n.form-inline{\r\n    float: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxufVxyXG4uYnJlYWRjcnVtYi1pdGVtIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuLmZvcm0taW5saW5le1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\" style=\"background-color: #0071c2;\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"http://www.stickpng.com/assets/images/5847ea22cef1014c0b5e4833.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    <span style=\"color: #ffffff;\">Spotlight App</span> \n  </a>\n \n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown link\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n    </ul>\n  </div>\n</nav>\n\n<nav class=\"navbar navbar-light justify-content-center\" style=\"background-color: #ffffff;\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <p class=\"breadcrumb-item active\" aria-current=\"page\" href=\"#\" >Manage <span class=\"main\">Campaigns</span></p>\n  </a>\n  </nav>\n\n  <!-- Campaigns Listed -->\n  \n  <nav class=\"navbar navbar-expand-lg navbar-light  justify-content-center\">\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" routerLink=\"/upcomingcampaigns\" routerLinkActive=\"active\">UPCOMING CAMPAIGNS</button>\n    </form>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" routerLink=\"/livecampaigns\" routerLinkActive=\"active\">LIVE CAMPAIGNS</button>\n    </form>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" routerLink=\"/pastcampaigns\" routerLinkActive=\"active\">PAST CAMPAIGNS</button>\n    </form>\n</nav>\n\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'spotlight-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/livecampaigns/livecampaigns.component.css":
/*!***********************************************************!*\
  !*** ./src/app/livecampaigns/livecampaigns.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmVjYW1wYWlnbnMvbGl2ZWNhbXBhaWducy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/livecampaigns/livecampaigns.component.html":
/*!************************************************************!*\
  !*** ./src/app/livecampaigns/livecampaigns.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n      <tr>\n        <th class=\"card-header\">DATE</th>\n        <th class=\"card-header\">CAMPAIGNS</th>\n        <th class=\"card-header\">VIEW</th>\n        <th class=\"card-header\">ACTIONS</th>\n      </tr>\n  </thead>\n  <tbody>\n        <tr>\n          <td>2017-05-01 <br>\n            33 Days Ago</td>\n          <td>\n            <img src=\"https://image3.mouthshut.com/images/imagesp/925004501s.png\" height=\"50px\" width=\"50px\">\n            \n            Test Hdfc Bank </td>\n            \n          <td>\n            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY55NCv4995eo-arwQ7-RSPZSTdbhFrJcSfnf3J17BNFxsj07_nA\" height=\"35px\" width=\"35px\">\n                  <span style=\"color:rgb(116, 112, 112); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n              Enter: <input [value]='name' (input)='name=$event.target.value'/>\n              <br/>\n              You  Entered : {{name}}\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"https://files.prokerala.com/banking/images/bank-logo/axis-bank.png\" height=\"50px\" width=\"50px\">\n            \n              Test Axis Bank\n          </td>\n          <td>\n            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY55NCv4995eo-arwQ7-RSPZSTdbhFrJcSfnf3J17BNFxsj07_nA\" height=\"35px\" width=\"35px\">\n                  <span style=\"color:rgb(116, 112, 112); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n              <button (click)=\"onClickMe()\">Click me!</button>\n              {{clickMessage}}\n\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"http://www.logo-designer.co/wp-content/uploads/2017/04/2017-Design-Stack-new-logo-design-State-Bank-of-India.png\" height=\"35px\" width=\"35px\">\n            \n              Test SBI Bank\n          </td>\n          <td>\n            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY55NCv4995eo-arwQ7-RSPZSTdbhFrJcSfnf3J17BNFxsj07_nA\" height=\"35px\" width=\"35px\">\n                  <span style=\"color:rgb(116, 112, 112); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n              <button (click)=\"toggle()\" id=\"bt\">\n                  {{buttonName}}\n              </button>\n              \n              <ng-container *ngIf=\"show\">\n                  <div style=\"margin: 0 auto;text-align: left;\">\n                      <div>\n                          <label>Name:</label>\n                          <div><input id=\"tbname\" name=\"yourname\" /></div>\n                      </div>\n                      <div>\n                          <label>Email Address:</label>\n                          <div><input name=\"email\" id=\"email\" /></div></div>\n                      <div>\n                          <label>Additional Information (optional):</label>\n                          <div><textarea rows=\"5\" cols=\"46\"></textarea></div>\n                      </div>\n                  </div>\n              </ng-container>\n\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"https://getvectorlogo.com/wp-content/uploads/2018/12/icici-bank-vector-logo.png\" height=\"50px\" width=\"50px\">\n            \n              Test Icici Bank\n          </td>\n          <td>\n            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY55NCv4995eo-arwQ7-RSPZSTdbhFrJcSfnf3J17BNFxsj07_nA\" height=\"35px\" width=\"35px\">\n                  <span style=\"color:rgb(116, 112, 112); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n            \n\n          </td>\n        </tr> \n        <tr>\n          <td>2016-04-14 <br>\n            710 Days Ago</td>\n          <td colspan=\"1\">\n              <img src=\"https://fsr.nl/f/organization/image/7bdccd6e0f790154322d9b3875633e890aabcea929c9da7f90e658f35c6105e3/11053/resize/400x350/3ac140/image\" height=\"50px\" width=\"50px\">\n            \n              Test HSBC Bank\n          </td>\n          <td>\n            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY55NCv4995eo-arwQ7-RSPZSTdbhFrJcSfnf3J17BNFxsj07_nA\" height=\"35px\" width=\"35px\">\n             <span style=\"color:rgb(116, 112, 112); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n           \n\n          </td>\n        </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/livecampaigns/livecampaigns.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/livecampaigns/livecampaigns.component.ts ***!
  \**********************************************************/
/*! exports provided: LIVECAMPAIGNSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVECAMPAIGNSComponent", function() { return LIVECAMPAIGNSComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LIVECAMPAIGNSComponent = /** @class */ (function () {
    function LIVECAMPAIGNSComponent() {
        this.name = '';
        this.clickMessage = '';
        this.show = false;
        this.buttonName = 'Show';
    }
    LIVECAMPAIGNSComponent.prototype.onClickMe = function () {
        this.clickMessage = 'Welcome to Spotlight!';
    };
    LIVECAMPAIGNSComponent.prototype.ngOnInit = function () {
    };
    LIVECAMPAIGNSComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    LIVECAMPAIGNSComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-livecampaigns',
            template: __webpack_require__(/*! ./livecampaigns.component.html */ "./src/app/livecampaigns/livecampaigns.component.html"),
            styles: [__webpack_require__(/*! ./livecampaigns.component.css */ "./src/app/livecampaigns/livecampaigns.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LIVECAMPAIGNSComponent);
    return LIVECAMPAIGNSComponent;
}());



/***/ }),

/***/ "./src/app/pastcampaigns/pastcampaigns.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pastcampaigns/pastcampaigns.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3RjYW1wYWlnbnMvcGFzdGNhbXBhaWducy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pastcampaigns/pastcampaigns.component.html":
/*!************************************************************!*\
  !*** ./src/app/pastcampaigns/pastcampaigns.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n      <tr>\n        <th class=\"card-header\">DATE</th>\n        <th class=\"card-header\">CAMPAIGNS</th>\n        <th class=\"card-header\">VIEW</th>\n        <th class=\"card-header\">ACTIONS</th>\n      </tr>\n  </thead>\n  <tbody>\n        <tr>\n          <td>2017-05-01 <br>\n            33 Days Ago</td>\n          <td>\n            <img src=\"http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png\" height=\"50px\" width=\"50px\">\n            \n            Test Whatapp </td>\n            \n          <td>\n            <img src=\"https://cdn2.iconfinder.com/data/icons/Siena/256/currency_dollar%20red.png\" height=\"50px\" width=\"50px\">\n                  <span style=\"color:rgb(255, 123, 0); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n              Enter: <input [value]='name' (input)='name=$event.target.value'/>\n              <br/>\n              You  Entered : {{name}}\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"http://pngimg.com/uploads/instagram/instagram_PNG11.png\" height=\"50px\" width=\"50px\">\n            \n              Test Insta\n          </td>\n          <td>\n            <img src=\"https://cdn2.iconfinder.com/data/icons/Siena/256/currency_dollar%20red.png\" height=\"50px\" width=\"50px\">\n                  <span style=\"color:rgb(255, 123, 0); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n              <button (click)=\"onClickMe()\">Click me!</button>\n              {{clickMessage}}\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"https://www.freeiconspng.com/uploads/facebook-logo-2.png\" height=\"50px\" width=\"50px\">\n            \n              Test Facebook\n          </td>\n          <td>\n            <img src=\"https://cdn2.iconfinder.com/data/icons/Siena/256/currency_dollar%20red.png\" height=\"50px\" width=\"50px\">\n                  <span style=\"color:rgb(255, 123, 0); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n              <button (click)=\"toggle()\" id=\"bt\">\n                  {{buttonName}}\n              </button>\n              \n              <ng-container *ngIf=\"show\">\n                  <div style=\"margin: 0 auto;text-align: left;\">\n                      <div>\n                          <label>Name:</label>\n                          <div><input id=\"tbname\" name=\"yourname\" /></div>\n                      </div>\n                      <div>\n                          <label>Email Address:</label>\n                          <div><input name=\"email\" id=\"email\" /></div></div>\n                      <div>\n                          <label>Additional Information (optional):</label>\n                          <div><textarea rows=\"5\" cols=\"46\"></textarea></div>\n                      </div>\n                  </div>\n              </ng-container>\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"http://www.logospng.com/images/8/ic-244ne-amazon-gratuit-de-most-usable-logos-icons-8911.png\" height=\"50px\" width=\"50px\">\n            \n              Test Amazon\n          </td>\n          <td>\n            <img src=\"https://cdn2.iconfinder.com/data/icons/Siena/256/currency_dollar%20red.png\" height=\"50px\" width=\"50px\">\n                  <span style=\"color:rgb(255, 123, 0); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n              \n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-14 <br>\n            710 Days Ago</td>\n          <td colspan=\"1\">\n              <img src=\"https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/08120224/Walmart-Logo-PNG-Transparent-Image.jpg\" height=\"50px\" width=\"50px\">\n            \n              Test Walmart\n          </td>\n          <td>\n            <img src=\"https://cdn2.iconfinder.com/data/icons/Siena/256/currency_dollar%20red.png\" height=\"50px\" width=\"50px\">\n                  <span style=\"color:rgb(255, 123, 0); font:bolder\">View Pricing</span>\n          </td>\n          <td>\n             \n          </td>\n        </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/pastcampaigns/pastcampaigns.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pastcampaigns/pastcampaigns.component.ts ***!
  \**********************************************************/
/*! exports provided: PASTCAMPAIGNSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASTCAMPAIGNSComponent", function() { return PASTCAMPAIGNSComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PASTCAMPAIGNSComponent = /** @class */ (function () {
    function PASTCAMPAIGNSComponent() {
        this.name = '';
        this.clickMessage = '';
        this.show = false;
        this.buttonName = 'Show';
    }
    PASTCAMPAIGNSComponent.prototype.onClickMe = function () {
        this.clickMessage = 'Welcome to Spotlight!';
    };
    PASTCAMPAIGNSComponent.prototype.ngOnInit = function () {
    };
    PASTCAMPAIGNSComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    PASTCAMPAIGNSComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pastcampaigns',
            template: __webpack_require__(/*! ./pastcampaigns.component.html */ "./src/app/pastcampaigns/pastcampaigns.component.html"),
            styles: [__webpack_require__(/*! ./pastcampaigns.component.css */ "./src/app/pastcampaigns/pastcampaigns.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PASTCAMPAIGNSComponent);
    return PASTCAMPAIGNSComponent;
}());



/***/ }),

/***/ "./src/app/upcomingcampaigns/upcomingcampaigns.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/upcomingcampaigns/upcomingcampaigns.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwY29taW5nY2FtcGFpZ25zL3VwY29taW5nY2FtcGFpZ25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/upcomingcampaigns/upcomingcampaigns.component.html":
/*!********************************************************************!*\
  !*** ./src/app/upcomingcampaigns/upcomingcampaigns.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n      <tr>\n        <th class=\"card-header\">DATE</th>\n        <th class=\"card-header\">CAMPAIGNS</th>\n        <th class=\"card-header\">VIEW</th>\n        <th class=\"card-header\">ACTIONS</th>\n      </tr>\n  </thead>\n  <tbody>\n        <tr>\n          <td>2017-05-01 <br>\n            33 Days Ago</td>\n          <td>\n            <img src=\"http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png\" height=\"50px\" width=\"50px\">\n            \n            Test Whatapp </td>\n            \n          <td>\n              <img src=\"http://pngimg.com/uploads/dollar_sign/dollar_sign_PNG10.png\" height=\"50px\" width=\"50px\">\n              <span style=\"color:blue; font:bolder\">View Pricing</span>\n          </td>\n          <td>\n              Enter: <input [value]='name' (input)='name=$event.target.value'/>\n              <br/>\n              You  Entered : {{name}}\n            \n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"http://pngimg.com/uploads/instagram/instagram_PNG11.png\" height=\"50px\" width=\"50px\">\n            \n              Test Insta\n          </td>\n          <td>\n              <img src=\"http://pngimg.com/uploads/dollar_sign/dollar_sign_PNG10.png\" height=\"50px\" width=\"50px\">\n              <span style=\"color:blue; font:bolder\">View Pricing</span>\n            </td>\n          <td>\n              <button (click)=\"onClickMe()\">Click me!</button>\n                  {{clickMessage}}\n\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"https://www.freeiconspng.com/uploads/facebook-logo-2.png\" height=\"50px\" width=\"50px\">\n            \n              Test Facebook\n          </td>\n          <td>\n              <img src=\"http://pngimg.com/uploads/dollar_sign/dollar_sign_PNG10.png\" height=\"50px\" width=\"50px\">\n              <span style=\"color:blue; font:bolder\">View Pricing</span>\n            </td>\n          <td>\n              <button (click)=\"toggle()\" id=\"bt\">\n                  {{buttonName}}\n              </button>\n              \n              <ng-container *ngIf=\"show\">\n                  <div style=\"margin: 0 auto;text-align: left;\">\n                      <div>\n                          <label>Name:</label>\n                          <div><input id=\"tbname\" name=\"yourname\" /></div>\n                      </div>\n                      <div>\n                          <label>Email Address:</label>\n                          <div><input name=\"email\" id=\"email\" /></div></div>\n                      <div>\n                          <label>Additional Information (optional):</label>\n                          <div><textarea rows=\"5\" cols=\"46\"></textarea></div>\n                      </div>\n                  </div>\n              </ng-container>\n\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-17 <br>\n            710 Days Ago</td>\n          <td>\n              <img src=\"http://www.logospng.com/images/8/ic-244ne-amazon-gratuit-de-most-usable-logos-icons-8911.png\" height=\"50px\" width=\"50px\">\n            \n              Test Amazon\n          </td>\n          <td>\n              <img src=\"http://pngimg.com/uploads/dollar_sign/dollar_sign_PNG10.png\" height=\"50px\" width=\"50px\">\n              <span style=\"color:blue; font:bolder\">View Pricing</span>\n            </td>\n          <td>\n              \n\n          </td>\n        </tr>\n        <tr>\n          <td>2016-04-14 <br>\n            710 Days Ago</td>\n          <td colspan=\"1\">\n              <img src=\"https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/08120224/Walmart-Logo-PNG-Transparent-Image.jpg\" height=\"50px\" width=\"50px\">\n            \n              Test Walmart\n          </td>\n          <td>\n              <img src=\"http://pngimg.com/uploads/dollar_sign/dollar_sign_PNG10.png\" height=\"50px\" width=\"50px\">\n             <span style=\"color:blue; font:bolder\">View Pricing</span>\n            </td>\n          <td>\n              \n\n          </td>\n        </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/upcomingcampaigns/upcomingcampaigns.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/upcomingcampaigns/upcomingcampaigns.component.ts ***!
  \******************************************************************/
/*! exports provided: UPCOMINGCAMPAIGNSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCOMINGCAMPAIGNSComponent", function() { return UPCOMINGCAMPAIGNSComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UPCOMINGCAMPAIGNSComponent = /** @class */ (function () {
    function UPCOMINGCAMPAIGNSComponent() {
        this.name = '';
        this.clickMessage = '';
        this.show = false;
        this.buttonName = 'Show';
    }
    UPCOMINGCAMPAIGNSComponent.prototype.onClickMe = function () {
        this.clickMessage = 'Welcome to Spotlight!';
    };
    UPCOMINGCAMPAIGNSComponent.prototype.ngOnInit = function () {
    };
    UPCOMINGCAMPAIGNSComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    UPCOMINGCAMPAIGNSComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upcomingcampaigns',
            template: __webpack_require__(/*! ./upcomingcampaigns.component.html */ "./src/app/upcomingcampaigns/upcomingcampaigns.component.html"),
            styles: [__webpack_require__(/*! ./upcomingcampaigns.component.css */ "./src/app/upcomingcampaigns/upcomingcampaigns.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UPCOMINGCAMPAIGNSComponent);
    return UPCOMINGCAMPAIGNSComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Saurabh\Angular\app-test\spotlight-app\spotlight-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map