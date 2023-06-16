import { Component } from '@angular/core';
import { AuthService } from 'src/app/sevices/auth.service';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: any = {
    username: '',
    email: '',
    password: ''
  };
  registrationSuccess: boolean = false;
  registrationError: boolean = false;

  constructor(private authService: AuthService) {}

  register(): void {
    if (this.authService.register(this.user)) {
      // Registration successful
      this.registrationSuccess = true;
      this.registrationError = false;
    } else {
      // Registration failed
      this.registrationSuccess = false;
      this.registrationError = true;
    }
  }
}