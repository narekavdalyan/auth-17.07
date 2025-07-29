import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { log } from 'node:console';

interface User {
  id: number,
  username: string,
  password: string,
};


@Component({
  selector: 'app-register-body',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-body.component.html',
  styleUrl: './register-body.component.css'
})




export class RegisterBodyComponent {



  registerForm: FormGroup;
  registeredUsers: User[] = localStorage.getItem('registeredUsers') ? JSON.parse(localStorage.getItem('registeredUsers')!) : [];
  registeredUser: User = {
    id: 0,
    username: '',
    password: '',
  };

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      passwordRepeat: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  goToLoginPage() {
    if (this.registerForm.get('passwordRepeat')?.value === this.registerForm.get('password')?.value) {
      this.authService.goLoginPage();
    };

  };

  registerTheUser() {
    if (this.registerForm.get('passwordRepeat')?.value === this.registerForm.get('password')?.value) {

      const newUser: User = {
        id: Math.floor(Math.random() * 1000),
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value
      };

      this.registeredUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

      console.log(localStorage.getItem('registeredUsers'));
      console.log(this.registeredUsers);
      
    }
  }

  goToRegisterPage() {
    this.authService.goRegisterPage();
  }
}
