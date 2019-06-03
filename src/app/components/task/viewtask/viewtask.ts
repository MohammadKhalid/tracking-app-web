import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as JWT from 'jwt-decode';
import { DialogService } from 'primeng/api';
import { AddeditmodelComponent } from './addeditmodel/addeditmodel.component';
import * as moment from 'moment/moment';






@Component({
  templateUrl: './viewtask.html',
  styleUrls: ['./viewtask.css'],
  providers: [DialogService]

})
export class viewtask {
  rangeDates: string;
  users: [];
  view: any = [];
  columns: any = [];
  date1: string;
  date2: Date;

  userId: any;
  display: boolean = false;
  constructor(private dialogService: DialogService, private toaster: ToastrService, private authService: EndpointsService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.authService.viewalluser(this.authService.accessToken, this.authService.getUserId).subscribe((res: any) => {
      this.users = res.data
    })
  }

  List() {
    let payload = {
      userId: this.userId.id,
      datefrom: moment(this.date1[0]).format('YYYY-MM-DD'),
      dateto: moment(this.date1[1]).format('YYYY-MM-DD'),
    }
    console.log(payload)

    this.authService.viewtask(payload, this.authService.userToken).subscribe((res: any) => {
      this.view = res.data;
      console.log(res)
      this.columns = [
        { field: 'S.no', header: 'S.no' },
        { field: 'date', header: 'date' },
        { field: 'title', header: 'tittle' },
        { field: 'description', header: 'description' },
        { field: 'userId', header: 'userId' },
        { field: 'Action', header: 'Action' }
      ];
    })
  }

  show(user) {
    const ref = this.dialogService.open(AddeditmodelComponent, {
      data: user,
      width: '40%'
    });

    ref.onClose.subscribe(() => {
      this.List();
    });
  }
}