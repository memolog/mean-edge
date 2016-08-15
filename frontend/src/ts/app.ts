import {Component, OnInit} from '@angular/core'
import {LocationStrategy} from '@angular/common'
import {Router} from '@angular/router'
import {HomeComponent} from './home'
import {SignupComponent} from './signup'
import {UserService} from './services/userService'
import {AccountComponent} from './account'


@Component({
  selector: 'app',
  template:`
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" routerActive="active" routerLink="/home">Home</a>
    </li>
    <li class="nav-item" *ngIf="!isAuthorized">
      <a class="nav-link" routerActive="active" routerLink="/signup">Sign in / Sign up</a>
    </li>
    <li class="nav-item" *ngIf="isAuthorized">
      <a class="nav-link" routerActive="active" routerLink="/account">Your Account</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnInit {
  isAuthorized:boolean = false

  constructor(public router:Router, public location: LocationStrategy){
    this.isAuthorized = !!UserService.getUser()
  }

  ngOnInit(){
    this.router.navigate(['/home'])
  }

  signOut(){

  }
}
