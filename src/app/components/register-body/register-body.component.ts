import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-body',
  imports: [],
  templateUrl: './register-body.component.html',
  styleUrl: './register-body.component.css'
})
export class RegisterBodyComponent {

  constructor(public authService : AuthService) {}

  goToLoginPage() {
    this.authService.goLoginPage();
  };

  goToRegisterPage() {
    this.authService.goRegisterPage();
  }

}
