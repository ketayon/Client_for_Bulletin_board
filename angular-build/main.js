(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <h1>Доска объявлений</h1>\n</header>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bb-detail/bb-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bb-detail/bb-detail.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"bb\">\n    <div class=\"image\"><img src=\"{{bb.image}}\"></div>\n    <div class=\"others\">\n        <h2>{{bb.title}}</h2>\n        <p>{{bb.content}}</p>\n        <p class=\"price\">Цена: {{bb.price|currency:'UAH'}}</p>\n        <p>{{bb.contacts}}</p>\n        <p class=\"date\">Объявление оставлено {{bb.created_at|date:'medium'}}</p>\n    </div>\n</ng-container>\n<h3>Новый комментарий</h3>\n<form *ngIf=\"bb\" (ngSubmit)=\"submitComment()\">\n    <p>Имя: <input [(ngModel)]=\"author\" name=\"author\" required></p>\n    <p>Пароль: <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" required></p>\n    <p>Содержание:<br><textarea [(ngModel)]=\"content\" name=\"content\" required></textarea></p>\n    <p><input type=\"submit\" value=\"Добавить\"></p>\n</form>\n<div class=\"comment\" *ngFor=\"let comment of comments\">\n    <h4>{{comment.author}}</h4>\n    <p>{{comment.content}}</p>\n    <p class=\"date\">Комментарий оставлен {{comment.created_at|date:'medium'}}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bb-list/bb-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bb-list/bb-list.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Последние 10 объявлений</h2>\n<div *ngFor=\"let bb of bbs\">\n    <h3><a [routerLink]=\"[bb.id]\">{{bb.title}}</a></h3>\n    <p>{{bb.content}}</p>\n    <p class=\"price\">Цена: {{bb.price|currency:'UAH'}}</p>\n    <p class=\"date\">Объявление оставлено {{bb.created_at|date:'medium'}}</p>\n</div>\n");

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bb_list_bb_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bb-list/bb-list.component */ "./src/app/bb-list/bb-list.component.ts");
/* harmony import */ var _bb_detail_bb_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bb-detail/bb-detail.component */ "./src/app/bb-detail/bb-detail.component.ts");
/* harmony import */ var _bb_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bb.service */ "./src/app/bb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5___default.a, 'ru');
var appRoutes = [
    { path: ':pk', component: _bb_detail_bb_detail_component__WEBPACK_IMPORTED_MODULE_9__["BbDetailComponent"] },
    { path: '', component: _bb_list_bb_list_component__WEBPACK_IMPORTED_MODULE_8__["BbListComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _bb_list_bb_list_component__WEBPACK_IMPORTED_MODULE_8__["BbListComponent"],
                _bb_detail_bb_detail_component__WEBPACK_IMPORTED_MODULE_9__["BbDetailComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'ru' },
                _bb_service__WEBPACK_IMPORTED_MODULE_10__["BbService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bb-detail/bb-detail.component.css":
/*!***************************************************!*\
  !*** ./src/app/bb-detail/bb-detail.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.image {\r\n    float: left;\r\n}\r\ndiv.image img {\r\n    width: 400px;\r\n}\r\ndiv.others {\r\n    margin-left: 420px;\r\n}\r\np.price {\r\n    font-size: larger;\r\n    font-weight: bold;\r\n    text-align: right;\r\n}\r\np.date {\r\n    font-style: italic;\r\n    text-align: right;\r\n}\r\nh3 {\r\n    clear: both;\r\n}\r\ndiv.comment {\r\n    margin: 10px 0px;\r\n    padding: 0px 10px;\r\n    border: grey thin solid;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmItZGV0YWlsL2JiLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYmItZGV0YWlsL2JiLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmltYWdlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmRpdi5pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcbmRpdi5vdGhlcnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQyMHB4O1xyXG59XHJcbnAucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbnAuZGF0ZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5oMyB7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5kaXYuY29tbWVudCB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBib3JkZXI6IGdyZXkgdGhpbiBzb2xpZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/bb-detail/bb-detail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bb-detail/bb-detail.component.ts ***!
  \**************************************************/
/*! exports provided: BbDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbDetailComponent", function() { return BbDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bb.service */ "./src/app/bb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BbDetailComponent = /** @class */ (function () {
    function BbDetailComponent(bbservice, ar) {
        this.bbservice = bbservice;
        this.ar = ar;
        this.author = '';
        this.password = '';
        this.content = '';
    }
    BbDetailComponent.prototype.getComments = function () {
        var _this = this;
        this.bbservice.getComments(this.bb.id).subscribe(function (comments) { _this.comments = comments; });
    };
    BbDetailComponent.prototype.submitComment = function () {
        var _this = this;
        this.bbservice.addComment(this.bb.id, this.author, this.password, this.content)
            .subscribe(function (comment) {
            if (comment) {
                _this.content = '';
                _this.getComments();
            }
        });
    };
    BbDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var pk = this.ar.snapshot.params.pk;
        this.bbservice.getBb(pk).subscribe(function (bb) {
            _this.bb = bb;
            _this.getComments();
        });
    };
    BbDetailComponent.ctorParameters = function () { return [
        { type: _bb_service__WEBPACK_IMPORTED_MODULE_2__["BbService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    BbDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bb-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bb-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bb-detail/bb-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bb-detail.component.css */ "./src/app/bb-detail/bb-detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [_bb_service__WEBPACK_IMPORTED_MODULE_2__["BbService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BbDetailComponent);
    return BbDetailComponent;
}());



/***/ }),

/***/ "./src/app/bb-list/bb-list.component.css":
/*!***********************************************!*\
  !*** ./src/app/bb-list/bb-list.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    margin: 10px 0px;\r\n    padding: 0px 10px;\r\n    border: grey thin solid;\r\n}\r\ndiv p.price {\r\n    font-size: larger;\r\n    font-weight: bold;\r\n    text-align: right;\r\n}\r\ndiv p.date {\r\n    font-style: italic;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmItbGlzdC9iYi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9iYi1saXN0L2JiLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBib3JkZXI6IGdyZXkgdGhpbiBzb2xpZDtcclxufVxyXG5kaXYgcC5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuZGl2IHAuZGF0ZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/bb-list/bb-list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bb-list/bb-list.component.ts ***!
  \**********************************************/
/*! exports provided: BbListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbListComponent", function() { return BbListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bb.service */ "./src/app/bb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var BbListComponent = /** @class */ (function () {
    function BbListComponent(bbservice) {
        this.bbservice = bbservice;
    }
    BbListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bbservice.getBbs().subscribe(function (bbs) { _this.bbs = bbs; });
    };
    BbListComponent.ctorParameters = function () { return [
        { type: _bb_service__WEBPACK_IMPORTED_MODULE_1__["BbService"] }
    ]; };
    BbListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bb-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bb-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bb-list/bb-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bb-list.component.css */ "./src/app/bb-list/bb-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_bb_service__WEBPACK_IMPORTED_MODULE_1__["BbService"]])
    ], BbListComponent);
    return BbListComponent;
}());



/***/ }),

