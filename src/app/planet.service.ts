import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlanetInfo} from "./planet-info";
import {PlanetData} from "./planet-data";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  url = 'https://swapi.dev/api/planets';

  constructor(private readonly http: HttpClient) { }

  getPlanetData(){
    return this.http.get<PlanetData>(this.url);
  }
}
