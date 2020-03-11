import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IGroup} from '../../../../models/IGroup';

@Component({
  selector: 'app-group-view',
  templateUrl: './group.view.component.html'
})

export class GroupViewComponent implements OnInit {

  public group: IGroup;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.group = data.GroupViewGuard;
      }
    );
  }

}
