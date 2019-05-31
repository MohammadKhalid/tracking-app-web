import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as JWT from 'jwt-decode';





@Component({
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
  selector: 'app-task'
})
export class tasks {

  val1: string;
  addUserform: FormGroup
  token: string;

  constructor(private toaster: ToastrService, private authService: EndpointsService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.token = this.authService.getUserId;
    this.addUserform = this.formbuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      adminId: [this.token]







    })
    console.log(this.token);
  }
  userLogin() {
    console.log(this.addUserform.value);
    this.authService.adduser(this.addUserform.value).subscribe((res: any) => {
      if (res.code == 200) {
        this.toaster.success('done')
      } else {
        console.log('no')
        console.log(res);
      }
    })
  }

}