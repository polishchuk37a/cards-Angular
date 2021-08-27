import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { GetDataComponent } from './get-data-people-by-tap/get-data.component';
import { GetDataPlanetComponent } from './get-data-planet/get-data-planet.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    GetDataPlanetComponent,
    ForkJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
