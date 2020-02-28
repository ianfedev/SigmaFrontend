import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router
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
          this.router.navigate(['']);
        }
      },
      (error) => {
        const message = error as any;
        if (message != null) { this.error = error.error.errors.message; }
      }
    );
  }
}
