import {Component, OnInit} from '@angular/core';
import {IPagination} from '../../../../models/IPaginateResult';
import {ActivatedRoute} from '@angular/router';
import {IGroup} from '../../../../models/IGroup';

@Component({
  selector: 'app-group-main',
  templateUrl: './group.main.component.html'
})

export class GroupMainComponent implements OnInit {

  public groups: IGroup[];
  public pagination: IPagination;

  constructor(
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.groups = data.GroupMainGuard.data;
        this.pagination = data.GroupMainGuard.pagination;
      }
    );
  }

}
