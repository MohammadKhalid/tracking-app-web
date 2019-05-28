import {Component,OnInit} from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';




@Component({
    templateUrl: './login.html',
    styleUrls :['./login.css']
})
export class login {



    token =localStorage.getItem('token');
    //  lists : [];
    loginForm:  FormGroup;
    email:string='';
    password:any;
    tittleAlert:string = 'please enter valid email';
    constructor(  private toaster : ToastrService ,  private router: Router, private formbuilder: FormBuilder,private apiservice : EndpointsService) {
      this.loginForm = this.formbuilder.group({
              email: ['', Validators.compose([Validators.required,Validators.email])],
              password: ['', Validators.required]
      })
     }
  
  
    
    ngOnInit() {
      
     
  
      
  
    }
  
  
    // postdata(loginForm)
    // {
     
    // }
  
  
  
  go(){
    this.router.navigate(['/register'])
  }
    login(loginForm) {
      this.apiservice.Adminlogin(this.loginForm.value)
        .subscribe((res: any) => {
          if (res.code == 200 ) {
            localStorage.setItem('token', res.token);
            this.toaster.success('Successfully login');
            // this.router.navigate(['adminpanel'])
            console.log(res.message);
  
          }else {
            this.toaster.error(res.message);
          }
  
          console.log(res);
        })
        this.loginForm = this.formbuilder.group({
          email: ['', Validators.compose([Validators.required,Validators.email])],
          password: ['', Validators.required]
       })
        
    }
  
  
  
  
}