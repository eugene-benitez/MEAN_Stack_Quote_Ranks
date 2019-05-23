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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_components_view_author_view_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/components/view-author/view-author.component */ "./src/app/common/components/view-author/view-author.component.ts");
/* harmony import */ var _common_components_create_author_create_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/components/create-author/create-author.component */ "./src/app/common/components/create-author/create-author.component.ts");
/* harmony import */ var _common_components_show_all_author_show_all_author_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/components/show-all-author/show-all-author.component */ "./src/app/common/components/show-all-author/show-all-author.component.ts");
/* harmony import */ var _common_components_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/components/edit-author/edit-author.component */ "./src/app/common/components/edit-author/edit-author.component.ts");
/* harmony import */ var _common_components_create_quote_create_quote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/components/create-quote/create-quote.component */ "./src/app/common/components/create-quote/create-quote.component.ts");








var routes = [
    { path: 'show-all-author', component: _common_components_show_all_author_show_all_author_component__WEBPACK_IMPORTED_MODULE_5__["ShowAllAuthorComponent"] },
    { path: 'view-author/:id', component: _common_components_view_author_view_author_component__WEBPACK_IMPORTED_MODULE_3__["ViewAuthorComponent"] },
    { path: 'edit-author/:id', component: _common_components_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_6__["EditAuthorComponent"] },
    { path: 'create-author', component: _common_components_create_author_create_author_component__WEBPACK_IMPORTED_MODULE_4__["CreateAuthorComponent"] },
    { path: 'create-quote/:id', component: _common_components_create_quote_create_quote_component__WEBPACK_IMPORTED_MODULE_7__["CreateQuoteComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'show-all-author' },
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



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"100\" alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n    [routerLink]=\"['']\">\n  <br>\n  <button class=\"btn btn-success center-block\" [routerLink]=\"['']\">Home</button>\n</div>\n\n<router-outlet></router-outlet>"

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
        this.title = 'Quote Ranks';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/services/http.service */ "./src/app/common/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_components_show_all_author_show_all_author_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/components/show-all-author/show-all-author.component */ "./src/app/common/components/show-all-author/show-all-author.component.ts");
/* harmony import */ var _common_components_view_author_view_author_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/components/view-author/view-author.component */ "./src/app/common/components/view-author/view-author.component.ts");
/* harmony import */ var _common_components_create_author_create_author_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/components/create-author/create-author.component */ "./src/app/common/components/create-author/create-author.component.ts");
/* harmony import */ var _common_components_create_quote_create_quote_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/components/create-quote/create-quote.component */ "./src/app/common/components/create-quote/create-quote.component.ts");
/* harmony import */ var _common_components_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/components/edit-author/edit-author.component */ "./src/app/common/components/edit-author/edit-author.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _common_components_show_all_author_show_all_author_component__WEBPACK_IMPORTED_MODULE_8__["ShowAllAuthorComponent"], _common_components_view_author_view_author_component__WEBPACK_IMPORTED_MODULE_9__["ViewAuthorComponent"], _common_components_create_author_create_author_component__WEBPACK_IMPORTED_MODULE_10__["CreateAuthorComponent"], _common_components_create_quote_create_quote_component__WEBPACK_IMPORTED_MODULE_11__["CreateQuoteComponent"], _common_components_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_12__["EditAuthorComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
            providers: [_common_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/components/create-author/create-author.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/common/components/create-author/create-author.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2NyZWF0ZS1hdXRob3IvY3JlYXRlLWF1dGhvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/components/create-author/create-author.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/common/components/create-author/create-author.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n    <div class=\"col-6 text-center\">\n      <hr>\n      <br><br>\n      <h5>Add a new quotable author:</h5>\n      <br>\n      <form (submit)=\"onCreate()\">\n        <h2 *ngIf=\"authorError\">{{authorError}}</h2>\n        <label for=\"\">Name: </label>\n        <input required minlength=\"3\" type=\"text\" class=\"form-control\" name=\"newAuthor.name\"\n          [(ngModel)]=\"newAuthor.name\" aria-describedby=\"helpId\" #name=\"ngModel\">\n        <p>{{ name.errors | json }}\n          {{ name.valid | json }}</p>\n        <br>\n        <button class=\"btn btn-danger\" [routerLink]=\"['']\">Cancel</button>\n        <a><button class=\" float-right btn btn-success\" type=\"submit\">Create\n            Author!</button></a>\n      </form>\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/components/create-author/create-author.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/create-author/create-author.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAuthorComponent", function() { return CreateAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");




var CreateAuthorComponent = /** @class */ (function () {
    function CreateAuthorComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.newAuthor = {
            name: '',
        };
    }
    CreateAuthorComponent.prototype.ngOnInit = function () {
    };
    CreateAuthorComponent.prototype.onCreate = function () {
        var _this = this;
        this.http.addAuthor(this.newAuthor)
            .subscribe(function (data) {
            if (data['errors']) {
                _this.authorError = data['errors']['name']['message'];
            }
            else {
                _this.router.navigateByUrl('');
            }
        });
    };
    CreateAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-author',
            template: __webpack_require__(/*! ./create-author.component.html */ "./src/app/common/components/create-author/create-author.component.html"),
            styles: [__webpack_require__(/*! ./create-author.component.css */ "./src/app/common/components/create-author/create-author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], CreateAuthorComponent);
    return CreateAuthorComponent;
}());



/***/ }),

/***/ "./src/app/common/components/create-quote/create-quote.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/common/components/create-quote/create-quote.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2NyZWF0ZS1xdW90ZS9jcmVhdGUtcXVvdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/common/components/create-quote/create-quote.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/create-quote/create-quote.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n    <div class=\"col-6 text-center\">\n      <hr>\n      <br>\n      <br>\n      <h5>Add a new quote to this Author:</h5>\n      <br>\n      <h5>{{thisAuthor.name}}</h5>\n      <form (submit)=\"onCreateQuote()\">\n        <label for=\"\">Quote: </label>\n        <input required minlength=\"3\" type=\"text\" class=\"form-control\" name=\"newQuote.quote\"\n          [(ngModel)]=\"newQuote.quote\" aria-describedby=\"helpId\" #name=\"ngModel\">\n        <br>\n        <button class=\"btn btn-danger\" [routerLink]=\"['']\">Cancel</button>\n        <button class=\" float-right btn btn-success\" type=\"submit\">Add Quote!</button>\n      </form>\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/components/create-quote/create-quote.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/create-quote/create-quote.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuoteComponent", function() { return CreateQuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateQuoteComponent = /** @class */ (function () {
    function CreateQuoteComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.thisAuthor = {
            _id: '',
            name: '',
            quotes: []
        };
        this.newQuote = {
            quote: '',
        };
    }
    CreateQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.http.getAuthor(params.id)
                .subscribe(function (data) { return _this.thisAuthor = data; });
        });
    };
    CreateQuoteComponent.prototype.onCreateQuote = function () {
        var _this = this;
        this.http.createQuote(this.thisAuthor._id, this.newQuote)
            .subscribe(function (data) {
            _this.return = data;
            _this.router.navigateByUrl('/view-author/' + _this.thisAuthor._id);
        });
    };
    CreateQuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-quote',
            template: __webpack_require__(/*! ./create-quote.component.html */ "./src/app/common/components/create-quote/create-quote.component.html"),
            styles: [__webpack_require__(/*! ./create-quote.component.css */ "./src/app/common/components/create-quote/create-quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateQuoteComponent);
    return CreateQuoteComponent;
}());



