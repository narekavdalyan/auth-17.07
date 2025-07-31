import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface User {
  id: number,
  username: string,
  password: string,
};

@Component({
  selector: 'app-forgot-password-body',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './forgot-password-body.component.html',
  styleUrl: './forgot-password-body.component.css'
})
export class ForgotPasswordBodyComponent {
  forgotPassForm : FormGroup;
  registeredUsers: User[] = localStorage.getItem('registeredUsers') ? JSON.parse(localStorage.getItem('registeredUsers')!) : [];
   users_array: { username: string; password: string }[] = [];

  constructor(public authService : AuthService, private fb : FormBuilder, private router : Router) {

    this.forgotPassForm = this.fb.group({
      username : ["", [Validators.required, Validators.minLength(3)]],
      newPassword : ["", [Validators.required, Validators.minLength(6)]],
      repeatNewPassword : ["", [Validators.required]],
    });
  };

   ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem('registeredUsers');
      this.users_array = storedUsers ? JSON.parse(storedUsers) : [];
    };
  };

  resetPasswordOk() {
    if (this.forgotPassForm.valid && this.forgotPassForm.get('newPassword')?.value == this.forgotPassForm.get('repeatNewPassword')?.value) {
        this.authService.resetPassword();
    };
  
      let username = this.forgotPassForm.get('username')?.value;
      let user = this.users_array.find(
        u => u.username === username
      );

      if(user) {
        user.password = this.forgotPassForm.get('newPassword')?.value;
        localStorage.setItem('registeredUsers',JSON.stringify(this.users_array));
      }else{
        alert('ERROR : Username is invalid');
      }

  };



}
