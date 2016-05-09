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
import { LocationStrategy } from '@angular/common';
import { Routes, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { HomeComponent } from './home';
import { SignupComponent } from './signup';
export let AppComponent = class AppComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
    }
};
AppComponent = __decorate([
    Routes([
        { path: '', component: HomeComponent },
        { path: '/signup', component: SignupComponent }
    ]),
    Component({
        selector: 'app',
        template: `
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" [routerLink]="['/']">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/signup']">Sign in / Sign up</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
  `,
        directives: [ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [Router, LocationStrategy])
], AppComponent);
