import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HoverDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  errorMessage = '';
  constructor(private router: Router, private loginService: LoginService) { 

  }

  login() {
   // if (this.username === 'admin' && this.password === 'admin') {
   if (this.loginService.login(this.username, this.password)) {
      // alert('Login successful!');
      //this.router.navigate(['/rooms','add']);
      this.router.navigateByUrl('/rooms');
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
