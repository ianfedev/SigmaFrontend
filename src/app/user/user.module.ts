import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRouting } from './user.routing';
import {UserViewComponent} from './components/view/user.view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserViewGuard} from './guards/user.view.guard';
import {UserMainComponent} from './components/main/user.main.component';
import {UserMainGuard} from './guards/user.main.guard';


@NgModule({
  declarations: [
    UserViewComponent,
    UserMainComponent
  ],
  imports: [
    CommonModule,
    UserRouting,
    NgbModule
  ],
  providers: [
    UserViewGuard,
    UserMainGuard
  ]
})
export class UserModule { }
