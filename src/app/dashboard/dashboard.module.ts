import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRouting } from './dashboard.routing';
import {LoginComponent} from './components/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [ ],
  imports: [
    CommonModule,
    DashboardRouting,
    NgbModule,
    FormsModule
  ]
})
export class DashboardModule { }
