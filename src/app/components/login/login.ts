import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';




@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class login {
  token = localStorage.getItem('token');
  loginForm: FormGroup;
  email: string = '';
  password: any;
  tittleAlert: string = 'please enter valid email';
  constructor(private toaster: ToastrService, private router: Router, private formbuilder: FormBuilder, private apiservice: EndpointsService) {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }
  ngOnInit() {
  }
  go() {
    this.router.navigate(['/register'])
  }
  // If user is logged in, set value to true
  private setLoggedIn(value: boolean): void {
    this.apiservice.setLoggedIn(value);
  }
  login(loginForm) {
    this.apiservice.Adminlogin(this.loginForm.value)
      .subscribe((res: any) => {
        if (res.code == 200) {
          this.setLoggedIn(true);
          localStorage.setItem('token', res.token);
          this.toaster.success('Successfully login');
        } else {
          this.toaster.error(res.message);
        }
      })
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }
}