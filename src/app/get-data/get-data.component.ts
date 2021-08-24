import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {tap, delay} from "rxjs/operators";

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  userName?: string;
  userMass?:  string;
  userHairColor?: string;

  isLoading = false;
  isShow = false;

  constructor(private readonly httpService: ServiceService) { }

  ngOnInit(): void {
  }

  getDataUsingTap(){
    this.isLoading = true;
    this.httpService
      .getData()
      .pipe(
        delay(5000),
        tap(value=>{
          this.isShow = true; //show cards when the loading will end
          this.isLoading = false; //stop loading

          console.log(value);
          this.userName = value.name;
          this.userMass = value.mass;
          this.userHairColor = value.hair_color;
        })
      ).subscribe();
  }
}
