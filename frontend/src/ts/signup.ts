import {Component} from '@angular/core'
import {FORM_DIRECTIVES, FormBuilder, ControlGroup} from '@angular/common'
import {Http, Response, Headers} from '@angular/http'
import {AuthHttp} from 'angular2-jwt'
import {API_URL} from './env'
const cryptico = require('cryptico-js')

interface signinForm {
  email: string,
  password: string
}

@Component({
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
})

export class SignupComponent {
  form: ControlGroup
  
  constructor(fb: FormBuilder, public http: Http, public authHttp:AuthHttp){
    this.form = fb.group({
      email: '',
      password: ''
    })
  }
  onSubmit(value: signinForm): void {
    this.http.get(`${API_URL}/auth/key`)
      .subscribe((res:Response) => {
        const data = res.json()
        const publicKey = data.publicKey
        const encrypted = cryptico.encrypt(value.password, publicKey)
        if (encrypted.status !== 'success'){
          return
        }
        const encryptedPassword = encrypted.cipher
        
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        
        this.http.post(
          `${API_URL}/auth/local/signin`,
          JSON.stringify({
            email: value.email,
            password: encryptedPassword
        }),{
          headers: headers
        })
        .subscribe((res:Response) => {
          const data = res.json()
          const token = data.token
          localStorage.setItem('id_token', token)
          this.authHttp.get(`${API_URL}/api/test`)
            .subscribe((res:Response) => {
              console.log(res)
            })
        })
      })
  }
}
