import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


/*
* app
* panel
* -dashboard
* -users
* -panel.module
* -panel-routing.module
*
* auth
* -login
* -register
* -auth.module
* -auth-routing.module
*
* */


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'panel',
    loadChildren: () => import("../panel/panel.module").then(m => m.PanelModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
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
