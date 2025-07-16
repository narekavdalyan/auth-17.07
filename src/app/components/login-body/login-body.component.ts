import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { log } from 'console';

@Component({
  selector: 'app-login-body',
  imports: [],
  templateUrl: './login-body.component.html',
  styleUrl: './login-body.component.css'
})
export class LoginBodyComponent {

  constructor(public authService : AuthService) {

  }

  goToLoginPage() {
    this.authService.goLoginPage();
    console.log(444);
  }
  goToRegisterPage() {
    this.authService.goRegisterPage();
  }

}
