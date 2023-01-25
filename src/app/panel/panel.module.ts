import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelRoutingModule} from "./panel-routing.module";
import {DashboardPage} from "./dashboard/dashboard.page";
import {UsersPage} from "./users/users.page";
import {PanelPage} from "./panel.page";
import {SharedModule} from "../shared.module";


@NgModule({
  declarations: [
    DashboardPage,
    UsersPage,
    PanelPage,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PanelRoutingModule
  ]
})
export class PanelModule {
}
