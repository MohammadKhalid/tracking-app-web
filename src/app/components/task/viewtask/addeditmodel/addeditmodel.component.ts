import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-addeditmodel',
  templateUrl: './addeditmodel.component.html',
  styleUrls: ['./addeditmodel.component.css']
})
export class AddeditmodelComponent implements OnInit {
  addUserform: FormGroup
  constructor(private router: Router,
    private services: EndpointsService,
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

  users: []
  ngOnInit() {
    this.services.viewalluser(this.services.userToken, this.services.getUserId).subscribe((res: any) => {
      this.users = res.data;



    })

    this.token = this.services.getUserId;

    if (this.config.data) {
      this.title = this.config.data.firstName;
      this.userId = this.config.data.userId;
      this.description = this.config.data.description;
      this.date = this.config.data.date;
      this.id = this.config.data.id;
      this.config.header = "Udate Task";
      this.btnTxt = "Update";
    }
    else {
      this.config.header = "Add Task";
      this.btnTxt = "Add";
    }    // let test = this.config.data.id;
  }

  task() {
    debugger;
    let payload = {
      title: this.title,
      description: this.description,
      date: moment(this.date).format('YYYY-MM-DD'),
      userId: this.userId.id,
    }
    
    this.services.assignTask(payload, this.services.userToken).subscribe((res: any) => {
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




