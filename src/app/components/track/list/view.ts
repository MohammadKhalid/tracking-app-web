import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as moment from 'moment/moment';
import { MapComponent } from './map/map.component';


@Component({

  templateUrl: './view.html',
  styleUrls: ['./view.css']

})
export class View {
  @ViewChild(MapComponent)
  mapEvent: MapComponent;
  attendanceRowData: any
  display: boolean = false;
  users: any = [];
  date1: String
  userId: any;
  userAttendance: any;
  constructor(private authService: EndpointsService,
    private router: Router) { }

  ngOnInit() {
    this.authService.authorizeUser();
    this.authService.viewalluser(this.authService.getAccessToken(), this.authService.getUserId).subscribe((res: any) => {
      this.users = res.data
    })
  }
  
  getAttendance() {
    let payload = {
      userId: this.userId.id,
      fromDate: moment(this.date1[0]).format('YYYY-MM-DD'),
      toDate: moment(this.date1[1]).format('YYYY-MM-DD')
    }

    this.authService.getAttendance(payload, this.authService.getAccessToken()).subscribe((res: any) => {
      this.userAttendance = res.data
    })
  }

  attendanceEvent(data) {
    // this.attendanceRowData = data;
    this.attendanceRowData = {
      userId: this.userId.id,
      toDate: data.date
    }
    this.mapEvent.Attendence(this.attendanceRowData)
  }

  private setLoggedIn(value: boolean): void {
    this.authService.setLoggedIn(value);
  }
}