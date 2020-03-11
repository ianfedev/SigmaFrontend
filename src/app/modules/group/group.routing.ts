import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupMainComponent} from './components/main/group.main.component';
import {GroupEditComponent} from './components/edit/group.edit.component';
import {GroupViewComponent} from './components/view/group.view.component';
import {GroupMainGuard} from './guards/group.main.guard';
import {GroupViewGuard} from './guards/group.view.guard';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: GroupMainComponent, resolve: {GroupMainGuard}},
  {path: 'list/:page?', component: GroupMainComponent, resolve: {GroupMainGuard}},
  {path: 'view/:id', component: GroupViewComponent, resolve: {GroupViewGuard}},
  {path: 'edit/:id', component: GroupEditComponent, resolve: {GroupViewGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRouting { }
