import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']
})
export class FilterlistComponent implements OnInit {
@Input()userAttendance: any
@Output() attendanceEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }
  sendAttendancetoParent(){
    this.attendanceEvent.next(this.userAttendance);
  }
}
