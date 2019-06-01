import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';


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
    public config: DynamicDialogConfig) { }
  token: string;
  btnTxt: string;
  isEdit: boolean = false;
  title: string;
  description : string;
  date : Date;
   userId: any ;
  id;

users:[]
  ngOnInit() {
    this.services.viewalluser(this.services.userToken, this.services.getUserId).subscribe((res: any) => {
     this.users = res.data;
     
      
   
    })
    this.token = this.services.getUserId;

    // this.btnTxt =
    // this.addUserform = this.formbuilder.group({
    //   title: new FormControl(''),
    //   description: new FormControl('', Validators.required),
    //   date: new FormControl(''),
    //   userId :parseInt
     
    // })
    // if (this.config.data) {
    //   this.addUserform.controls['firstname'].setValue(this.config.data.firstName);
    //   this.addUserform.controls['lastname'].setValue(this.config.data.lastName);
    //   this.addUserform.controls['email'].setValue(this.config.data.email);
    //   this.addUserform.controls['phone'].setValue(this.config.data.phone);
    //   this.addUserform.controls['id'].setValue(this.config.data.id);
    //   this.config.header = "Udate User";
    //   this.addUserform.get('password').setValidators([]);
    //   this.btnTxt = "Update";
    //   this.isEdit = false;
    // }
    // else {
    //   this.config.header = "Add User";
    //   this.btnTxt = "Add";
    //   this.isEdit = true;

    // }    // let test = this.config.data.id;

  }
  // userAddEdit() {
  //   console.log(this.addUserform.value);
  //   if (this.addUserform.valid) {
  //     if (this.addUserform.value.id == "") {
  //       this.services.assignTask(this.addUserform.value,this.services.userToken).subscribe((res: any) => {
  //         debugger;
  //         if (res.code == 200) {
  //           this.toaster.success(res.message);
  //           console.log(res.data);
  //           this.ref.close()
  //         } else {
  //           console.log(res.data);
  //           this.toaster.error(res.message);
  //         }
  //       })
  //     }
  //     else {
  //       this.services.editemployee(this.addUserform.value).subscribe((res: any) => {
  //         if (res.code == 200) {
  //           this.toaster.success(res.message.msg);
  //           this.ref.close()
  //         } else {
  //           this.toaster.error(res.message.msg);
  //         }
  //       })
  //     }
  //   }
 
  // }
  task(){
    const payload = {
      title : this.title,
      description : this.description,
      date : this.date,
      userId : this.userId
      
    }
    // if (this.addUserform.valid) {
    //   if (this.addUserform.value.id == "") {
    //     this.services.assignTask(payload,this.services.userToken).subscribe((res: any) => {
    //       debugger;
    //       if (res.code == 200) {
    //         this.toaster.success(res.message);
    //         console.log(res.data);
    //         this.ref.close()
    //       } else {
    //         console.log(res.data);
    //         this.toaster.error(res.message);
    //       }
    //     })
    //   }
    //   else {
    //     this.services.editemployee(this.addUserform.value).subscribe((res: any) => {
    //       if (res.code == 200) {
    //         this.toaster.success(res.message.msg);
    //         this.ref.close()
    //       } else {
    //         this.toaster.error(res.message.msg);
    //       }
    //     })
    //   }
    // }
    console.log(payload)
    this.services.assignTask(payload,this.services.userToken).subscribe((res: any) => {
            debugger;
            if (res.code == 200) {
              this.toaster.success(res.message);
              console.log(res.data);
              this.ref.close()
            } else {
              console.log(res.data);
              this.toaster.error(res.message);
            }
          })
  }

}
