import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class LoginService {

  constructor() { }

  facebookLogin() {
    return firebase.login({
      type: firebase.LoginType.FACEBOOK,
      // Optional
      facebookOptions: {
        // defaults to ['public_profile', 'email']
        scope: ['public_profile', 'email']
      }
    });
  }

  googleLogin() {
    firebase.login({
      type: firebase.LoginType.GOOGLE,
      // Optional 
      googleOptions: {
        hostedDomain: "mygsuitedomain.com"
      }
    }).then(
        function (result) {
          JSON.stringify(result);
        },
        function (errorMessage) {
          console.log(errorMessage);
        }
    );
  }
}