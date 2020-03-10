import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {IUser} from '../../../../models/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  public user: IUser;
  public collapsed: boolean;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.user = {name: ''} as IUser;
    this.collapsed = true;
  }

  ngOnInit(): void {
    this.userService.viewOwnUser().subscribe(
      (user) => {
        this.user = user;
      },

      (error) => {
        this.logout();
      }
    );
  }

  public logout(): void {
    localStorage.clear();
    // @ts-ignore
    window.location = '/';
  }

}
