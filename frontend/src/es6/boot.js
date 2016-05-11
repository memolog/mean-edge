import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
import { AppComponent } from './app';
enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    AUTH_PROVIDERS,
    provide(AuthHttp, {
        useFactory: (http) => {
            return new AuthHttp(new AuthConfig({
                globalHeaders: [{ 'Content-Type': 'application/json' }],
            }), http);
        },
        deps: [Http]
    }),
    provide(LocationStrategy, { useClass: PathLocationStrategy }),
]);
