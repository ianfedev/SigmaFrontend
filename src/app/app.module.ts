import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardModule} from './dashboard/dashboard.module';
import {MetaService} from './services/meta.service';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,
    NgbModule,
    AppRouting
  ],
  providers: [
    MetaService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
