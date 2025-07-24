import { Injectable } from '@angular/core';
import { Router } from '@angular/router';   

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router : Router) { }

  goLoginPage () {
    this.router.navigate(['login']);
  }
  goRegisterPage () {
    this.router.navigate(['register']);
  }
    resetPassword() {
    this.router.navigate(['login']);
  };
  OpenForgotPasswordPage() {
    this.router.navigate(['forgotPassword']);
  }
}
