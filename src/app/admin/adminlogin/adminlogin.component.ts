import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AdminservicesService } from '../adminAuthservice/adminservices.service';
import { Router } from '@angular/router';
import {User} from '../adminInterface/user'
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  loginForm: FormGroup;
  isSubmitted: false;
  constructor(private toaster : ToastrService ,  private authService: AdminservicesService, private router: Router, private Formbuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.Formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login() {
    
    this.authService.Adminlogin(this.loginForm.value)
      .subscribe((res: any) => {
        if (res.message == 'successfully login' && res.token) {
          localStorage.setItem('token', res.token);
          this.toaster.success('Successfully login');
          this.router.navigate(['adminpanel'])
          console.log(res.message);

        }else {
          this.toaster.error('kindly check your email and password');
        }

        console.log(res);
      })
  }


}
