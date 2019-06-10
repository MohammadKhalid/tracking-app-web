import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { DialogService } from 'primeng/api';
import { AddEditModelComponent } from './addEditModel/addEditModel.component';
import { TaskService } from '../../task/task.service';
import { UserService } from '../user.service';


@Component({
  templateUrl: './view.html',
  styleUrls: ['./view.css'],
  providers: [DialogService]

})
export class view {

  users: [];
  columns = [];
  display: boolean = false;
  constructor(private dialogService: DialogService,
    private toaster: ToastrService,
    private globalService: EndpointsService,
    private userService: UserService,
    private taskSerive: TaskService,
    private router: Router,
    private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.globalService.authorizeUser();
    this.getList();
  }

  getList() {
    this.taskSerive.viewalluser(this.globalService.userToken, this.globalService.getUserId).subscribe((res: any) => {
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
    const ref = this.dialogService.open(AddEditModelComponent, {
      data: user,
      width: '40%'
    });

    ref.onClose.subscribe(() => {
      this.getList();
    });
  }
}