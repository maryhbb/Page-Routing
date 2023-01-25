import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSidenavModule} from "@angular/material/sidenav";

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
  exports: [
    ...MaterialModules,
  ]
})
export class SharedModule {
}
