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
import { FORM_DIRECTIVES, FormBuilder } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { API_URL } from './env';
var cryptico = require('cryptico-js');
export var SignupComponent = function () {
    function SignupComponent(fb, http, authHttp) {
        _classCallCheck(this, SignupComponent);

        this.http = http;
        this.authHttp = authHttp;
        this.form = fb.group({
            email: '',
            password: ''
        });
    }

    _createClass(SignupComponent, [{
        key: "onSubmit",
        value: function onSubmit(value) {
            var _this = this;

            this.http.get(API_URL + "/auth/key").subscribe(function (res) {
                var data = res.json();
                var publicKey = data.publicKey;
                var encrypted = cryptico.encrypt(value.password, publicKey);
                if (encrypted.status !== 'success') {
                    return;
                }
                var encryptedPassword = encrypted.cipher;
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');
                _this.http.post(API_URL + "/auth/local/signin", JSON.stringify({
                    email: value.email,
                    password: encryptedPassword
                }), {
                    headers: headers
                }).subscribe(function (res) {
                    var data = res.json();
                    var token = data.token;
                    localStorage.setItem('id_token', token);
                    _this.authHttp.get(API_URL + "/api/test").subscribe(function (res) {
                        console.log(res);
                    });
                });
            });
        }
    }]);

    return SignupComponent;
}();
SignupComponent = __decorate([Component({
    selector: 'div',
    directives: [FORM_DIRECTIVES],
    template: "\n    <header class=\"main-header\">\n      <h1 class=\"main-header__title\">Sign in / Sign up</h1>\n      <p class=\"main-header__description\">Sign in or sign up with email</p>\n    </header>\n    <form [ngFormModel]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-2 form-control-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" [ngFormControl]=\"form.controls['email']\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"password\" class=\"col-sm-2 form-control-label\">Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" [ngFormControl]=\"form.controls['password']\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-primary\">Sign in / Sign up</button>\n        </div>      \n      </div>      \n    </form>\n  "
}), __metadata('design:paramtypes', [FormBuilder, Http, AuthHttp])], SignupComponent);