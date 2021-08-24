import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { UserData } from "./user-data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private readonly http: HttpClient) { }

  url = 'https://swapi.dev/api/people/2';

  getData():Observable<UserData>{
    return this.http.get<UserData>(this.url);
  }
}
