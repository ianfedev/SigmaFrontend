import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {MetaService} from './services/meta.service';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './modules/dashboard/components/header/header.component';
import {UserService} from './services/user.service';
import {UserModule} from './modules/user/user.module';
import {GroupModule} from './modules/group/group.module';
import {GroupService} from './services/group.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    UserModule,
    GroupModule,
    HttpClientModule,
    NgbModule,
    AppRouting
  ],
  providers: [
    MetaService,
    UserService,
    GroupService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
