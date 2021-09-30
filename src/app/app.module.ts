import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule } from "@angular/material/slider";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { DashboardPage } from './dashboard/dashboard.page';
import { LoginPage } from './login/login.page';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RoutingModule} from "./routing/routing.module";

const MaterialModules = [
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatIconModule,
  MatDatepickerModule,
  MatSidenavModule,


]

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    LoginPage,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ...MaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
