import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public logged: boolean;

  constructor(
    private router: Router
  ) {
    this.logged = AuthService.isLogged();
  }

  ngOnInit(): void {
    if (!this.logged) { this.router.navigate(['/login']); }
  }
}
