import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardModule} from './dashboard/dashboard.module';
import {MetaService} from './services/meta.service';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './dashboard/components/header/header.component';
import {UserService} from './services/user.service';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    UserModule,
    HttpClientModule,
    NgbModule,
    AppRouting
  ],
  providers: [
    MetaService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
