import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanetService} from "../planet.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-get-data-planet',
  templateUrl: './get-data-planet.component.html',
  styleUrls: ['./get-data-planet.component.scss']
})
export class GetDataPlanetComponent implements OnInit{

  constructor(private readonly httpService: PlanetService) {
  }

  ngOnInit(): void {
  }

  x$ = this.httpService
    .getPlanetData()
    .pipe(
      map(res => res.results)
    )

}
