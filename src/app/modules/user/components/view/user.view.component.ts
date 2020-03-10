import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../../../models/IUser';

@Component({
  selector: 'app-user-view',
  templateUrl: './user.view.component.html'
})

export class UserViewComponent implements OnInit {

  public user: IUser;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.user = data.UserViewGuard;
      }
    );
  }

}
