import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { RegisterService } from './register.service';




@Component({
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class register {



  regForm: FormGroup
  constructor(private toaster: ToastrService,
    private globalService: EndpointsService,
    private registeapi: RegisterService,
    private router: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.globalService.authorizeUser();

    this.regForm = this.formbuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      phone: new FormControl(''),
      address: new FormControl(''),

    })
  }
  reg() {
    this.registeapi.adminReg(this.regForm.value).subscribe((res: any) => {
      debugger;
      if (res.code == 200) {
        this.globalService.setUserToken = res.token;
        this.toaster.success("User Created successfully.");
        this.router.navigate([''])
        // localStorage.setItem('token', res.token)
      } else {
        console.log(this.toaster.error(res.message))
      }
    })
  }
  login() {
    this.router.navigate(['login'])
  }

}