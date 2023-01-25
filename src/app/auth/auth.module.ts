import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginPage} from "./login/login.page";
import {RegisterPage} from "./register/register.page";
import {AuthPage} from "./auth.page";
import {SharedModule} from "../shared.module";


@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
    AuthPage,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
