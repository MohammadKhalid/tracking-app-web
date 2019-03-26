import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AdminservicesService } from '../../adminAuthservice/adminservices.service';
import { Router } from '@angular/router';
// import {User} from '../adminInterface/user'
import { ToastrService } from 'ngx-toastr';
import * as JWT from 'jwt-decode';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addUserform : FormGroup
  token =localStorage.getItem('token');
   adminId= JWT(this.token).User.user_id;
   
  constructor(private router : Router,private formbuilder : FormBuilder, private service : AdminservicesService, private toaster : ToastrService) { }

  ngOnInit() {
    this.addUserform = this.formbuilder.group({
      firstname :[''],
      lastname:[''],
      email:['',Validators.required],
      password:['',Validators.required],
      phone : [''],
      cnic:['',Validators.required],
      
      address:[''],
      adminId : [this.adminId],
      role : ['2']
      
      





    })
    console.log(this.adminId);
  }
  userLogin(){
    console.log(this.addUserform.value);
    this.service.adduser(this.addUserform.value).subscribe((res: any)=>{
         if(res.code == 200) {
           this.toaster.success('done')
         }else {
           console.log('no')
           console.log(res);
         }
    })
  }
}