/***/ "./src/app/bb.service.ts":
/*!*******************************!*\
  !*** ./src/app/bb.service.ts ***!
  \*******************************/
/*! exports provided: BbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbService", function() { return BbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BbService = /** @class */ (function () {
    function BbService(http) {
        this.http = http;
        this.urlPrefix = 'https://bboard-ketayon.herokuapp.com';
    }
    BbService.prototype.getBbs = function () {
        return this.http.get(this.urlPrefix + "/api/bbs/");
    };
    BbService.prototype.getBb = function (pk) {
        return this.http.get(this.urlPrefix + "/api/bbs/" + pk + "/");
    };
    BbService.prototype.getComments = function (pk) {
        return this.http.get(this.urlPrefix + "/api/bbs/" + pk + "/comments/");
    };
    BbService.prototype.handleError = function () {
        return function (error) {
            window.alert(error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        };
    };
    BbService.prototype.addComment = function (bb, author, password, content) {
        var comment = { 'bb': bb, 'author': author, 'content': content };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(author + ':' + password) })
        };
        return this.http.post(this.urlPrefix + "/api/bbs/" + bb + "/comments/", comment, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError()));
    };
    BbService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BbService);
    return BbService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/maksym/Рабочий стол/bboard/virtualenv/bbclient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map