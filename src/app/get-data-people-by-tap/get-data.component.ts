import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeopleService} from "../people.service";
import {takeUntil, tap} from "rxjs/operators";
import {UserData} from "../user-data";
import {UsersInfo} from "../users-info";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})

export class GetDataComponent implements OnInit, OnDestroy {

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  users: UserData[] = [];

  isShow = false;

  constructor(private readonly httpService: PeopleService) {
  }

  ngOnInit(): void {
  }

  getDataUsingTap() {
    this.httpService
      .getPeopleData()
      .pipe(takeUntil(this.destroy))
      .pipe(
        tap((value: UsersInfo) => {
          this.isShow = true; //show cards when the loading will end
          this.users = value.results;
        }),
      ).subscribe()
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
    console.log("Unsubscribed");
  }

}
