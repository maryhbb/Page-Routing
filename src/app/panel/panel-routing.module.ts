import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardPage} from "./dashboard/dashboard.page";
import {UsersPage} from "./users/users.page";
import {PanelPage} from "./panel.page";

const routes: Routes = [
  {
    path: '',
    component: PanelPage,
    children: [
      {
        path: 'dashboard',
        component: DashboardPage
      },
      {
        path: 'users',
        component: UsersPage
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