/***/ }),

/***/ "./src/app/common/components/edit-author/edit-author.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/common/components/edit-author/edit-author.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2VkaXQtYXV0aG9yL2VkaXQtYXV0aG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/components/edit-author/edit-author.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/edit-author/edit-author.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n\n<hr>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n    <div class=\"col-6 text-center\">\n      <h1>{{this.thisAuthor.name}}</h1>\n      <br>\n      <h2>{{authorError}}</h2>\n      <form (submit)=\"onEdit()\">\n        <label for=\"\">\n          <h2>Edit This Author's Name:</h2>\n        </label>\n        <input required minlength=\"3\" type=\"text\" class=\"form-control\" name=\"editAuthor.name\"\n          [(ngModel)]=\"editAuthor.name\" id=\"\" aria-describedby=\"helpId\" placeholder=\"{{thisAuthor.name}}\"\n          #name=\"ngModel\">\n        <p>{{ name.errors | json }}\n          {{ name.valid | json }}</p>\n        <br>\n        <button class=\"btn btn-danger\" [routerLink]=\"['']\">Cancel</button>\n        <button class=\"float-right btn btn-danger\" type=\"submit\">Edit!</button>\n      </form>\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/components/edit-author/edit-author.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/components/edit-author/edit-author.component.ts ***!
  \************************************************************************/
