import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as JWT from 'jwt-decode';
import { DialogService } from 'primeng/api';
import { Addedit } from './addedit';
import { AddeditmodelComponent } from './addeditmodel/addeditmodel.component';






@Component({
  templateUrl: './view.html',
  styleUrls: ['./view.css'],
  providers: [DialogService]

})
export class view {

  users: [];
  columns = [];
    display: boolean = false;
  constructor(private dialogService: DialogService, private toaster: ToastrService, private authService: EndpointsService, private router: Router, private formbuilder: FormBuilder) { }
 
  ngOnInit() {
    this.getList();
  }

  getList() {
    this.authService.viewalluser(this.authService.userToken, this.authService.getUserId).subscribe((res: any) => {
      this.users = res.data;
      this.columns = [
        { field: 'S.no', header: 'S.no' },
        { field: 'First Name', header: 'First Name' },
        { field: 'Last Name', header: 'Last Name' },
        { field: 'Email', header: 'Email' },
        { field: 'Phone', header: 'Phone' },
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