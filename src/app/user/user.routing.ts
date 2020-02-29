import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserViewComponent} from './components/view/user.view.component';


const routes: Routes = [
  {path: ':id', component: UserViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouting { }
