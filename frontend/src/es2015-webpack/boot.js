import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app';
enableProdMode();
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, { useClass: PathLocationStrategy })]);