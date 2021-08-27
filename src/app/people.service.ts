import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersInfo} from "./users-info";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url = 'https://swapi.dev/api/people';

  constructor(private readonly http: HttpClient) { }

  getPeopleData(){
    return this.http.get<UsersInfo>(this.url);
  }
}
