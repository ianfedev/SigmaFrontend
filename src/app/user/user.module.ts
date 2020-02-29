import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRouting } from './user.routing';
import {UserViewComponent} from './components/view/user.view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UserRouting,
    NgbModule
  ]
})
export class UserModule { }
