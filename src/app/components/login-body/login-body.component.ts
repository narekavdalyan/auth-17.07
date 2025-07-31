import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login-body',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login-body.component.html',
  styleUrl: './login-body.component.css'
})
export class LoginBodyComponent implements OnInit {

  @ViewChild('login_body_all') login_body_all!: ElementRef;
  @ViewChild('registered_user_page') registered_user_page!: ElementRef;


  loginForm: FormGroup;

  users_array: { username: string; password: string }[] = [];
  // login_form_div = document.querySelector('.login_body_all') as HTMLElement;



  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
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
    let { username, password } = this.loginForm.value;

    let user = this.users_array.find(
      u => u.username === username && u.password === password
    );

    if (user) {

      setTimeout(() => {
        this.login_body_all.nativeElement.style.display = 'none';
        this.registered_user_page.nativeElement.style.display = 'flex';
        this.registered_user_page.nativeElement.innerHTML = `

                 <style>
                    #logoutBtn {
                        margin-top: 15px; 
                        padding: 10px 20px; 
                        width: 100px;
                        text-align: center;
                        cursor: pointer; 
                        background-color: red; 
                        color: white; border-radius: 15px; 
                        border: none;
                      }
                    
                    #logoutBtn:hover {
                      background-color: white;
                      color: red;
                      border: 1px solid red;
                      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
                    }
                  </style>

        <div style="display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;">
          <h2> Hello, ${user.username.toUpperCase()} </h2>
          <button id="logoutBtn"> Log Out </button>
        </div>`;

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', () => {
            this.registered_user_page.nativeElement.style.display = 'none';
            this.login_body_all.nativeElement.style.display = 'flex';

            this.loginForm.setValue({
              username: '',
              password: ''
            });
          });
        };

      }, 1000);
    } else {
      alert('ERROR : username or password is incorrect');
    };
  };

  OpenForgotPasswordPage() {
    this.authService.OpenForgotPasswordPage();
  };





}
