import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: string;

  constructor(
    private authService: AuthService
  ) {
    this.email = '';
    this.password = '';
    this.error = '';
  }

  ngOnInit(): void {
  }

  loginRequest(): void {
    this.authService.loginUser(this.email, this.password).subscribe(
      (response) => {
        if (response.token.length === 0) {
          this.error = 'Ha ocurrido un error al generar tu token.';
        } else {
          localStorage.setItem('token', response.token);
          // @ts-ignore
          window.location = '/';
        }
      },
      (error) => {
        const message = error as any;
        if (message != null) { this.error = error.error.errors.message; }
      }
    );
  }
}
