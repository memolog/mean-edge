import {Component} from '@angular/core'
import {LocationStrategy} from '@angular/common'
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router'
import {HomeComponent} from './home'
import {SignupComponent} from './signup'

@Routes([
  {path: '', component: HomeComponent},
  {path: '/signup', component: SignupComponent}
])

@Component({
  selector: 'app',
  template:`
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
})

export class AppComponent {
  constructor(public router:Router, public location: LocationStrategy){}
}
