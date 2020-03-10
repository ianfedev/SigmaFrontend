import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupMainComponent} from './components/main/group.main.component';
import {GroupEditComponent} from './components/edit/group.edit.component';
import {GroupViewComponent} from './components/view/group.view.component';


const routes: Routes = [
  {path: '', component: GroupMainComponent},
  {path: ':page?', component: GroupMainComponent},
  {path: 'view/:id', component: GroupViewComponent},
  {path: 'edit/:id', component: GroupEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRouting { }
