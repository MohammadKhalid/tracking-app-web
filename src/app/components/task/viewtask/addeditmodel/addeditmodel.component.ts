import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import * as moment from 'moment/moment';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-addeditmodel',
  templateUrl: './addeditmodel.component.html',
  styleUrls: ['./addeditmodel.component.css']
})
export class AddeditmodelComponent implements OnInit {
  addUserform: FormGroup
  constructor(private router: Router,
    private globalServices: EndpointsService,
    private taskService: TaskService,
    private formbuilder: FormBuilder,
    private toaster: ToastrService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig, ) { }
  token: string;
  btnTxt: string;
  title: string;
  description: string;
  date: string;
  userId: any;
  id
  isEdit: boolean = false;
  users: []
  ngOnInit() {
    this.taskService.viewalluser(this.globalServices.userToken, this.globalServices.getUserId).subscribe((res: any) => {
      this.users = res.data;
    })

    this.token = this.globalServices.getUserId;
    if (this.config.data) {
      this.title = this.config.data.title;
      this.userId = this.config.data.userId;
      this.description = this.config.data.description;
      this.date = this.config.data.date;
      this.id = this.config.data.id;
      this.config.header = "Udate Task";
      this.btnTxt = "Update";
      this.isEdit = false;
    }
    else {
      this.config.header = "Add Task";
      this.btnTxt = "Add";
      this.isEdit = true;
    }    // let test = this.config.data.id;
  }

  task() {
    let payload = {
      title: this.title,
      description: this.description,
      date: moment(this.date).format('YYYY-MM-DD'),
      userId: this.userId.id,
      id: this.id
    }
    if (this.id) {
      this.taskService.edittask(payload).subscribe((res: any) => {
        if (res.code == 200) {
          this.toaster.success(res.message);
          this.ref.close()
        } else {
          this.toaster.error(res.message);
        }
      })
    }
    else {
      this.taskService.assignTask(payload, this.globalServices.userToken).subscribe((res: any) => {
        if (res.code == 200) {
          this.toaster.success(res.message);
          console.log(res.data);
          this.ref.close();
        } else {
          console.log(res.data);
          this.toaster.error(res.message);
        }
      })
    }

  }
}


