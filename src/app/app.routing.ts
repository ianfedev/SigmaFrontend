import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'groups', loadChildren: () => import('./modules/group/group.module').then(m => m.GroupModule)},
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  {path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
