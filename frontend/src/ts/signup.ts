import {Component} from '@angular/core'
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl} from '@angular/forms'
import {Http, Response, Headers} from '@angular/http'
import {API_URL} from './env'
import {UserService} from './services/userService'
import {Signup} from './signup.model'

@Component({
  selector: 'signup-form',
  template: `
  <div>
    <header class="main-header">
      <h1 class="main-header__title">Sign in / Sign up</h1>
      <p class="main-header__description">Sign in or sign up with email</p>
    </header>
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <div>
        <div class="form-group row">
          <label for="email" class="col-sm-2 form-control-label">Email</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="email" placeholder="Email" [(ngModel)]="model.email" name="email">
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-2 form-control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" placeholder="Password" [(ngModel)]="model.password" name="password">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2"></div>
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in / Sign up</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  providers: [UserService]
})

export class SignupComponent {
  model = new Signup('','');
  constructor(private http: Http, private userService: UserService){
  }
  onSubmit(): void {
    System.import('cryptico-js').then((cryptico)=>{
      this.http.get(`${API_URL}/auth/key`)
        .subscribe((res:Response) => {
          const data = res.json()
          const publicKey = data.publicKey
          const encrypted = cryptico.encrypt(this.model.password, publicKey)
          if (encrypted.status !== 'success'){
            return
          }
          const encryptedPassword = encrypted.cipher

          const headers = new Headers()
          headers.append('Content-Type', 'application/json')

          this.http.post(
            `${API_URL}/auth/local/signin`,
            JSON.stringify({
              email: this.model.email,
              password: encryptedPassword
          }),{
            headers: headers
          })
          .subscribe((res:Response) => {
            this.userService.getAuthenticatedUser()
              .then((user)=>{
                console.log(user)
              })
          })
        })
    })
  }
}
