import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {GetDataComponent} from "./get-data-people-by-tap/get-data.component";
import {GetDataPlanetComponent} from "./get-data-planet/get-data-planet.component";
import {ForkJoinComponent} from "./fork-join/fork-join.component";

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'people', component: GetDataComponent},
  { path: 'planet', component: GetDataPlanetComponent},
  { path: 'People and Planets', component: ForkJoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
