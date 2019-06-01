import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as JWT from 'jwt-decode';
import { DialogService } from 'primeng/api';
import { AddeditmodelComponent } from './addeditmodel/addeditmodel.component';






@Component({
  templateUrl: './viewtask.html',
  styleUrls: ['./viewtask.css'],
  providers: [DialogService]

})
export class viewtask {
  rangeDates :string;
  users: [];
  columns = [];
    display: boolean = false;
  constructor(private dialogService: DialogService, private toaster: ToastrService, private authService: EndpointsService, private router: Router, private formbuilder: FormBuilder) { }
 
  ngOnInit() {
    console.log(this.rangeDates)
    this.getList();
  }

  getList() {
    this.authService.viewalluser(this.authService.userToken, this.authService.getUserId).subscribe((res: any) => {
      this.users = res.data;
      this.columns = [
        { field: 'S.no', header: 'S.no' },
        { field: 'Date', header: 'Date' },
        { field: 'Title', header: 'Tittle' },
        { field: 'Description', header: 'Description' },
        { field: 'Status', header: 'Status' },
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
      this.getList();
    });
  }
}