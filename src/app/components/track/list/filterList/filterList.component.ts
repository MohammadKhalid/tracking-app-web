import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']
})
export class FilterListComponent implements OnInit {
  @Input() userAttendance: any
  @Output() attendanceEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() { }
  sendAttendancetoParent(user) {
    this.attendanceEvent.next(user);
  }
}
