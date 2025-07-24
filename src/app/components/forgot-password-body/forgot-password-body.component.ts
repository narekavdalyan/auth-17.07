import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password-body',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './forgot-password-body.component.html',
  styleUrl: './forgot-password-body.component.css'
})
export class ForgotPasswordBodyComponent {
  forgotPassForm : FormGroup;

  constructor(public authService : AuthService, private fb : FormBuilder, private router : Router) {

    this.forgotPassForm = this.fb.group({
      username : ["", [Validators.required, Validators.minLength(3)]],
      newPassword : ["", [Validators.required, Validators.minLength(6)]],
      repeatNewPassword : ["", [Validators.required]],
    })

  }

  resetPasswordOk() {
    if (this.forgotPassForm.valid) {
        this.authService.resetPassword();
    }
  
  };

  // ngOnInit() {
  //     setTimeout(() => {
  //   this.resetPasswordOk();
  // }, 2000);
  // }



}
