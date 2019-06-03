import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';




@Component({
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class register {



  regForm: FormGroup
  constructor(private toaster: ToastrService, private authService: EndpointsService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    if (this.authService.userToken) {
      this.setLoggedIn(true);
      this.router.navigate([''])
    }
    else {
      this.setLoggedIn(false);
      this.router.navigate(['login'])
    }
    this.regForm = this.formbuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      phone: new FormControl(''),
      address: new FormControl(''),

    })
  }
  private setLoggedIn(value: boolean): void {
    this.authService.setLoggedIn(value);
  }
  reg() {
    this.authService.adminReg(this.regForm.value).subscribe((res: any) => {
      if (res.message == 200) {
        localStorage.setItem('token', res.token)
        this.toaster.success('Account Created');

      } else {
        console.log(this.toaster.error(res.message))
      }
    })
  }
  login() {
    this.router.navigate(['login'])
  }

}