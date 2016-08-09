import {Component, OnInit} from '@angular/core'
import {LocationStrategy} from '@angular/common'
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router'
import {HomeComponent} from './home'
import {SignupComponent} from './signup'
import {UserService} from './services/userService'
import {AccountComponent} from './account'

@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/signup', component: SignupComponent},
  {path: '/account', component: AccountComponent}
])

@Component({
  selector: 'app',
  template:`
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" [class.active]="isActive('/home')" [routerLink]="['/home']">Home</a>
    </li>
    <li class="nav-item" *ngIf="!isAuthorized">
      <a class="nav-link" [class.active]="isActive('/signup')" [routerLink]="['/signup']">Sign in / Sign up</a>
    </li>
    <li class="nav-item" *ngIf="isAuthorized">
      <a class="nav-link" [class.active]="isActive('/account')" [routerLink]="['/account']">Your Account</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
  url:string = '/home'
  isAuthorized:boolean = false

  constructor(public router:Router, public location: LocationStrategy){
    this.isAuthorized = !!UserService.getUser()

    this.router.changes.subscribe(()=>{
      this.url = this.router.serializeUrl(this.router.urlTree)
    })
  }

  isActive(url:string):boolean {
    return this.url === url
  }

  ngOnInit(){
    this.router.navigate(['/home'])
  }

  signOut(){

  }
}
