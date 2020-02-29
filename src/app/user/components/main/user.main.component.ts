import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../models/IUser';
import {IPagination} from '../../../models/IPaginateResult';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-main',
  templateUrl: './user.main.component.html'
})

export class UserMainComponent implements OnInit {

  public users: IUser[];
  public pagination: IPagination;

  constructor(
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.users = data.UserMainGuard.data;
        this.pagination = data.UserMainGuard.pagination;
      }
    );
    console.log(this.users);
    console.log(this.pagination);
  }

  public parseDate(date: string): string {
    const dateFull: Date = new Date(date);
    return dateFull.getFullYear() + '/' + dateFull.getMonth() + '/' + dateFull.getDay();
  }

}