/*! exports provided: EditAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAuthorComponent", function() { return EditAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditAuthorComponent = /** @class */ (function () {
    function EditAuthorComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.thisAuthor = {
            _id: '',
            name: '',
            quotes: [],
        };
        this.editAuthor = {
            name: '',
        };
        this.authorError = "";
    }
    EditAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.http.getAuthor(params.id)
                .subscribe(function (data) { return _this.thisAuthor = data; });
        });
    };
    EditAuthorComponent.prototype.onEdit = function () {
        var _this = this;
        this.http.updateAuthor(this.thisAuthor._id, this.editAuthor)
            .subscribe(function (data) {
            if (data['errors']) {
                _this.authorError = data['errors']['name']['message'];
            }
            else {
                _this.router.navigateByUrl('show-all-author');
            }
        });
    };
    EditAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-author',
            template: __webpack_require__(/*! ./edit-author.component.html */ "./src/app/common/components/edit-author/edit-author.component.html"),
            styles: [__webpack_require__(/*! ./edit-author.component.css */ "./src/app/common/components/edit-author/edit-author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditAuthorComponent);
    return EditAuthorComponent;
}());



/***/ }),

/***/ "./src/app/common/components/show-all-author/show-all-author.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/common/components/show-all-author/show-all-author.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3Nob3ctYWxsLWF1dGhvci9zaG93LWFsbC1hdXRob3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/common/components/show-all-author/show-all-author.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/common/components/show-all-author/show-all-author.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n    <div class=\"col-6 text-center\">\n      <hr>\n      <button class=\"btn btn-success center-block\" [routerLink]=\"['/create-author']\">Add a quotable author</button>\n      <br><br>\n      <h3>We have quotes by:</h3>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Author</th>\n            <th>Actions Available</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let a of AllAuthors\">\n            <td>{{a.name}}</td>\n            <td><button class=\"btn btn-danger\" (click)=\"deleteObjectByIdButton(a._id)\">Delete</button>\n              <button class=\"btn btn-success\" [routerLink]=\"['/view-author/', a._id]\">View Quotes</button>\n              <br><button class=\"btn btn-primary\" [routerLink]=\"['/edit-author/', a._id]\">Edit</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/components/show-all-author/show-all-author.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common/components/show-all-author/show-all-author.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShowAllAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllAuthorComponent", function() { return ShowAllAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ShowAllAuthorComponent = /** @class */ (function () {
    function ShowAllAuthorComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.AllAuthors = [];
        this.delAuthor = {
            _id: '',
            name: '',
            quotes: [],
        };
    }
    ShowAllAuthorComponent.prototype.ngOnInit = function () {
        this.refreshAll();
    };
    ShowAllAuthorComponent.prototype.refreshAll = function () {
        var _this = this;
        this.http.getAuthors()
            .subscribe(function (data) { return _this.AllAuthors = data; });
    };
    ShowAllAuthorComponent.prototype.deleteObjectByIdButton = function (str) {
        var _this = this;
        console.log("Delete event is working with string param: " + str);
        this.http.deleteAuthor(str)
            .subscribe(function (data) {
            _this.delAuthor = data;
            _this.refreshAll();
        });
    };
    ShowAllAuthorComponent.prototype.searchAuthorByIdButton = function (author_id) {
        this.router.navigate(['/view-author/', author_id]);
    };
    ShowAllAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-all-author',
            template: __webpack_require__(/*! ./show-all-author.component.html */ "./src/app/common/components/show-all-author/show-all-author.component.html"),
            styles: [__webpack_require__(/*! ./show-all-author.component.css */ "./src/app/common/components/show-all-author/show-all-author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShowAllAuthorComponent);
    return ShowAllAuthorComponent;
}());



/***/ }),

