import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../models/IUser';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user.edit.component.html'
})

export class UserEditComponent implements OnInit {

  public user: IUser;
  public error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.error = '';
  }

  public ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.user = data.UserViewGuard;
      }
    );
  }

  public editRequest(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => {
        this.router.navigate(['/users/view/' + response._id]);
      },
      (error) => {
        const message = error as any;
        if (message != null) { this.error = error.error.errors.message; }
      }
    );
  }

}
