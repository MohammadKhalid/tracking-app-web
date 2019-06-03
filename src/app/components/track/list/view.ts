import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as moment from 'moment/moment';

@Component({

  templateUrl: './view.html',
  styleUrls: ['./view.css']

})
export class View {
  attendanceRowData: any
  display: boolean = false;
  users: any = [];
  date1: String
  userId: any;
  userAttendance: any;
  constructor(private authService: EndpointsService,
    private router: Router) { }

  ngOnInit() {
    if (this.authService.userToken) {
      this.setLoggedIn(true);
      this.router.navigate([''])
    }
    else {
      this.setLoggedIn(false);
      this.router.navigate(['login'])
    }
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
    this.attendanceRowData = data

  }

  private setLoggedIn(value: boolean): void {
    this.authService.setLoggedIn(value);
  }
}