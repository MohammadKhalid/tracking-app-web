import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/admin/adminAuthservice/adminservices.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import * as JWT from 'jwt-decode';




@Component({
  selector: 'app-assign-schedule',
  templateUrl: './assign-schedule.component.html',
  styleUrls: ['./assign-schedule.component.css']
})
export class AssignScheduleComponent implements OnInit {
  token : string
  list : [];
  addtask : FormGroup;
  tokens = localStorage.getItem('token');

  adminId = JWT(this.tokens).User.user_id;



  constructor(private service : AdminservicesService, private formbulder: FormBuilder, private toaster : ToastrService) { }

  ngOnInit() {
   this.addtask = this.formbulder.group({
      title : ['', Validators.required],
      description : ['', Validators.required],
      date : ['',Validators.required],
      assignTo : parseInt,
      adminId: [this.adminId]


   })



    this.token = localStorage.getItem('token')
    this.service.getallusers(this.token).subscribe((res : any)=>{
      this.list = res.data;
      console.log(res.data);

    })
  }
  assigntask(){
   let tokens = localStorage.getItem('token')

this.service.assignTask(this.addtask.value,tokens).subscribe((res :any)=>{
   
         if(res.code == 200) {
                 this.toaster.success(res.message);
         }else{
           this.toaster.error(res.message)
         }




}) }

}
