import { Component, OnInit } from '@angular/core';
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
export class LoginBodyComponent implements OnInit {
  loginForm : FormGroup;

  users_array : { username: string; password: string }[] =  [];
  
  

  constructor(public authService : AuthService, private fb : FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
    // console.log(this.users_array);
    
  }

    ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem('registeredUsers');
      this.users_array = storedUsers ? JSON.parse(storedUsers) : [];
    }
  }

  goToLoginPage() {
    this.authService.goLoginPage();
  }
  goToRegisterPage() {
    this.authService.goRegisterPage();
  }

  loginBtnClick() {
    // this.authService.loginBtnClick();

    let {username, password} = this.loginForm.value;

    let user = this.users_array.find(
      u => u.username === username && u.password === password
    );

    if(user) {
      alert(`Hello ${user.username}`);
      setTimeout(() => {
        this.authService.loginBtnClick();
      }, 3000);
     
    } else {
      alert('ERROR : username or password is incorrect');
    };

  };
  OpenForgotPasswordPage() {
    this.authService.OpenForgotPasswordPage();
  };

}
