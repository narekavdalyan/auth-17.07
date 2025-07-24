import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register-body',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-body.component.html',
  styleUrl: './register-body.component.css'
})
export class RegisterBodyComponent {
    registerForm : FormGroup;
  constructor(public authService : AuthService, private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      passwordRepeat: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  goToLoginPage() {
    if(this.registerForm.get('passwordRepeat')?.value === this.registerForm.get('password')?.value) {
      this.authService.goLoginPage();
    }

  };

  goToRegisterPage() {
    this.authService.goRegisterPage();
  }

}
