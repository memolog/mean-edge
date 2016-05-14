var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Routes, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { HomeComponent } from './home';
import { SignupComponent } from './signup';
export var AppComponent = function () {
    function AppComponent(router, location) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.location = location;
        this.url = '/home';
        this.router.changes.subscribe(function () {
            _this.url = _this.router.serializeUrl(_this.router.urlTree);
        });
    }

    _createClass(AppComponent, [{
        key: "isActive",
        value: function isActive(url) {
            return this.url === url;
        }
    }, {
        key: "ngOnInit",
        value: function ngOnInit() {
            this.router.navigate(['/home']);
        }
    }]);

    return AppComponent;
}();
AppComponent = __decorate([Routes([{ path: '/home', component: HomeComponent }, { path: '/signup', component: SignupComponent }]), Component({
    selector: 'app',
    template: "\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"isActive('/home')\" [routerLink]=\"['/home']\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"isActive('/signup')\" [routerLink]=\"['/signup']\">Sign in / Sign up</a>\n    </li>\n  </ul>\n  <router-outlet></router-outlet>\n  ",
    directives: [ROUTER_DIRECTIVES]
}), __metadata('design:paramtypes', [Router, LocationStrategy])], AppComponent);