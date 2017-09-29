import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'login',
  moduleId: module.id,
  templateUrl: `./login.component.html`
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private routerExt: RouterExtensions
  ) {

  }

  onFacebook() {
    var that = this;
    this.loginService.facebookLogin().then(
      function (result) {
        that.routerExt.navigate(['home', result.profileImageURL])
        console.log(JSON.stringify(result));
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
  }

  onGoogle() {
    this.loginService.googleLogin();
  }
}