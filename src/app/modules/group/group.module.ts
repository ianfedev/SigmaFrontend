import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {GroupRouting} from './group.routing';
import {GroupMainComponent} from './components/main/group.main.component';
import {GroupEditComponent} from './components/edit/group.edit.component';
import {GroupViewComponent} from './components/view/group.view.component';
import {DashboardModule} from '../dashboard/dashboard.module';
import {GroupMainGuard} from './guards/group.main.guard';
import {GroupViewGuard} from './guards/group.view.guard';

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
    FormsModule,
    DashboardModule
  ],
  providers: [
    GroupMainGuard,
    GroupViewGuard
  ]
})
export class GroupModule { }
