import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPage} from "../login/login.page";
import {DashboardPage} from "../dashboard/dashboard.page";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: '',
    component: LoginPage
  },
  // {
  //   path: 'login',
  //   children: [
  //     {
  //       path: '',
  //       component: LoginPage
  //     },
  //     {
  //       path: 'dashboard',
  //       component: DashboardPage
  //     },
  //   ]
  // }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
