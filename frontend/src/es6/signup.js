var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { API_URL } from './env';
const cryptico = require('cryptico-js');
export let SignupComponent = class SignupComponent {
    constructor(fb, http) {
        this.form = fb.group({
            email: '',
            password: ''
        });
        this.http = http;
    }
    onSubmit(value) {
        this.http.get(`${API_URL}/auth/key`)
            .subscribe((res) => {
            const data = res.json();
            const publicKey = data.publicKey;
            const encrypted = cryptico.encrypt(value.password, publicKey);
            if (encrypted.status !== 'success') {
                return;
            }
            const encryptedPassword = encrypted.cipher;
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post(`${API_URL}/auth/local/signin`, JSON.stringify({
                email: value.email,
                password: encryptedPassword
            }), {
                headers: headers
            })
                .subscribe((res) => {
                // handle jwt token
            });
        });
    }
};
SignupComponent = __decorate([
    Component({
        selector: 'div',
        directives: [FORM_DIRECTIVES],
        template: `
    <header class="main-header">
      <h1 class="main-header__title">Sign in / Sign up</h1>
      <p class="main-header__description">Sign in or sign up with email</p>
    </header>
    <form [ngFormModel]="form" (ngSubmit)="onSubmit(form.value)">
      <div class="form-group row">
        <label for="email" class="col-sm-2 form-control-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="email" placeholder="Email" [ngFormControl]="form.controls['email']">
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-sm-2 form-control-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" placeholder="Password" [ngFormControl]="form.controls['password']">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Sign in / Sign up</button>
        </div>      
      </div>      
    </form>
  `
    }), 
    __metadata('design:paramtypes', [FormBuilder, Http])
], SignupComponent);
