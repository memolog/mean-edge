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
export let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Component({
        template: `
    <header class="main-header">
      <h1 class="main-header__title">MEAN EDGE</h1>
      <p class="main-header__description">This is my personal sandbox to use the cutting-edge features around MEAN</p>
    </header>
  `
    }), 
    __metadata('design:paramtypes', [])
], HomeComponent);
