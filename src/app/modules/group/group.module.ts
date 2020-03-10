import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {GroupRouting} from './group.routing';
import {GroupMainComponent} from './components/main/group.main.component';
import {GroupEditComponent} from './components/edit/group.edit.component';
import {GroupViewComponent} from './components/view/group.view.component';

@NgModule({
  declarations: [
    GroupMainComponent,
    GroupEditComponent,
    GroupViewComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    NgbModule,
    GroupRouting,
    FormsModule
  ]
})
export class GroupModule { }