/***/ "./src/app/common/components/view-author/view-author.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/common/components/view-author/view-author.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3ZpZXctYXV0aG9yL3ZpZXctYXV0aG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/components/view-author/view-author.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/view-author/view-author.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n    <div class=\"col-6 text-center\">\n      <hr>\n      <button class=\"btn btn-success center-block\" [routerLink]=\"['/create-quote/', thisAuthor._id]\">Add a\n        quote</button>\n      <br><br>\n      <h3>Quotes by {{thisAuthor.name}}:</h3>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Quote</th>\n            <th>Votes</th>\n            <th>Actions Available</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let a of thisAuthor.quotes\">\n            <td>{{a.quote}}</td>\n            <td>{{a.votes}}</td>\n            <td>\n              <button class=\"btn btn-primary\" (click)=\"voteUpButton(thisAuthor._id, a._id)\">\n                Vote Up\n              </button>\n              <button class=\"btn btn-danger\" (click)=\"removeQuoteButton(thisAuthor._id, a._id)\">\n                Delete\n              </button>\n              <button class=\"btn btn-success\" (click)=\"voteDownButton(thisAuthor._id, a._id)\">\n                Vote Down\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/components/view-author/view-author.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/components/view-author/view-author.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAuthorComponent", function() { return ViewAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewAuthorComponent = /** @class */ (function () {
    function ViewAuthorComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.thisAuthor = {
            _id: '',
            name: '',
            quotes: []
        };
        this.allQuotes = [];
    }
    ViewAuthorComponent.prototype.ngOnInit = function () {
        this.loadAuthor();
    };
    ViewAuthorComponent.prototype.loadAuthor = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.http.getAuthor(params.id)
                .subscribe(function (data) { return _this.thisAuthor = data; });
        });
    };
    ViewAuthorComponent.prototype.voteUpButton = function (authorID, quoteID) {
        var _this = this;
        this.http.increaseVote(authorID, quoteID)
            .subscribe(function (data) {
            _this.thisAuthor = data;
            _this.loadAuthor();
        });
    };
    ViewAuthorComponent.prototype.voteDownButton = function (authorID, quoteID) {
        var _this = this;
        this.http.decreaseVote(authorID, quoteID)
            .subscribe(function (data) {
            _this.thisAuthor = data;
            _this.loadAuthor();
        });
    };
    ViewAuthorComponent.prototype.removeQuoteButton = function (authorID, quoteID) {
        var _this = this;
        this.http.removeQuote(authorID, quoteID)
            .subscribe(function (data) {
            _this.return = data;
            _this.loadAuthor();
        });
    };
    ViewAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-author',
            template: __webpack_require__(/*! ./view-author.component.html */ "./src/app/common/components/view-author/view-author.component.html"),
            styles: [__webpack_require__(/*! ./view-author.component.css */ "./src/app/common/components/view-author/view-author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewAuthorComponent);
    return ViewAuthorComponent;
}());



/***/ }),

/***/ "./src/app/common/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        var _this = this;
        this._http = _http;
        this.getAuthors = function () { return _this._http.get('/api/objects'); };
        this.getAuthor = function (id) { return _this._http.get('api/' + id); };
        this.updateAuthor = function (id, data) { return _this._http.put('api/objects/' + id, data); };
        this.deleteAuthor = function (id) { return _this._http.delete('api/objects/' + id); };
        this.addAuthor = function (data) { return _this._http.post('api/objects/', data); };
        this.increaseVote = function (authorID, quoteID) { return _this._http.get('/api/increaseVotes/' + authorID + "/" + quoteID); };
        this.decreaseVote = function (authorID, quoteID) { return _this._http.get('/api/decreaseVotes/' + authorID + "/" + quoteID); };
        this.removeQuote = function (authorID, quoteID) { return _this._http.get('/api/removeQuote/' + authorID + "/" + quoteID); };
        this.createQuote = function (authorID, data) {
            return _this._http.put('/api/createQuote/' + authorID, data);
        };
    }
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = __webpack_require__(/*! /Users/eugenebenitez/Desktop/MEAN_Stack/Angular/quote_ranks/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map