import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IGroup} from '../../../../models/IGroup';
import {GroupService} from '../../../../services/group.service';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group.edit.component.html'
})

export class GroupEditComponent implements OnInit {

  public group: IGroup;
  public error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService
  ) {
    this.error = '';
  }

  public ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.group = data.GroupViewGuard;
      }
    );
  }

  public editRequest(): void {
    this.groupService.updateGroup(this.group).subscribe(
      (response) => {
        this.router.navigate(['/groups/view/' + response._id]);
      },
      (error) => {
        const message = error as any;
        if (message != null) { this.error = error.error.errors.message; }
      }
    );
  }

}
