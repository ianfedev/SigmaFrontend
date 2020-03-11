import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserViewComponent} from './components/view/user.view.component';
import {UserMainComponent} from './components/main/user.main.component';
import {UserViewGuard} from './guards/user.view.guard';
import {UserMainGuard} from './guards/user.main.guard';
import {UserEditComponent} from './components/edit/user.edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: UserMainComponent, resolve: {UserMainGuard}},
  {path: 'list/:page?', component: UserMainComponent, resolve: {UserMainGuard}},
  {path: 'view/:id', component: UserViewComponent, resolve: {UserViewGuard}},
  {path: 'edit/:id', component: UserEditComponent, resolve: {UserViewGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouting { }
