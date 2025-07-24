import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login-body',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login-body.component.html',
  styleUrl: './login-body.component.css'
})
export class LoginBodyComponent {
  loginForm : FormGroup;

  constructor(public authService : AuthService, private fb : FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  goToLoginPage() {
    this.authService.goLoginPage();
    console.log(444);
  }
  goToRegisterPage() {
    this.authService.goRegisterPage();
  }

  loginBtnClick() {
    location.href = 'http://localhost:53477/';
  }
  OpenForgotPasswordPage() {
    this.authService.OpenForgotPasswordPage();
  }

}
