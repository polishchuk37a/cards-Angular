import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../people.service";
import {PlanetService} from "../planet.service";
import {forkJoin} from "rxjs";
import {PlanetData} from "../planet-data";
import {UserData} from "../user-data";


@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

 people?: UserData[]
 planet?: PlanetData["results"];

  constructor(private readonly httpPeopleService: PeopleService, private readonly httpPlanetsService: PlanetService) { }

  ngOnInit(): void {
    this.loadAPI();
  }

  people$ = this.httpPeopleService.getPeopleData();
  planets$ = this.httpPlanetsService.getPlanetData();

  loadAPI(){
    forkJoin([this.people$, this.planets$]).subscribe(([people, planets]) =>{
      this.people = people.results;
      this.planet = planets.results;
    })
  }

}
